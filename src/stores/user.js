// user.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      // 所有屬性將會自動推斷出它們的類型
      count: 0,
      name: 'Eduardo',
      age: 30,
      items: [],
      isAdmin: true,
    };
  },
});
