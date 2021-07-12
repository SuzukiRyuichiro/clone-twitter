<template>
  <div class="w-full rounded-lg bg-lightest mb-3">
    <div class="flex items-center justify-between p-3">
      <p class="text-lg font-bold">Who to follow</p>
      <i class="fas fa-cog text-lg text-blue"></i>
    </div>
    <!-- users -->
    <button v-for="user in users" class="w-full flex items-center justify-between duration-75 transition hover:bg-lighter p-3 border-t border-lighter">
      <div class="flex items-center">
        <!-- avatar -->
        <img :src="user.url" alt="imgage" class="rounded-full transition duration-75 w-12 h-12 filter hover:brightness-90">
        <!-- username and display name -->
        <div class="ml-2">
          <p class="font-semibold text-sm text-left leading-tight hover:underline"> {{ user.displayname }} </p>
          <p class="text-left text-sm leading-tight text-dark"> {{ user.username }} </p>
        </div>
      </div>
        <!-- button for follow -->
      <button class="ml-auto text-sm text-blue py-1 px-4 rounded-full border border-blue duration-75 transition hover:bg-gray-300">
        Follow
      </button>
    </button>
    <button class="p-3 w-full duration-75 transition hover:bg-lighter text-left text-blue border-t border-lighter">
      Show More
    </button>
  </div>
</template>

<script>
export default {

  name: 'WhoToFollow',

  data () {
    return {
      hover: false,
      users: [
        {url: 'https://ca.slack-edge.com/T02NE0241-U4APKLFLM-da0b004a3774-512', displayname: 'Douglas Berkley', username: '@dmbf29'},
        {url: 'https://ca.slack-edge.com/T02NE0241-U01TV9LKYTF-b60953fc6e76-512', displayname: 'Ryan Kam', username: '@ryryry'},
        {url: 'https://ca.slack-edge.com/T02NE0241-U01JKA1EPL4-b20b49874c3c-512', displayname: 'Ryuichiro Suzuki', username: '@scooter'}
      ],
    }
  }
}
</script>

<style lang="css" scoped>
</style>
