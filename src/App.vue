<template>
  <router-view />
</template>

<script>
import { provide } from "vue";
import * as echarts from "echarts";
import axios from "axios";

// 设置axios的基准路径
axios.defaults.baseURL = "http://caizy.cc:2101";
export default {
  setup() {
    // provide('名字随便起','传递的内容')
    provide("echarts", echarts);
    provide("axios", axios);
  },
};
</script>

<style lang="less">
body {
  background: url("./assets/ios1.jpg") top center no-repeat;
}
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>
