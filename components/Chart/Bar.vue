<script setup>
const options = ref({
  chart: {
    type: 'bar',
  },
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 10,
      borderRadiusApplication: 'around',
    },
  },
  title: {
    text: 'Transaction',
  },
});
const series = ref([
  {
    name: 'Transaction',
    data: [],
  },
]);
const updateChart = () => {
  //generate array of random numbers of length 10
  const data = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
  options.value = {
    ...options.value,
    xaxis: {
      categories: Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i), // array of last 10 years
    },
  };
  series.value = [
    {
      name: 'Transaction',
      data: data,
    },
  ];
};

onMounted(() => setTimeout(() => updateChart(), 500));
</script>

<template>
  <ClientOnly>
    <apexchart :key="series" height="400" width="100%" :options="options" :series="series"></apexchart>
  </ClientOnly>
  <button class="bg-blue-darken-3 d-none text-white font-weight-bold py-2 px-4 rounded" @click="updateChart">
    Change
  </button>
</template>

<style scoped></style>
