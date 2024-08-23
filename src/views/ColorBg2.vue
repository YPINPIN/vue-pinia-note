<script setup>
import { useColorBg2Store } from '@/stores/colorBg2';

const colorBg2 = useColorBg2Store();
// 可以像方法一樣調用 Action
colorBg2.getColorData();
</script>

<template>
  <h2>ColorBg2 page (Setup)</h2>
  <div
    class="bg"
    :style="{
      backgroundColor: colorBg2.hex,
      color: colorBg2.hsl.l > 50 ? 'black' : 'white',
    }"
  >
    {{ colorBg2.hex }}
  </div>
  <div>
    <!-- 模板中也可以直接調用 Action -->
    <button @click="colorBg2.randomColor()">random color</button>
  </div>
  <div v-if="colorBg2.data">
    <p>
      use
      <a href="https://www.thecolorapi.com/" target="_blank">The Color Api</a>
      get color img：
    </p>
    <div class="api_color_wrapper">
      <img :src="colorBg2.apiColorImg" class="api_color_img" alt="color-img" />
      <span
        class="api_color_hsl"
        :style="{
          color: colorBg2.apiColorLightness > 50 ? 'black' : 'white',
        }"
        >{{ colorBg2.apiColorHsl }}</span
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
