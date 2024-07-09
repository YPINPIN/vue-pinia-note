<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
});
</script>

<template>
  <h2 class="main-title">
    {{ title }}
    <a v-if="link" :href="link" target="_blank">📖</a>
  </h2>
</template>

<style scoped>
.main-title {
  color: blue;
  padding: 10px;
  font-size: 24px;
  line-height: 24px;
  font-weight: bold;
  border: 1px solid blue;
  text-align: center;
}
</style>
