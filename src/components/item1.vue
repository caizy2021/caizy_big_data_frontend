<template>
  <div>
    <h2>销售总量</h2>
    <div class="chart" id="oneChart">图表的容器</div>
  </div>
</template>

<script>
import { inject, onMounted, reactive } from "vue";
export default {
  setup() {
    const $echarts = inject("echarts");
    const $http = inject("axios");

    let data = reactive({});
    let xdata = reactive([]);
    let ydata = reactive([]);

    function setData() {
      xdata = data.data.chartOne.chartData.map((v) => v.title);
      ydata = data.data.chartOne.chartData.map((v) => v.num);
      console.log("xdata:", xdata);
      console.log("ydata:", ydata);
    }

    async function getState() {
      data = await $http({ url: "/1/data" });
      // console.log(data.data.chartOne.chartData);
    }

    onMounted(() => {
      // 获取dom元素
      const chart = $echarts.init(document.querySelector(".chart"));
      // 调用方法
      // 请求数据
      getState().then(() => {
        setData(); // 处理数据
        // 配置echats
        chart.setOption({
          // 设置图表位置
          grid: {
            top: "3%",
            left: "1%",
            right: "6%",
            bottom: "3%",
            containLabel: true, // 包含坐标轴位置在图表中
          },
          xAxis: {
            type: "value",
          },
          yAxis: {
            type: "category",
            data: xdata,
          },
          series: [
            {
              type: "bar",
              data: ydata,
              itemStyle: {
                barBorderRadius: [0, 20, 20, 0],
                color: new $echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#7F7FD5",
                  },
                  {
                    offset: 0.5,
                    color: "#86A8E7",
                  },
                  {
                    offset: 1,
                    color: "#91EAE4",
                  },
                ]),
              },
            },
          ],
        });
      });
    });
    return {
      getState,
      data,
      xdata,
      ydata,
      setData,
    };
  },
};
</script>

<style scoped>
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
