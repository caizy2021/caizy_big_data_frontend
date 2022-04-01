<template>
  <div>
    <h2>图表1</h2>
    <div class="chart" id="oneChart">图表的容器</div>
  </div>
</template>

<script>
import { inject, onMounted } from "vue";
export default {
  setup() {
    const $echarts = inject("echarts");
    const $http = inject("axios");

    async function getState() {
      const data = await $http({ url: "/1/data" });
      console.log(data.data.chartOne.chartData);
    }

    onMounted(() => {
      // 调用数据请求
      getState();
      // 获取dom元素
      const charts = $echarts.init(document.querySelector(".chart"));
      // 配置echats
      charts.setOption({
        xAxis: {
          type: "value",
        },
        yAxis: {
          type: "category",
        },
        series: [
          {
            type: "bar",
          },
        ],
      });
    });
    return {};
  },
};
</script>

<style></style>
