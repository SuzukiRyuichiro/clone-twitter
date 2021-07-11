<template>
  <div class="w-1/3 h-full border-l border-lighter px-6 py-2 overflow-y-scroll md:block hidden">
    <!-- search bar -->
    <SearchBar />
    <!-- Trend -->
    <Trending />
    <!-- Follower suggestinos -->
    <WhoToFollow />
  </div>
</template>

<script>
  import SearchBar from './SearchBar';
  import Trending from './Trending';
  import WhoToFollow from './WhoToFollow';

  export default {

    components: {
      SearchBar,
      Trending,
      WhoToFollow,
    },

    name: 'SidebarColumn',

    data () {
      return {

      }
    }
  }
</script>

<style lang="css" scoped>
</style>
