<script setup>
import { useRouter } from 'vue-router';
import { ref, watch } from 'vue';
import { tabs, currentTab } from '@/utility/tabData.js';

const tab_wrapper = ref(null);
const btns = ref([]);

const router = useRouter();

// 滾動至對應tab
function scrollToCenter() {
  let index = btns.value.findIndex((el) => el.dataset.key === currentTab.value);
  let width = tab_wrapper.value.getBoundingClientRect().width / 2;
  tab_wrapper.value.scrollTo({
    left: 154 * index - width + 75,
  });
}
watch(
  () => currentTab.value,
  () => {
    scrollToCenter();
  }
);
</script>

<template>
  <h1>Hello Pinia!</h1>

  <nav>
    <div class="tab-wrapper" ref="tab_wrapper">
      <button
        v-for="(data, key) in tabs"
        :key="key"
        :class="['tab-button', { active: currentTab.value === key }]"
        @click="router.push(`/?tab=${key}`)"
        ref="btns"
        :data-key="key"
      >
        {{ data.name }}
      </button>
    </div>
    <component :is="tabs[currentTab.value].comp" class="tab"></component>
  </nav>

  <main>
    <router-view />
  </main>
</template>

<style scoped>
a {
  text-decoration: none;
  font-size: 20px;
}
.tab-wrapper {
  display: flex;
  overflow-x: scroll;
}
.tab-button {
  min-width: 150px;
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  color: black;
  cursor: pointer;
  background-color: #f0f0f0;
  font-size: 16px;
  line-height: 16px;
  margin: 2px 4px 0px 0px;
}
.tab-button:hover {
  background-color: #e0e0e0;
}
.tab-button.active {
  background-color: #c6c4c4;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
  overflow: auto;
}
</style>
