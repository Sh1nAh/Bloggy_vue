<template>
  <Navbar/>
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  components: { Navbar }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #2c3e50;
}

</style>
