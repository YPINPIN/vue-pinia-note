// colorBg.js
import { defineStore } from 'pinia';
import { rgbToHex, rgbToHsl } from '@/utility/colorTools';

export const useColorBgStore = defineStore('colorBg', {
  state: () => {
    return {
      r: 222,
      g: 184,
      b: 135,
      data: null,
    };
  },
  getters: {
    hex: (state) => {
      return rgbToHex(state.r, state.g, state.b);
    },
    hsl: (state) => {
      return rgbToHsl(state.r, state.g, state.b);
    },
    apiColorImg: (state) => state.data?.image.bare,
    apiColorHsl: (state) => state.data?.hsl.value,
    apiColorLightness: (state) => state.data?.hsl.l,
  },
  actions: {
    getRandomNum(minNum, maxNum) {
      return Math.round(Math.random() * (maxNum - minNum) + minNum);
    },
    randomColor() {
      this.r = this.getRandomNum(0, 255);
      this.g = this.getRandomNum(0, 255);
      this.b = this.getRandomNum(0, 255);
      this.getColorData();
    },
    // 異步 Action
    async getColorData() {
      try {
        const res = await fetch(
          `https://www.thecolorapi.com/id?hex=${this.hex.slice(1)}`
        );
        this.data = await res.json();
      } catch (err) {
        alert('get color api error:', err);
      }
    },
  },
});
