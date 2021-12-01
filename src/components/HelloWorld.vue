<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      option: {
        series: [
          {
            type: "liquidFill",
            data: [0.6],
          },
        ],
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chart {
  height: 400px;
}
</style>
