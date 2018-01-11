<template>
  <div>
    Welcome to About.vue
    <br>
    <div>
      DataA : {{ dataA }}
    </div>
    <div>
      DataB : {{ dataB }}
    </div>
    <div>
      DataC : {{ dataC }}
    </div>

    <input type="text" v-model="getCount">
    <div>
      <a href="/props-and-events">Props</a>
    </div>
  </div>

</template>


<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'About',
    data () {
      return {
        dataA: 'A',
        dataB: 'B'
      }
    },
    computed: {
      dataC: function () {
        return this.dataA + ' ' + this.dataB
//        return '${this.dataA} ${this.dataB}'
      }// },
      //   ...mapGetters([
      //     // 'count',
      //   ])
    },
    watch: {
      dataB: function (value) {
        console.log('Hey i am triggered, new value', value)
      }
    }
  }
</script>


<style>

</style>
