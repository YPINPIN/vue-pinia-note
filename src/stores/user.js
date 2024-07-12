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

// Setup Store
// import { ref } from 'vue';
// export const useUserStore = defineStore('user', () => {
//   const count = ref(0);
//   const name = ref('Eduardo');
//   const age = ref(30);
//   const items = ref([]);
//   const isAdmin = ref(true);

//   return { count, name, age, items, isAdmin };
// });
