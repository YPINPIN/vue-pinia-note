<script setup>
import { useUserStore } from '@/stores/user';
import { onUnmounted } from 'vue';

const user = useUserStore();

// 監聽 State 變化
user.$subscribe((mutation, state) => {
  console.log('$subscribe-----');
  console.log('mutation: ', mutation);
  console.log('state: ', state);
});

user.count += 10;

function patchState() {
  user.$patch({
    count: 50,
    name: 'Eduardo~~~',
    age: 35,
  });
}
function patchState2() {
  user.$patch((state) => {
    state.count += 2;
    state.items.push({ name: 'shoes', quantity: 1 });
  });
}
</script>

<template>
  <h2>User page</h2>
  <p>count: {{ user.count }}</p>
  <p>name: {{ user.name }}</p>
  <p>age: {{ user.age }}</p>
  <p>items: {{ user.items }}</p>
  <p>isAdmin: {{ user.isAdmin }}</p>
  <div>
    <button @click="user.count++">add count</button>
    <button @click="user.$reset()">reset state</button>
    <button @click="patchState">patch state</button>
    <button @click="patchState2">patch state 2</button>
  </div>
</template>
