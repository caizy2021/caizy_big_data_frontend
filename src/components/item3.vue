<template>
  <div>
    <h2>库存统计</h2>
    <div class="chart" id="pie">图表的容器</div>
  </div>
</template>

<script>
import { onMounted, inject, reactive } from "vue";
export default {
  setup() {
    const $echarts = inject("echarts");
    const $http = inject("axios");
    let data = reactive({});
    async function getState() {
      data = await $http({ url: "/3/data" });
    }
    /**
     * 封装函数  插入饼图
     */
    const initPie = () => {
      const chartPie = $echarts.init(document.getElementById("pie")); // 获取dom元素
      chartPie.setOption({
        legend: {
          top: "bottom",
        },
        tooltip: {
          show: true,
        },
        series: [
          {
            type: "pie",
            data: data.data.chartThree.chartData,
            radius: [10, 100],
            center: ["50%", "45%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 10,
            },
          },
        ],
      });
    };
    onMounted(() => {
      getState().then(() => {
        console.log("饼状图", data);
        initPie(); // 插入饼图
      });
    });
    return {
      getState,
      initPie,
      data,
    };
  },
};
</script>

<style>
.chart {
  height: 4.5rem;
}
h2 {
  height: 0.6rem;
  color: white;
  line-height: 0.6rem;
  font-size: 0.25rem;
  text-align: center;
}
</style>
