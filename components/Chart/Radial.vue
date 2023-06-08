<script setup>
const props = defineProps({
  data: { type: Object },
})

const series = [props.data?.value]
const chartOptions = {
  chart: {
    height: 350,
    type: 'radialBar',
    toolbar: {
      show: true
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
      hollow: {
        margin: 0,
        size: '70%',
        background: '#fff',
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24
        }
      },
      track: {
        background: '#fff',
        strokeWidth: '67%',
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35
        }
      },

      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: true,
          color: '#888',
          fontSize: '17px'
        },
        value: {
          formatter: function (val) {
            return parseInt(val);
          },
          color: '#111',
          fontSize: '36px',
          show: true,
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ['#ABE5A1'],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: 'round'
  },
  title: {
    text: props.data?.title
  },
  colors: [props.data?.color],
  labels: [props.data?.label],
}

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