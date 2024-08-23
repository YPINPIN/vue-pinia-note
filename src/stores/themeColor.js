// themeColor.js
import { defineStore } from 'pinia';

const themeColor = {
  light: {
    background: 'lightgrey',
    text: 'black',
  },
  dark: {
    background: 'black',
    text: 'white',
  },
};

export const useThemeColorStore = defineStore('themeColor', {
  state: () => {
    return {
      theme: themeColor['light'],
    };
  },
  actions: {
    changeThemeByName(name) {
      if (themeColor.hasOwnProperty(name)) {
        this.theme = themeColor[name];
        return Promise.resolve('success');
      } else {
        return Promise.reject(`theme ${name} not found`);
      }
    },
  },
});
