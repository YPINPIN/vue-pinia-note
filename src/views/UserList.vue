<script setup>
import { useUserListStore } from '@/stores/userList';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const userList = useUserListStore();
const { users, getUserById, userListWithPrefix } = storeToRefs(userList);

const curUser = ref(null);
function onBtnIdClick(userId) {
  console.log('onBtnIdClick: ', userId);
  // 請注意解構後 <script setup> 中需要使用 `getUserById.value` 來調用
  curUser.value = getUserById.value(userId);
}
</script>

<template>
  <h2>UserList page</h2>
  <div>
    <span>getUserById： </span>
    <button @click="onBtnIdClick(user.id)" v-for="user in users" :key="user.id">
      {{ user.id }}
    </button>
  </div>
  <p v-if="curUser">curUser: {{ curUser }}</p>
  <hr />
  <p>userListWithPrefix:</p>
  <p>{{ userListWithPrefix }}</p>
</template>
