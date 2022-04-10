<template>
  <div>
    <header>
      <h1>大数据可视化 (vue3.0/echarts)</h1>
    </header>
    <!-- 主体 -->
    <section class="container">
      <!-- 左容器 -->
      <section class="container-left">
        <Item>
          <Item1 />
        </Item>
        <Item>
          <Item2 />
        </Item>
      </section>
      <!-- 中容器 -->
      <section class="container-center">
        <MapPage />
      </section>
      <!-- 右容器 -->
      <section class="container-right">
        <Item>
          <Item3 />
        </Item>
        <Item>
          <Item4 />
        </Item>
      </section>
    </section>
  </div>
</template>

<script>
import Item from "../components/item.vue";
import Item1 from "../components/item1.vue";
import Item2 from "../components/item2.vue";
import Item3 from "../components/item3.vue";
import Item4 from "../components/item4.vue";
import MapPage from "../components/MapPage.vue";

// import { inject } from "vue";
export default {
  components: {
    Item,
    Item1,
    Item2,
    Item3,
    Item4,
    MapPage,
  },

  setup() {
    // const $echarts = inject("echarts");
    // const $http = inject("axios");
    // console.log($echarts);
    // console.log($http);
  },
};
</script>

<style lang="less">
header {
  height: 0.65rem;
  width: 100%;
  background-color: rgba(71, 71, 100, 0.2);
  h1 {
    font-size: 0.4rem;
    color: #fff;
    text-align: center;
  }
}

// 主体样式
.container {
  // 最大最小宽度
  min-width: 1200px;
  max-width: 2048px;
  margin: 0 auto;
  // border: 1px solid red;
  padding: 0.125rem 0.125rem 0;
  // background-color: gray;
  display: flex;
  &-left,
  &-right {
    flex: 3;
  }
  &-center {
    flex: 5;
    height: 10.5rpx;
    // border: 1px solid blue;
    padding: 0.125rem;
    margin: 0.25rem;
  }
}
</style>
