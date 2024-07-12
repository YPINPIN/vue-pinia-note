// setting.js
import { defineStore } from 'pinia';

export const useSettingStore = defineStore('setting', {
  state: () => {
    return {
      prefix: '@',
    };
  },
  getters: {
    userPrefix: (state) => state.prefix + 'user-',
  },
});
