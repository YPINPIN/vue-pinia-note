// test1.js
import { defineStore } from 'pinia';

export const useTest1Store = defineStore('test1', {
  state: () => {
    return {
      info: 'test1 word',
    };
  },
  actions: {
    changeWord() {
      this.word += '?';
    },
    changeShared() {
      this.shared += '!';
    },
    changeError() {
      this.hasError = !this.hasError;
    },
    changeInfo() {
      this.info += '1';
    },
  },
});
