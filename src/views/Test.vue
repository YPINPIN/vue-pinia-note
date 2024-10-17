<script setup>
import { useTest1Store } from '@/stores/test1';
import { useTest2Store } from '@/stores/test2';

const test1 = useTest1Store();
const test2 = useTest2Store();
</script>

<template>
  <h2>Test page</h2>
  <table>
    <thead>
      <tr>
        <th>Store</th>
        <th>test1</th>
        <th>test2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>info</th>
        <td>{{ test1.info }}</td>
        <td>{{ test2.info }}</td>
      </tr>
      <tr>
        <th>secret</th>
        <td>{{ test1.secret }}</td>
        <td>{{ test2.secret }}</td>
      </tr>
      <tr>
        <th>hello</th>
        <td>{{ test1.hello }}</td>
        <td>{{ test2.hello }}</td>
      </tr>
      <tr>
        <th>hello2</th>
        <td>{{ test1.hello2 }}</td>
        <td>{{ test2.hello2 }}</td>
      </tr>
      <tr>
        <th>word</th>
        <td>{{ test1.word }}</td>
        <td>{{ test2.word }}</td>
      </tr>
      <tr>
        <th>shared</th>
        <td>{{ test1.shared }}</td>
        <td>{{ test2.shared }}</td>
      </tr>
      <tr>
        <th>hasError</th>
        <td>{{ test1.hasError }}</td>
        <td>{{ test2.hasError }}</td>
      </tr>
    </tbody>
  </table>

  <div class="action-wrapper">
    <div class="action-div">
      <button @click="test1.changeWord()">test1 change word</button>
      <button @click="test1.changeShared()">test1 change shared</button>
    </div>
    <div class="action-div">
      <button @click="test1.changeError()">test1 change hasError</button>
      <button @click="test2.changeError()">test2 change hasError</button>
    </div>
    <div class="action-div">
      <button @click="test1.changeInfo()">test1 change info</button>
      <button @click="test2.changeInfo()">test2 change info</button>
    </div>
    <div class="action-div">
      <button @click="test1.$reset()">test1 reset state</button>
      <button @click="test2.$reset()">test2 reset state</button>
    </div>
  </div>
</template>

<style scoped>
table {
  border-collapse: collapse;
  border: 2px solid gray;
  font-size: 20px;
}
th,
td {
  border: 1px solid gray;
  padding: 8px 20px;
}
.action-div {
  margin-top: 10px;
}
.action-div button {
  margin-right: 10px;
  padding: 8px 20px;
}
</style>
