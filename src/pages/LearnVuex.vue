<template>
  <div>
    <h1>Learn Vuex</h1>
    {{ count }}
    <button @click="handleClick">ClickMe</button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'LearnVuex',
    computed: {
      ...mapGetters([
        'count'
      ])
    },
    methods: {
      handleClick () {
        this.$store.dispatch('doIncrement')
      }
    }
  }
</script>
