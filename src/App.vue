<template>
  <h1>The number is currently {{ number }} (in App.vue)</h1>
  <h2>Double the number is {{ double }} (in App.vue)</h2>
  <button @click="increment">increment</button>
  <hr/>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import { toRefs, defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import store from "./store"

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const {
      state,
      increment
    } = store

    const { number, double } = toRefs(state)

    return {
      number,
      double,
      increment,
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
