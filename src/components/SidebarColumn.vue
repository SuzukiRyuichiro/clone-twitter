<template>
  <div class="w-1/3 h-full px-6 overflow-y-scroll lg:block hidden">
    <!-- search bar -->
    <SearchBar />
    <!-- Trend -->
    <Trending />
    <!-- Follower suggestinos -->
    <WhoToFollow />
    <!-- Topics to Follow -->
    <TopicsToFollow />
    <!-- misc -->
    <div class="text-left">
      <a href="#" class="text-sm hover:underline text-light mr-2">Terms of Service</a>
      <a href="#" class="text-sm hover:underline text-light mr-2">Privacy Policy</a>
      <a href="#" class="text-sm hover:underline text-light mr-2">Cookie Polic</a>
      <a href="#" class="text-sm hover:underline text-light mr-2">Ads info</a>
      <a href="#" class="text-sm hover:underline text-light mr-2">More...</a>
      <a href="#" class="text-sm text-light">© 2021 Twitter, Inc</a>
    </div>
  </div>
</template>

<script>
  import SearchBar from './SearchBar';
  import Trending from './Trending';
  import WhoToFollow from './WhoToFollow';
  import TopicsToFollow from './TopicsToFollow';

  export default {

    components: {
      SearchBar,
      Trending,
      WhoToFollow,
      TopicsToFollow,
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
