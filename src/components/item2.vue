<template>
  <div>
    <h2>产品月销</h2>
    <div class="chart" id="mon">图表的容器</div>
  </div>
</template>

<script>
import { inject, reactive, onMounted } from "vue";
export default {
  setup() {
    const $echarts = inject("echarts");
    const $http = inject("axios");
    let data = reactive({});
    /**
     * 封装函数  发送请求
     */
    async function getState() {
      data = await $http({ url: "/2/data" });
    }
    /**
     * 封装函数  插入月销图
     */
    function initMonSale() {
      const chartMon = $echarts.init(document.getElementById("mon"));
      chartMon.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#e6b600",
            },
          },
        },
        legend: {
          data: ["服饰", "数码", "家电", "家居", "日化"],
        },
        grid: {
          left: "1%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: data.data.chartTwo.chartData.day,
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
            type: "line",
            data: data.data.chartTwo.chartData.num.Chemicals,
            smooth: true,
            showSymbol: false,
            stack: "Total",
            lineStyle: {
              width: 0,
            },
            emphasis: {
              focus: "series",
            },
            areaStyle: {
              opacity: 0.8,
              color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(128,255,165)",
                },
                {
                  offset: 1,
                  color: "rgb(1,191,236)",
                },
              ]),
            },
          },
          {
            name: "数码",
            type: "line",
            data: data.data.chartTwo.chartData.num.Clothes,
            smooth: true,
            showSymbol: false,
            stack: "Total",
            lineStyle: {
              width: 0,
            },
            emphasis: {
              focus: "series",
            },
            areaStyle: {
              opacity: 0.8,
              color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(0,221,255)",
                },
                {
                  offset: 1,
                  color: "rgb(77,119,255)",
                },
              ]),
            },
          },
          {
            name: "家电",
            type: "line",
            data: data.data.chartTwo.chartData.num.Electrical,
            smooth: true,
            showSymbol: false,
            stack: "Total",
            lineStyle: {
              width: 0,
            },
            emphasis: {
              focus: "series",
            },
            areaStyle: {
              opacity: 0.8,
              color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(55,162,255)",
                },
                {
                  offset: 1,
                  color: "rgb(116,21,219)",
                },
              ]),
            },
          },
          {
            name: "家居",
            type: "line",
            data: data.data.chartTwo.chartData.num.dight,
            smooth: true,
            showSymbol: false,
            stack: "Total",
            lineStyle: {
              width: 0,
            },
            emphasis: {
              focus: "series",
            },
            areaStyle: {
              opacity: 0.8,
              color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(255,0,135)",
                },
                {
                  offset: 1,
                  color: "rgb(135,0,157)",
                },
              ]),
            },
          },
          {
            name: "日化",
            type: "line",
            data: data.data.chartTwo.chartData.num.gear,
            smooth: true,
            showSymbol: false,
            stack: "Total",
            lineStyle: {
              width: 0,
            },
            emphasis: {
              focus: "series",
            },
            areaStyle: {
              opacity: 0.8,
              color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(255,191,0)",
                },
                {
                  offset: 1,
                  color: "rgb(224,62,76)",
                },
              ]),
            },
          },
        ],
      });
    }
    onMounted(() => {
      getState().then(() => {
        console.log("折线图", data);
        initMonSale();
      });
    });
    return {
      getState,
      initMonSale,
    };
  },
};
</script>

<style></style>
