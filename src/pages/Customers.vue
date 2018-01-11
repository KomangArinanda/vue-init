<template>
  <div>
    <h1>Daftar Customer</h1>
    <div class="tabel">
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
        <tr v-for="(customer, index) in customers" :key="customer.id">
          <td>{{ customer.id }}</td>
          <td>{{ customer.name }}</td>
          <td><button class="btn btn-danger" v-on:click="deleteCustomer(customer.id, index)">Delete</button></td>
            <td><button class="btn btn-danger" v-on:click="detailCustomer(customer.id, index)">Detail</button></td>
        </tr>
      </table>
    </div>
  <div>
    <br>
    <form v-on:submit.prevent="addCustomer">
      <input v-model="name" placeholder="Customer name"/><br/>
      <input v-model="country" placeholder="Country name"/><br/>
      <input v-model="province" placeholder="Province name"/><br/>
      <input v-model="city" placeholder="City name"/><br/>
      <input v-model="street" placeholder="Street name"/><br/>
      <input type="submit" value="submit"/>
    </form>
  </div>
  <div class="tabel">
      <table>
        <tr>
          <th>Id</th>
          <th>Country</th>
          <th>Street</th>
        </tr>
        <tr v-for="(address, index) in addresses" :key="address.id">
          <td>{{ address.id }}</td>
          <td>{{ address.country }}</td>
          <td>{{ address.street }}</td>
        </tr>
      </table>
    </div>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex'
  import axios from 'axios'

  export default {
    name: 'LearnApi',
    data () {
      return {
        customer: [],
        address: []
      }
    },
    computed: {
      ...mapGetters([
        'customers',
        'customerId'
      ])
    },
    mounted () {
      this.callApi()
    },
    methods: {
      callApi () {
        this.$store.dispatch('getCustomers')
        this.$store.dispatch('getAddresses')
      },
      addCustomer(customer,address) {
        axios.post('/api/customers', {
          name:this.name,
          addresses:{country: this.country,
          province: this.province,
          city: this.city,
          street: this.street
          }
        })
      .then(response => {
        this.callApi()
      })
      .catch(e => {
        console.log(e)
      })
      },
        deleteCustomer(id, index)
        {
          let url = '/api/customers/'+id;
          axios.delete(url)
          this.customers.splice(index, 1);
          this.axios.get(url);
        },
        detailCustomer(id, index)
        {
          let url = '/api/customers/'+id+'address';
          // axios.get(url)
          this.axios.get(url);
        }
    }
  }
</script>

<style lang="scss" scoped>
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
}
</style>
