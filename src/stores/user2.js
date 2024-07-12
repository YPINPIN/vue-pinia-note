// user2.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUser2Store = defineStore('user2', () => {
  const count = ref(10);
  const name = ref('Peter');
  const age = ref(25);
  const items = ref([]);
  const isAdmin = ref(false);

  // $reset()
  function $reset() {
    count.value = 10;
    name.value = 'Peter';
    age.value = 25;
    items.value = [];
    isAdmin.value = false;
  }

  return { count, name, age, items, isAdmin, $reset };
});
