import { reactive } from 'vue';
import NavLink_1 from '@/components/NavLink_1.vue';
import NavLink_2 from '@/components/NavLink_2.vue';
import NavLink_3 from '@/components/NavLink_3.vue';
import NavLink_4 from '@/components/NavLink_4.vue';

export const tabs = {
  Demo1: { name: 'Store 介紹', comp: NavLink_1, path: '/' },
  Demo2: { name: 'State 介紹', comp: NavLink_2, path: '/user' },
  Demo3: { name: 'Getter 介紹', comp: NavLink_3, path: '/score' },
  Demo4: { name: '向 Getter 傳遞參數', comp: NavLink_4, path: '/userlist' },
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
