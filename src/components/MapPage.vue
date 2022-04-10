<template>
  <div class="map"></div>
</template>

<script>
import axios from "axios";
import { onMounted, reactive, inject } from "vue";

export default {
  setup() {
    const $echarts = inject("echarts");
    let mapData = reactive({});
    async function getState() {
      mapData = await axios.get("/china/data");
    }
    onMounted(() => {
      getState().then(() => {
        console.log("map", mapData);
        initMap(); // 插入地图
      });
    });
    /**
     * 封装函数 插入地图
     */
    const initMap = () => {
      $echarts.registerMap("china", mapData.data.chinaMap);
      const chinaMap = $echarts.init(document.querySelector(".map"));
      // console.log(chinaMap);
      chinaMap.setOption({
        geo: {
          map: "china",
          itemStyle: {
            areaColor: "#2376b7",
            borderColor: "#00ffff",
            shadowColor: "rgba(230,130,70,0.5)",
            shadowBlur: 30,
            emphasis: {
              focus: "self",
            },
          },
        },
        // 散点图数据
        title: {
          // 标题
          text: "城市销量",
          left: "45%",
          textStyle: {
            color: "#fff",
            fontSize: 20,
            textShadowBlur: 10,
            textShadowColor: "#2376b7",
          },
        },
        visualMap: {
          // 视觉映射选择器
          type: "continuous",
          min: 100,
          max: 5000,
          calculable: true,
          inRange: {
            color: ["#50a3ba", "#eac736", "#d94e5d"],
          },
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          // 悬浮框
          trigger: "item",
        },
        series: [
          {
            type: "scatter",
            itemStyle: {
              color: "red",
            },
            coordinateSystem: "geo",
            data: [
              { name: "北京", value: [116.46, 39.92, 4367] },
              { name: "上海", value: [121.48, 31.22, 8675] },
              { name: "深圳", value: [114.07, 22.62, 2461] },
              { name: "广州", value: [113.23, 23.16, 187] },
              { name: "西安", value: [108.45, 34, 3421] },
            ],
          },
        ],
      });
    };

    return {
      getState,
      mapData,
    };
  },
};
</script>

<style>
.map {
  width: 100%;
  height: 100%;
}
</style>
