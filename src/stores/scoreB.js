// scoreB.js
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useScoreBStore = defineStore('scoreB', () => {
  const score = ref(0);
  const doubleScore = computed(() => score.value * 2);
  const doubleScorePlusOne = computed(() => doubleScore.value + 1);

  return { score, doubleScore, doubleScorePlusOne };
});
