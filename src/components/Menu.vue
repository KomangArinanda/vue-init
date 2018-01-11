<template>
  <div>
    Menu
    <ul>
      <router-link v-bind:to="item.url"
                   v-for="item in menus"
                   v-if="!item.disable">
        {{item.label}} <br/>
      </router-link>
    </ul>
  </div>
  
    <!-- <router-link to="/">Home</router-link>-->
    <!--<router-link to="/about">About</router-link>-->
    <!--<router-link to="/props-and-event"></router-link>-->
    <!--<router-link to="/learn-api"></router-link> -->

</template>

<script>
export default {
  name: 'loop-test',
  data () {
    return {
      menus: {
        home: {
          url: '/',
          label: 'Home',
          disable: false
        },
        about: {
          url: '/customers',
          label: 'Customer',
          disable: false
        },
        props: {
          url: '/addresses',
          label: 'Addresses',
          disable: false
        },
        learnAPI: {
          url: '/learn-api',
          label: 'Learn API',
          disable: false
        },
        learnVuex: {
          url: '/learn-vuex',
          label: 'Learn Vuex',
          disable: false
        }
      }
    }
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
