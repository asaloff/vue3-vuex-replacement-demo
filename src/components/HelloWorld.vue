<template>
  <h1>The number is currently {{ number }} (in HelloWorld.vue)</h1>
  <h2>Double the number is {{ double }} (in HelloWorld.vue)</h2>
  <button @click="increment">increment</button>
</template>

<script>
import {toRefs} from "vue"
import store from "../store"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const {
      state,
      increment,
    } = store

    const { number, double } = toRefs(state)

    return {
      number,
      double,
      increment,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
