<script setup>
import { useColorBgStore } from '@/stores/colorBg';

const colorBg = useColorBgStore();
// 可以像方法一樣調用 Action
colorBg.getColorData();
</script>

<template>
  <h2>ColorBg page (Option)</h2>
  <div
    class="bg"
    :style="{
      backgroundColor: colorBg.hex,
      color: colorBg.hsl.l > 50 ? 'black' : 'white',
    }"
  >
    {{ colorBg.hex }}
  </div>
  <div>
    <!-- 模板中也可以直接調用 Action -->
    <button @click="colorBg.randomColor()">random color</button>
  </div>
  <div v-if="colorBg.data">
    <p>
      use
      <a href="https://www.thecolorapi.com/" target="_blank">The Color Api</a>
      get color img：
    </p>
    <div class="api_color_wrapper">
      <img :src="colorBg.apiColorImg" class="api_color_img" alt="color-img" />
      <span
        class="api_color_hsl"
        :style="{
          color: colorBg.apiColorLightness > 50 ? 'black' : 'white',
        }"
        >{{ colorBg.apiColorHsl }}</span
      >
    </div>
  </div>
</template>

<style scoped>
.bg {
  width: 150px;
  height: 150px;
  border: 1px solid black;
  margin-bottom: 10px;
  text-align: center;
  font-size: 20px;
  line-height: 150px;
}
.api_color_wrapper {
  position: relative;
  width: 150px;
  height: 150px;
}
.api_color_img {
  border-radius: 10px;
  width: 150px;
  height: 150px;
}
.api_color_hsl {
  position: absolute;
  width: 150px;
  text-align: center;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>
