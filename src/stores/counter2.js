// counter2.js
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCounter2Store = defineStore('counter2', () => {
  // 定義響應式屬性和方法，
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  // 返回想暴露的屬性及方法的物件
  return {
    count,
    doubleCount,
    increment,
  };
});
