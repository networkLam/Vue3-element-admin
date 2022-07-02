<template>
  <div>
    <div class="one" ref="one" style=" height: 400px;"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import * as echarts from "echarts";
type EChartsOption = echarts.EChartsOption;
export default defineComponent({
  setup() {
    const one = ref(null);
    onMounted(() => {
      var myChart = echarts.init(one.value!);
      var option: EChartsOption;
      option = {
        title: {
          text: "各品牌季度出货量占比",
          subtext: "Fake Data",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter:"{b}占({d}%)" //格式化饼状图中的数据
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "小米" },
              { value: 735, name: "oppo" },
              { value: 580, name: "apple" },
              { value: 484, name: "vivo" },
              { value: 300, name: "荣耀" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
       
      };
       option && myChart.setOption(option);
        window.addEventListener("resize", function() {
          myChart.resize()
         
        })
    });
    return {
      one,
    };
  },
});
</script>

<style scoped>
.one{
    width: 100%;
   
}
</style>