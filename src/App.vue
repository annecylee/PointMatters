<template>
  <div id="app">
    <my-header />
  </div>
</template>

<script>
import Header from './Header.vue'

export default {
  name: 'app',
  components: {
    'my-header': Header
  },
  data () {
    return {
      msg: 'Welcome to PointMatters'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Source Sans Pro', sans-serif, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
}

#app:lang(zh-Hans) {
  font-family: "Hiragino Sans GB", sans-serif;
}

.row {
  margin: 0;
}

.content {
  max-width: 800px;
  margin: 0 auto;
}

ul {
  padding: 0;
}

li {
  list-style: none;
}

</style>
