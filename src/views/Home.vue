<template>
  <div>
    <header>
      <h1>大数据可视化 (vue3.0/echarts)</h1>
    </header>
    <!-- 主体 -->
    <section class="container">
      <!-- 左容器 -->
      <section class="container-left">
        <item>
          <item1 />
        </item>
        <item>
          <item2 />
        </item>
      </section>
      <!-- 中容器 -->
      <section class="container-center">
        <h2>地图展示</h2>
      </section>
      <!-- 右容器 -->
      <section class="container-right">
        <item>
          <item3 />
        </item>
        <item>
          <item4 />
        </item>
      </section>
    </section>
  </div>
</template>

<script>
import item from "../components/item.vue";
import item1 from "../components/item1.vue";
import item2 from "../components/item2.vue";
import item3 from "../components/item3.vue";
import item4 from "../components/item4.vue";
export default {
  components: {
    item,
    item1,
    item2,
    item3,
    item4,
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
  border: 1px solid red;
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
    border: 1px solid blue;
    padding: 0.125rem;
    margin: .25rem;
  }
}
</style>
