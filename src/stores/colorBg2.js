// colorBg2.js
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { rgbToHex, rgbToHsl } from '@/utility/colorTools';

export const useColorBg2Store = defineStore('colorBg2', () => {
  const r = ref(222);
  const g = ref(184);
  const b = ref(135);
  const data = ref(null);

  const hex = computed(() => rgbToHex(r.value, g.value, b.value));
  const hsl = computed(() => rgbToHsl(r.value, g.value, b.value));
  const apiColorImg = computed(() => data.value?.image.bare);
  const apiColorHsl = computed(() => data.value?.hsl.value);
  const apiColorLightness = computed(() => data.value?.hsl.l);

  function getRandomNum(minNum, maxNum) {
    return Math.round(Math.random() * (maxNum - minNum) + minNum);
  }
  function randomColor() {
    r.value = getRandomNum(0, 255);
    g.value = getRandomNum(0, 255);
    b.value = getRandomNum(0, 255);
    getColorData();
  }
  // 異步 Action
  async function getColorData() {
    try {
      const res = await fetch(
        `https://www.thecolorapi.com/id?hex=${hex.value.slice(1)}`
      );
      data.value = await res.json();
    } catch (err) {
      alert('get color api error:', err);
    }
  }

  return {
    r,
    g,
    b,
    data,
    hex,
    hsl,
    apiColorImg,
    apiColorHsl,
    apiColorLightness,
    randomColor,
    getColorData,
  };
});
