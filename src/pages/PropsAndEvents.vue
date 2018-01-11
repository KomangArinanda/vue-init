<template>
  <div>
    <div>
       {{dataParent}}
    </div>
    <input type="text" v-model="someProps"/>
    <ChildComponent :someProps="dataParent" @ClickMe="someMethod"></ChildComponent>
    <!--<input type="text" v-model="dataB">-->
  </div>
</template>

<script>
  import ChildComponent from '@/components/ChildComponent'

  export default {
    name: 'Props',
    components: {ChildComponent},
    data () {
      return {
        dataParent: 'ini data parent yang di pass'
      }
    },
    methods: {
      someMethod (param) {
        window.alert(param)
      }
    }
  }
</script>


<style>

</style>
