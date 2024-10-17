// test2.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTest2Store = defineStore('test2', () => {
  const info = ref('test2 word');

  function changeError() {
    this.$state.hasError = !this.$state.hasError;
  }

  function changeInfo() {
    info.value += '2';
  }

  // $reset()
  function $reset() {
    info.value = 'test2 word';
  }

  return { info, changeError, changeInfo, $reset };
});
