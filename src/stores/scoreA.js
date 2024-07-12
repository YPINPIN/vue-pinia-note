// scoreA.js
import { defineStore } from 'pinia';

export const useScoreAStore = defineStore('scoreA', {
  state: () => {
    return {
      score: 0,
    };
  },
  getters: {
    doubleScore: (state) => state.score * 2,
    // 使用 JSDoc 標注類型
    /**
     * @returns {number}
     */
    doubleScorePlusOne() {
      return this.doubleScore + 1;
    },
  },
});
