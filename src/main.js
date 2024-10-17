import { createApp, ref, toRef } from 'vue';
import App from './App.vue';
import router from './router';
import MainTitle from './components/MainTitle.vue';

// 使用任意防抖庫
import { debounce } from 'lodash';

// 創建 pinia 實例
import { createPinia } from 'pinia';
const pinia = createPinia();

// Plugin - 創建的每個 store 中都會添加一個名為 'secret' 的靜態屬性
function SecretPiniaPlugin(context) {
  /**
   * context.pinia -> 用 createPinia() 創建的 pinia 實例
   * context.app -> 用 createApp() 創建的當前 Vue 應用(僅 Vue 3)
   * context.store -> Plugin 想擴展的 Store
   * context.options -> 定義傳給 defineStore() 的 store 的 options物件
   */
  return {
    secret: 'the cake is a lie',
  };
}
//使用 pinia.use() 將 Plugin 加入 pinia 實例
pinia.use(SecretPiniaPlugin);

// 擴展 Store 方法一
pinia.use(() => ({ hello: 'world' }));

// 擴展 Store 方法二
// pinia.use(({ store }) => {
//   store.hello2 = 'world2';
// });
// 擴展 Store 方法二 (添加 devtools 追蹤)
pinia.use(({ store }) => {
  store.hello2 = 'world2';
  if (process.env.NODE_ENV == 'development') {
    store._customProperties.add('hello2');
  }
});

// Ref (`ref()`、`computed()` ...) 成員會被自動解包
const sharedRef = ref('shared');
pinia.use(({ store }) => {
  // 每個 Store 都有單獨的 `word` 屬性
  store.word = ref('secret');
  // 它會被自動解包
  console.log('store.word : ', store.word); // 'secret'

  // 所有的 Store 都在共享 `shared` 屬性的值
  store.shared = sharedRef;
  // 它會被自動解包
  console.log('store.shared : ', store.shared); // 'shared'

  // 添加 devtools 追蹤
  if (process.env.NODE_ENV == 'development') {
    store._customProperties.add('word');
    store._customProperties.add('shared');
  }
});

// 添加新的 State
pinia.use(({ store }) => {
  // 為了正確處理 SSR，需要確保沒有重寫任何一個現有的值
  if (!Object.prototype.hasOwnProperty(store.$state, 'hasError')) {
    // 在 Plugin 中定義 hasError，因此每個 Store 都有各自的 hasError 狀態
    const hasError = ref(false);
    // 在 store.$state 上設置，允許它在 SSR 期間被序列化
    store.$state.hasError = hasError;
  }
  /**
   * 需要將 ref 從 state 轉移到 store 上
   * 這樣兩種方式： store.hasError 和 store.$state.hasError 都可以訪問
   * 並且共享的為同一個變量
   */
  store.hasError = toRef(store.$state, 'hasError');
  /**
   * 這種情況下建議不需要返回 hasError，因為它會被顯示在 devtools 的 state 部分
   * 如果返回它，devtools 將顯示兩次
   */

  const originalReset = store.$reset.bind(store);
  // 重寫 $reset() 方法
  return {
    $reset() {
      originalReset();
      store.hasError = false;
    },
  };
});

// 在 Plugin 中讀取 options，以此來包裝 action 並替換原始 action
pinia.use(({ options, store }) => {
  if (options.debounce) {
    // 使用新的 action 來覆蓋原始 action
    return Object.keys(options.debounce).reduce((debouncedActions, action) => {
      debouncedActions[action] = debounce(
        store[action],
        options.debounce[action]
      );
      return debouncedActions;
    }, {});
  }
});

const app = createApp(App);

app.use(router);
// 使用 pinia
app.use(pinia);

app.component('MainTitle', MainTitle);

app.mount('#app');
