<script setup>
import { useDate } from 'vuetify/labs/date'

const date = useDate()
const formatted = date.format(new Date(), 'normalDateWithWeekday')

const selected = ref([])
const search = ref('')

const dialog = ref(false)
const dialogDelete = ref(false)

const headers = ref([
  { title: 'Waybill', align: 'start', key: 'waybill', },
  { title: 'Date', align: 'start', key: 'date' },
  { title: 'Received By', align: 'start', key: 'receiverName' },
  { title: 'Mobile', align: 'start', key: 'receiverPhone' },
  { title: 'Origin', align: 'start', key: 'senderCountry' },
  { title: 'Destination', align: 'start', key: 'receiverCountry' },
  { title: 'Weight (Kg)', align: 'end', key: 'weight' },
  { title: 'Price', align: 'end', key: 'price' },
  { title: 'Status', align: 'start', key: 'status' },
  { title: 'Actions', key: 'actions', sortable: false }
])

const orders = ref([])
const editedIndex = ref(-1)
const editedItem = ref({
  senderName: '',
  senderEmail: '',
  senderPhone: '',
  senderAddress: '',
  senderCountry: '',
  senderState: '',
  senderCity: '',

  receiverName: '',
  receiverEmail: '',
  receiverPhone: '',
  receiverAddress: '',
  receiverCountry: '',
  receiverState: '',
  receiverCity: '',

  serviceType: '',
  mode: '',
  insurance: '',
  waybill: '',
  date: '',
  weight: '',
  price: '',
  status: '',
})

const defaultItem = ref({
  senderName: '',
  senderEmail: '',
  senderPhone: '',
  senderAddress: '',
  senderCountry: '',
  senderState: '',
  senderCity: '',

  receiverName: '',
  receiverEmail: '',
  receiverPhone: '',
  receiverAddress: '',
  receiverCountry: '',
  receiverState: '',
  receiverCity: '',

  serviceType: '',
  mode: '',
  insurance: '',
  waybill: '',
  date: '',
  weight: '',
  price: '',
  status: '',
})

const formTitle = computed(() => {
  return editedIndex.value === -1 ? 'New Transaction' : 'Edit Transaction'
})

watch(() => [dialog.value, dialogDelete.value],
  ([newDialog, newDialogDelete]) => {
    if (newDialog) newDialog || closeModal()

    if (newDialogDelete) newDialogDelete || closeDelete()
  })

const initialize = () => {
  orders.value = []
  orders.value = [
    {
      senderName: '',
      senderEmail: '',
      senderPhone: '',
      senderAddress: '',
      senderCountry: 'NGN',
      senderState: 'Lagos',
      senderCity: 'Surulere',

      receiverName: 'Dami',
      receiverEmail: '',
      receiverPhone: '08012345678',
      receiverAddress: '',
      receiverCountry: 'USA',
      receiverState: 'Texas',
      receiverCity: '',

      serviceType: '',
      mode: '',
      insurance: '',
      waybill: 'AAJ95567EX',

      status: 'New',
      date: formatted,
      price: 10000,
      weight: 1,
    },
  ]
};

const editItem = (item) => {
  editedIndex.value = orders.value.indexOf(item)
  editedItem.value = Object.assign({}, item)
  dialog.value = true
}

const deleteItem = (item) => {
  editedIndex.value = orders.value.indexOf(item)
  editedItem.value = Object.assign({}, item)
  dialogDelete.value = true
}

const deleteItemConfirm = () => {
  orders.value.splice(editedIndex.value, 1)
  closeDelete()
}

const closeModal = () => {
  dialog.value = false
  nextTick(() => {
    editedItem.value = Object.assign({}, defaultItem.value)
    editedIndex.value = -1
  })
}

const closeDelete = () => {
  dialogDelete.value = false
  nextTick(() => {
    editedItem.value = Object.assign({}, defaultItem.value)
    editedIndex.value = -1
  })
}

const handleSubmitOrder = (formData) => {
  if (editedIndex.value > -1) {
    console.log('From DataTable Editing: ', orders.value[editedIndex.value])
    Object.assign(orders.value[editedIndex.value], formData)
  } else {
    console.log('From DataTable Submitting: ', formData)
    orders.value.unshift(formData)
  }
  closeModal()
}

const getColor = (params) => {
  let status = params.toLowerCase()
  if (status == 'new') return 'blue'
  else if (status == 'cancelled') return 'red'
  else if (status == 'pending') return 'orange'
  else return 'green'
}

onMounted(() => {
  initialize()
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="pa-5">
          <v-layout column style="padding-top:56px">
            <v-data-table v-model="selected" class="elevation-1" :headers="headers" :items="orders" :search="search" hover
              density="compact" items-per-page="5" item-value="name" return-object show-select mobile-breakpoint="0">
              <template v-slot:item.status="{ item }">
                <v-chip :color="getColor(item.columns.status)" prepend-icon="mdi-circle-medium">
                  {{ item.columns.status }}
                </v-chip>
              </template>

              <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title>Orders</v-toolbar-title>

                  <!-- <v-divider class="mx-4" inset vertical></v-divider> -->

                  <v-spacer />

                  <v-text-field v-model="search" variant="underlined" append-icon="mdi-magnify" label="Search" single-line
                    hide-details></v-text-field>

                  <v-spacer />

                  <v-dialog v-model="dialog" transition="dialog-bottom-transition" width="800px">
                    <template v-slot:activator="{ props }">
                      <v-btn color="orange-darken-3" variant="flat" elevation="1" prepend-icon="mdi-plus" v-bind="props"
                        class="text-capitalize">
                        Create new order
                      </v-btn>
                    </template>

                    <v-card>
                      <v-card-title>
                        <span class="text-h5">{{ formTitle }}</span>
                      </v-card-title>

                      <v-card-text>
                        <v-container>
                          <Order @submitOrder="handleSubmitOrder" />
                        </v-container>
                      </v-card-text>

                      <!-- <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue-darken-1" variant="text" @click="closeModal">
                          Cancel
                        </v-btn>
                        <v-btn color="blue-darken-1" variant="text" @click="saveOrder">
                          Save
                        </v-btn>
                      </v-card-actions> -->
                    </v-card>

                  </v-dialog>

                  <v-dialog v-model="dialogDelete" transition="dialog-bottom-transition" max-width="500px">
                    <v-card>
                      <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
                        <v-btn color="red-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-toolbar>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-icon color="orange-darken-1" size="small" class="me-2" @click="editItem(item.raw)">
                  mdi-pencil
                </v-icon>
                <v-icon color="red-darken-1" size="small" @click="deleteItem(item.raw)">
                  mdi-delete
                </v-icon>
              </template>
              <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">
                  Reset
                </v-btn>
              </template>
            </v-data-table>
          </v-layout>
          <!-- <pre>Search value: {{ search }}</pre>
          <pre>{{ selected }}</pre>
          <pre>
          {{ editedItem }}
          </pre> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.v-data-table:deep(th) {
  font-size: 12px !important;
}

.v-data-table:deep(td) {
  font-size: 13px !important;
}
</style>