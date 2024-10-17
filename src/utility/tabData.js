import { reactive } from 'vue';
import NavLink_1 from '@/components/NavLink_1.vue';
import NavLink_2 from '@/components/NavLink_2.vue';
import NavLink_3 from '@/components/NavLink_3.vue';
import NavLink_4 from '@/components/NavLink_4.vue';
import NavLink_5 from '@/components/NavLink_5.vue';
import NavLink_6 from '@/components/NavLink_6.vue';
import NavLink_7 from '@/components/NavLink_7.vue';
import NavLink_8 from '@/components/NavLink_8.vue';

export const tabs = {
  Demo1: { name: 'Store 介紹', comp: NavLink_1, path: '/' },
  Demo2: { name: 'State 介紹', comp: NavLink_2, path: '/user' },
  Demo3: { name: 'Getter 介紹', comp: NavLink_3, path: '/score' },
  Demo4: {
    name: '向 Getter 傳遞參數 & 訪問其他 Store 的 Getter',
    comp: NavLink_4,
    path: '/userlist',
  },
  Demo5: {
    name: 'Action 介紹',
    comp: NavLink_5,
    path: '/colorbg',
  },
  Demo6: {
    name: 'Action 訪問其他的 Store',
    comp: NavLink_6,
    path: '/preferences',
  },
  Demo7: {
    name: '訂閱 Action',
    comp: NavLink_7,
    path: '/themecolor',
  },
  Demo8: {
    name: 'Plugin',
    comp: NavLink_8,
    path: '/test',
  },
};

export const currentTab = reactive({
  value: 'Demo1',
  set(newVal) {
    if (!tabs[newVal]) {
      this.set('Demo1');
      return;
    }
    this.value = newVal;
    sessionStorage.setItem('currentTab', newVal);
  },
});
