<script setup>
import { usePhoto1Store } from '@/stores/photo1';
import { usePhoto2Store } from '@/stores/photo2';

const photo1 = usePhoto1Store();
const photo2 = usePhoto2Store();
</script>

<template>
  <h2>Photo page</h2>
  <h3>在 Plugin 中使用 lodash/debounce 庫設置防抖</h3>
  <hr />
  <div>
    <button @click="photo1.randomPhoto()">random photo1 (option)</button>
    <div v-if="photo1.photoData">
      <p>photo1 data : {{ photo1.photoData }}</p>
    </div>
  </div>
  <br />
  <div>
    <button @click="photo2.randomPhoto()">random photo2 (setup)</button>
    <div v-if="photo2.photoData">
      <p>photo2 data : {{ photo2.photoData }}</p>
    </div>
  </div>
</template>
