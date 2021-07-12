<template>
  <div class="w-full rounded-lg bg-lightest">
    <div class="flex items-center justify-between p-3">
      <p class="text-lg font-bold">Topics to follow</p>
      <i class="fas fa-cog text-lg text-blue"></i>
    </div>
    <!-- users -->
    <button v-for="topic in topics" class="w-full flex items-center justify-between duration-75 transition hover:bg-lighter p-3 border-t border-lighter">
      <div class="flex items-center">
        <div class="ml-2">
          <p class="font-semibold text-sm text-left leading-tight"> {{ topic.title }} </p>
          <p class="text-left text-sm leading-tight text-dark"> {{ topic.genre }} </p>
        </div>
      </div>
        <!-- button for follow -->
      <button class="rounded-full duration-75 transition border border-blue hover:bg-gray-300 px-2 py-1">
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

  name: 'TopicsToFollow',

  data () {
    return {
      topics: [
        {
          title: "Phoebe Bridgers",
          genre: "Music"
        },
        {
          title: "LANY",
          genre: "Music"
        },
        {
          title: "Virgin Galactic",
          genre: "Space"
        },
        {
          title: "Matrix",
          genre: "Science"
        },
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
