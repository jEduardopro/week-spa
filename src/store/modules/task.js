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
  datePickMenuSubtask: false,
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
  currentSubtask: {
    dates: {},
    description: null,
    due_date: null,
    due_date_short: null,
    id: null,
    meta: {},
    name: null,
    priority: null,
    priority_text: null,
    relationships: {},
    responsable_id: null,
    status: null,
    task_id: null,
  },
  editSubtaskDialog: false,
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
  [TASK.SET_SUBTASK](state, subtask) {
    state.currentSubtask = subtask;
  },
  [TASK.SHOW_EDIT_SUBTASK_DIALOG](state) {
    state.editSubtaskDialog = true;
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

  async addSubtask({ state, commit, dispatch }, parentTask) {
    try {
      let subtask = state.currentSubtask;
      let newSubtask = {
        task_id: parentTask.id,
        priority: 0,
      };
      let resp = await dispatch(
        "request",
        {
          method: "POST",
          url: "subtasks",
          data: newSubtask,
        },
        { root: true }
      );
      subtask = resp.data;
      parentTask.relationships.subtasks.push(subtask);
    } catch (error) {
      dispatch("catchError", error, { root: true });
    }
  },

  showEditSubtaskDialog({ commit }, currentSubtask) {
    commit(TASK.SET_SUBTASK, currentSubtask);
    commit(TASK.SHOW_EDIT_SUBTASK_DIALOG);
  },

  updateAfterTypingSubtask: debounce(
    ({ state, dispatch }, { name, subtaskId }) => {
      let payload = {
        id: subtaskId,
        task_id: state.currentTask.id,
        name,
      };
      dispatch("updateSubtask", payload).then((subtaskUpdated) => {
        if (subtaskUpdated) {
          let subtask = state.currentTask.relationships.subtasks.find(
            (t) => t.id == subtaskUpdated.id
          );
          if (subtask) {
            subtask.name = subtaskUpdated.name;
          }
        }
      });
    },
    500
  ),

  async updateSubtask({ state, commit, dispatch }, payload) {
    let subtaskUpdated = null;
    commit("TOGGLE_WAIT_RESPONSE", "loadingButton", { root: true });
    try {
      let resp = await dispatch(
        "request",
        {
          method: "PUT",
          url: `subtasks/${payload.id}`,
          data: payload,
        },
        { root: true }
      );
      subtaskUpdated = resp.data;
      state.currentSubtask = resp.data;
      let subtaskIndex = state.currentTask.relationships.subtasks.findIndex(
        (s) => s.id == payload.id
      );
      if (subtaskIndex != -1) {
        dispatch("updateSubtaskInArray", subtaskIndex);
      }
    } catch (error) {
      dispatch("catchError", error, { root: true });
    } finally {
      commit("TOGGLE_WAIT_RESPONSE", "loadingButton", { root: true });
      return subtaskUpdated;
    }
  },

  updateSubtaskInArray({ state }, subtaskIndex) {
    let subtaskUpdated = state.currentSubtask;
    state.currentTask.relationships.subtasks.splice(
      subtaskIndex,
      1,
      subtaskUpdated
    );
  },

  async deleteSubtask({ state, dispatch }, subtaskId) {
    let subtasks = state.currentTask.relationships.subtasks;
    let deleteSubtaskIndex = subtasks.findIndex((s) => s.id == subtaskId);
    subtasks.splice(deleteSubtaskIndex, 1);
    try {
      let resp = await dispatch(
        "request",
        {
          method: "DELETE",
          url: `subtasks/${subtaskId}`,
        },
        { root: true }
      );
    } catch (error) {
      dispatch("catchError", error, { root: true });
    }
  },
};
