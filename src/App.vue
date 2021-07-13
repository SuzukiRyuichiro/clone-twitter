<template>
  <div id="app" class="flex container h-screen w-full">
    <!-- side nav -->
    <SideNav />
    <!-- Tweets -->
    <TweetsList />
    <!-- SidebarColumn (search, trending and suggestion)-->
    <SidebarColumn />
  </div>
</template>

<script>
  // importing components
  import SideNav from './components/SideNav';
  import TweetsList from './components/TweetsList';
  import SidebarColumn from './components/SidebarColumn';

  export default {
    name: 'app',
    components: {
      SideNav,
      TweetsList,
      SidebarColumn,
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
