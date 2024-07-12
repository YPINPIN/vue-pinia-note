// userList.js
import { defineStore } from 'pinia';
// import SettingStore
import { useSettingStore } from './setting';

export const useUserListStore = defineStore('userList', {
  state: () => {
    return {
      users: [
        {
          id: 1,
          name: 'Joy',
          age: '20',
        },
        {
          id: 2,
          name: 'Tony',
          age: '35',
        },
        {
          id: 3,
          name: 'Peter',
          age: '16',
        },
      ],
    };
  },
  getters: {
    getUserById: (state) => {
      return (userId) => {
        console.log('getUserById--- userId: ', userId);
        return state.users.find((user) => user.id === userId);
      };
    },
    userListWithPrefix: (state) => {
      // 使用其他的 Store Getter
      const setting = useSettingStore();
      let newList = [];
      state.users.forEach((user) => {
        newList.push({
          ...user,
          name: setting.userPrefix + user.name.toLowerCase(),
        });
      });
      return newList;
    },
  },
});
