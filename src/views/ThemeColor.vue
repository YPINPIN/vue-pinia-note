<script setup>
import { useThemeColorStore } from '@/stores/themeColor';

const themeColor = useThemeColorStore();

// 訂閱 Action
themeColor.$onAction(({ name, store, args, after, onError }) => {
  const startTime = Date.now();
  // 將在執行的 action 之前觸發
  console.log(`---Start "${name}" with params [${args.join(', ')}].`);
  console.log(`store "${JSON.stringify(store)}"`);

  //將在 action 成功並完全運行或 resolve 之後觸發
  after((result) => {
    let time = Date.now() - startTime;
    console.log(`Finished "${name}" after ${time}ms.\nResult: ${result}.`);
    console.log(`store "${JSON.stringify(store)}"`);
  });

  //如果 action 拋出錯誤或 reject 時觸發
  onError((error) => {
    let time = Date.now() - startTime;
    console.warn(`Failed "${name}" after ${time}ms.\nError: ${error}.`);
  });
});
</script>

<template>
  <h2>ThemeColor page</h2>
  <div
    class="bg"
    :style="{
      backgroundColor: themeColor.theme.background,
      color: themeColor.theme.text,
    }"
  >
    Text
  </div>
  <div>
    <button @click="themeColor.changeThemeByName('light')">change light</button>
    <button @click="themeColor.changeThemeByName('dark')">change dark</button>
    <button @click="themeColor.changeThemeByName('blue')">change blue</button>
  </div>
</template>

<style scoped>
.bg {
  width: 250px;
  height: 250px;
  border: 1px solid black;
  margin-bottom: 10px;
  text-align: center;
  font-size: 30px;
  line-height: 250px;
}
</style>
