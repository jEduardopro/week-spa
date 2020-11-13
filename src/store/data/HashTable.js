const HashTable = () => {
  let instance;
  let data = {};

  const createInstance = () => {
    return {
      collection: (module = null) => {
        if (module) {
          return Object.values(data[module]);
        }
        return Object.values(data);
      },

      insert: (key, value, module = null) => {
        let hash = key.replaceAll("-", "");
        if (module) {
          if (!data[module]) {
            data[module] = {};
            data[module][hash] = value;
            return;
          }
          if (data[module][hash]) {
            return;
          }
          data[module][hash] = value;
          return;
        }
        if (data[hash]) {
          return;
        }
        data[hash] = value;
      },

      get: (key, module = null) => {
        let hash = key.replaceAll("-", "");
        if (module) {
          if (!data[module][hash]) {
            return null;
          } else {
            return data[module][hash];
          }
        }
        if (!data[hash]) {
          return null;
        }
        return data[hash];
      },

      remove: (key, module = null) => {
        let hash = key.replaceAll("-", "");
        if (module) {
          if (!data[module][hash]) {
            return;
          } else {
            delete data[module][hash];
          }
        }
        if (!data[hash]) {
          return;
        }
        delete data[hash];
      },
    };
  };

  const getInstance = () => {
    if (!instance) {
      instance = createInstance();
    }
    return instance;
  };

  return {
    getInstance,
  };
};
const hashTable = HashTable().getInstance();
export { hashTable };
