// photo2.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePhoto2Store = defineStore(
  'photo2',
  () => {
    const photoData = ref(null);

    async function randomPhoto() {
      const id = Math.floor(Math.random() * 5000) + 1;
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/photos/${id}`
        );
        photoData.value = await res.json();
      } catch (err) {
        alert('randomPhoto error:', err);
      }
    }

    return { photoData, randomPhoto };
  },
  // 當使用 setup 語法時，自定義選項作為第三個參數傳遞
  {
    debounce: {
      randomPhoto: 300,
    },
  }
);
