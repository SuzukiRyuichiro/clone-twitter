<template>
  <div class="w-full rounded-lg bg-lightest">
    <div class="flex items-center justify-between p-3">
      <p class="text-lg font-bold">Who to follow</p>
      <i class="fas fa-cog text-lg text-blue"></i>
    </div>
    <button v-for="user in users" class="w-full flex justify-between duration-75 transition hover:bg-lighter p-3 border-t border-lighter">
      <div>
        <p class="font-semibold text-sm text-left leading-tight"> {{ user.displayname }} </p>
        <p class="text-left text-sm leading-tight text-dark"> {{ user.username }} </p>
      </div>
      <button class="rounded-full duration-75 transition hover:bg-light hover:text-blue h-8 w-8">
        <font-awesome-icon icon="ellipsis-h" class="text-sm text-dark" />
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
      users: [
        {url: 'elon.jpg', displayname: 'Elon Musk', username: '@teslaBoy'},
        {url: 'monk.jpg', displayname: 'Adrian Monk', username: '@detective:)'},
        {url: 'kevin.jpg', displayname: 'Kevin Hart', username: '@miniRock'}
      ],
    }
  }
}
</script>

<style lang="css" scoped>
</style>
