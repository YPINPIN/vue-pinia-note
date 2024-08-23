<script setup>
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();
</script>

<template>
  <h2>Auth page</h2>
  <div>
    <button v-if="auth.isAuthenticated" @click="auth.logout()">Logout</button>
    <button v-else @click="auth.login()">Login</button>
  </div>
</template>
