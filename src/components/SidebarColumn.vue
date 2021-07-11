<template>
  <div class="w-1/3 h-full border-l border-lighter px-6 py-2 overflow-y-scroll md:block hidden">
    <!-- search bar -->
    <SearchBar />
    <!-- Trend -->
    <Trending />
  </div>
</template>

<script>
  import SearchBar from './SearchBar';
  import Trending from './Trending';

  export default {

    components: {
      SearchBar,
      Trending,
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
