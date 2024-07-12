<script setup>
import { useUser2Store } from '@/stores/user2';

const user2 = useUser2Store();
user2.count += 10;
</script>

<template>
  <h2>User2 page</h2>
  <p>count: {{ user2.count }}</p>
  <p>name: {{ user2.name }}</p>
  <p>age: {{ user2.age }}</p>
  <p>items: {{ user2.items }}</p>
  <p>isAdmin: {{ user2.isAdmin }}</p>
  <div>
    <button @click="user2.count++">add count</button>
    <button @click="user2.$reset()">reset state</button>
  </div>
</template>
