<template>
  <div id="app" class="flex container h-screen w-full">
    <!-- side nav -->
    <div class="w-1/5 border-r border-lighter px-8 py-2">
      <button class="h-12 w-12 hover:bg-lightblue text-3xl text-blue">
        test
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
    },
    data() {
      return {

      }
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
