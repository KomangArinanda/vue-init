<template>
  <div class="child-component">
    <h1>Iam Child Component</h1>
    {{someProps}}
    <input type="String" v-model="someProps"/>
    <button v-on:click="handleClick">Click Me to fire parent</button>
  </div>
</template>

<script>
export default {
  name: 'Child-Component',
  //  props : ['someProps'],
  props: {
    someProps: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      data1: 'child nih'}
  },
  methods: {
    handleClick () { this.$emit('ClickMe', 'I pass param ya!!!') }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
