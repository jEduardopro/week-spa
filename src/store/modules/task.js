import { getField, updateField } from "vuex-map-fields";
import debounce from "lodash.debounce";
import { TASK } from "@/store/types";
export const state = {
  currentTask: {
    dates: {},
    description: null,
    due_date: null,
    due_date_short: null,
    id: null,
    meta: {},
    name: null,
    priority: null,
    priority_text: null,
    proyect_id: null,
    relationships: {},
    responsable_id: null,
    status: null,
    user_id: null,
  },
  date: new Date().toISOString().substr(0, 10),
  datePickMenu: false,
  nowDate: new Date().toISOString().substr(0, 10),
  priorities: [
    {
      priority: 2,
      priority_text: "alta",
    },
    {
      priority: 1,
      priority_text: "media",
    },
    {
      priority: 0,
      priority_text: "baja",
    },
  ],
  table: {
    headers: [
      {
        align: "start",
        text: "Nombre de la tarea",
        value: "name",
      },
      {
        text: "responsable",
        value: "responsable",
      },
      {
        text: "fecha de fin",
        value: "due_date",
      },
      {
        text: "prioridad",
        value: "priority_text",
      },
    ],
    search: "",
  },
  tasks: [],
};

export const getters = {
  getField,
};

export const mutations = {
  updateField,
  [TASK.SET_TASKS](state, tasks) {
    state.tasks = tasks;
  },
  [TASK.SET_TASK](state, task) {
    state.currentTask = task;
  },
  [TASK.UPDATE_TASK](state, task) {
    state.currentTask = task;
  },
};

export const actions = {
  setTasks({ commit }, tasks) {
    commit(TASK.SET_TASKS, tasks);
  },
  setCurrentTask({ commit }, task) {
    commit(TASK.SET_TASK, task);
  },
  updateAfterTyping: debounce(({ state, dispatch }) => {
    let payload = {
      id: state.currentTask.id,
      name: state.currentTask.name,
      description: state.currentTask.description,
    };
    dispatch("update", payload);
  }, 500),

  async updateResponsable({ state, commit, dispatch }) {
    let payload = {
      id: state.currentTask.id,
      responsable_id: state.currentTask.responsable_id
        ? state.currentTask.responsable_id
        : null,
    };
    let taskUpdated = await dispatch("update", payload);
    if (taskUpdated) {
      let task = state.tasks.find((t) => t.id == taskUpdated.id);
      if (task) {
        task.relationships = taskUpdated.relationships;
      }
    }
  },

  async updateDueDate({ state, dispatch }) {
    let payload = {
      id: state.currentTask.id,
      due_date: state.currentTask.due_date ? state.currentTask.due_date : null,
    };
    let taskUpdated = await dispatch("update", payload);
    if (taskUpdated) {
      let task = state.tasks.find((t) => t.id == taskUpdated.id);
      if (task) {
        task.due_date = taskUpdated.due_date;
        task.due_date_short = taskUpdated.due_date_short;
      }
    }
  },

  async updatePriority({ state, dispatch }) {
    let payload = {
      id: state.currentTask.id,
      priority: state.currentTask.priority,
    };
    let taskUpdated = await dispatch("update", payload);
    if (taskUpdated) {
      let task = state.tasks.find((t) => t.id == taskUpdated.id);
      if (task) {
        task.priority = taskUpdated.priority;
        task.priority_text = taskUpdated.priority_text;
      }
    }
  },

  async update({ state, commit, dispatch }, payload) {
    let taskUpdated = null;
    try {
      let resp = await dispatch(
        "request",
        {
          method: "PUT",
          url: `tasks/${payload.id}`,
          data: payload,
        },
        { root: true }
      );
      taskUpdated = resp.data;
      // commit([TASK.UPDATE_TASK], taskUpdated.data);
    } catch (error) {
      dispatch("catchError", error, { root: true });
    } finally {
      return taskUpdated;
    }
  },
};
