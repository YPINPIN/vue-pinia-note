// photo1.js
import { defineStore } from 'pinia';

export const usePhoto1Store = defineStore('photo1', {
  state: () => {
    return {
      photoData: null,
    };
  },
  actions: {
    async randomPhoto() {
      const id = Math.floor(Math.random() * 5000) + 1;
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/photos/${id}`
        );
        this.photoData = await res.json();
      } catch (err) {
        alert('randomPhoto error:', err);
      }
    },
  },
  // 新的選項，可以被 Plugin 讀取使用
  debounce: {
    randomPhoto: 300,
  },
});
