<script setup>
import { usePreferencesStore } from '@/stores/preferences';

const preferences = usePreferencesStore();
</script>

<template>
  <h2>Preferences page</h2>
  <div
    class="bg"
    :style="{
      backgroundColor: preferences.theme === 'light' ? 'lightgrey' : 'black',
      color: preferences.theme === 'light' ? 'black' : 'white',
    }"
  >
    {{ preferences.theme }}
  </div>
  <div>
    <button @click="preferences.changeTheme()">change Theme</button>
  </div>
</template>

<style scoped>
.bg {
  width: 250px;
  height: 250px;
  border: 1px solid black;
  margin-bottom: 10px;
  text-align: center;
  font-size: 30px;
  line-height: 250px;
}
</style>
