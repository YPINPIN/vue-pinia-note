// preferences.js
import { defineStore } from 'pinia';
// import AuthStore
import { useAuthStore } from './auth';

export const usePreferencesStore = defineStore('preferences', {
  state: () => {
    return {
      theme: 'light',
    };
  },
  actions: {
    changeTheme() {
      // 使用其他的 Store
      const auth = useAuthStore();
      if (!auth.isAuthenticated) {
        alert('User must be authenticated.');
        return;
      }
      this.theme = this.theme === 'light' ? 'dark' : 'light';
    },
  },
});
