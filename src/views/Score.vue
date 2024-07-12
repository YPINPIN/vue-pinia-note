<script setup>
import { useScoreAStore } from '@/stores/scoreA';
import { useScoreBStore } from '@/stores/scoreB';

const scoreA = useScoreAStore();
const scoreB = useScoreBStore();

// 跟 state 屬性一樣可以直接訪問
scoreA.score = 10;
scoreB.score = 15;
</script>

<template>
  <h2>Score page</h2>
  <p>
    scoreA - score: {{ scoreA.score }} | doubleScore: {{ scoreA.doubleScore }} |
    doubleScorePlusOne: {{ scoreA.doubleScorePlusOne }}
  </p>
  <p>
    scoreB - score: {{ scoreB.score }} | doubleScore: {{ scoreB.doubleScore }} |
    doubleScorePlusOne: {{ scoreB.doubleScorePlusOne }}
  </p>
</template>
