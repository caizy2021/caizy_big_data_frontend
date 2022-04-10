<template>
  <div>
    <h2>产品类别</h2>
    <div class="chart" id="statistics">图表的容器</div>
  </div>
</template>

<script>
import { inject, onMounted, reactive } from "vue";
export default {
  setup() {
    const $echarts = inject("echarts");
    const $http = inject("axios");
    let data = reactive({});
    /**
     * 封装函数  发送请求
     */
    async function getState() {
      data = await $http({ url: "/4/data" });
    }
    /**
     * 封装函数  插入图表
     */
    function initStatis() {
      const chartStatis = $echarts.init(document.getElementById("statistics"));
      chartStatis.setOption({
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {},
        xAxis: {
          type: "category",
          data: data.data.chartFour.chartData.day,
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
        },
        series: [
          {
            name: "服饰",
            type: "bar",
            data: data.data.chartFour.chartData.num.Chemicals,
            stack: "Total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            name: "数码",
            type: "bar",
            data: data.data.chartFour.chartData.num.Clothes,
            stack: "Total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            name: "家电",
            type: "bar",
            data: data.data.chartFour.chartData.num.Electrical,
            stack: "Total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            name: "家居",
            type: "bar",
            data: data.data.chartFour.chartData.num.dight,
            stack: "Total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            name: "日化",
            type: "bar",
            data: data.data.chartFour.chartData.num.gear,
            stack: "Total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
          },
        ],
      });
    }
    onMounted(() => {
      getState().then(() => {
        console.log("库存统计图", data);
        initStatis();
      });
    });
    return {
      getState,
      initStatis,
    };
  },
};
</script>

<style></style>
