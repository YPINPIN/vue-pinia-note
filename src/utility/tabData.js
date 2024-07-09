import { reactive } from 'vue';
import NavLink_1 from '@/components/NavLink_1.vue';

export const tabs = {
  Demo1: { name: 'Store 介紹', comp: NavLink_1 },
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
