<script setup>
const desserts = [
  {
    trackId: '1234567890',
    date: 'Jun, 2nd',
    status: 'New',
  },
  {
    trackId: '1234567890',
    date: 'Jun, 2nd',
    status: 'In-progress',
  },
  {
    trackId: '1234567890',
    date: 'Jun, 2nd',
    status: 'New',
  },
  {
    trackId: '1234567890',
    date: 'Jun, 2nd',
    status: 'New',
  },
  {
    trackId: '1234567890',
    date: 'Jun, 2nd',
    status: 'Delivered',
  },
  {
    trackId: '1234567890',
    date: 'Jun, 2nd',
    status: 'In-progress',
  },
  {
    trackId: '1234567890',
    date: 'Jun, 2nd',
    status: 'In-progress',
  },
  {
    trackId: '1234567890',
    date: 'Jun, 2nd',
    status: 'Delivered',
  },
  {
    trackId: '1234567890',
    date: 'Jun, 2nd',
    status: 'New',
  },
  {
    trackId: '1234567890',
    date: 'Jun, 2nd',
    status: 'In-progress',
  },
]
</script>

<template>
  <v-table density="compact">
    <thead>
      <tr>
        <th class="text-left">#</th>
        <th class="text-left">Tracking ID</th>
        <th class="text-left">Requested</th>
        <th class="text-left">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in desserts" :key="i">
        <td>{{ ++i }}</td>
        <td>{{ item.trackId }}</td>
        <td>{{ item.date }}</td>
        <td>
          <v-badge :color="item.status == 'New' ? 'info' : item.status == 'Delivered' ? 'success' : 'warning'"
            :content="item.status" inline></v-badge>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="4" class="text-center">
          <a href="#order" class="text-orange-darken-3">
            more <v-icon>mdi-arrow-right-thin</v-icon>
          </a>
        </td>
      </tr>
    </tfoot>
  </v-table>
</template>

<style scoped>
tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, .05);
}

:is(th, td, td>button) {
  font-size: 11px;
}
</style>