<script setup>
const series = ref([44, 55, 41, 17])
const chartOptions = ref({
  chart: {
    width: 380,
    type: 'donut',
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270
    }
  },
  dataLabels: {
    enabled: true,
  },
  fill: {
    type: 'gradient',
  },
  legend: {
    formatter: function (val, opts) {
      return val + " - " + opts.w.globals.series[opts.seriesIndex]
    }
  },
  title: {
    text: 'Statistics'
  },
  labels: ["Shipped", "Delivered", "Pending", "Cancelled"],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 300
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
})

const isMounted = ref(false)
onMounted(() => setTimeout(() => isMounted.value = true, 500))
onUnmounted(() => isMounted.value = false)
</script>
  
<template>
  <div v-if="isMounted">
    <ClientOnly>
      <apexchart width="100%" :options="chartOptions" :series="series"></apexchart>
    </ClientOnly>
  </div>
</template>


<style lang="scss" scoped></style>