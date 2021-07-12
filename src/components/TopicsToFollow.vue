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
          <p class="font-semibold text-sm text-left leading-tight hover:underline"> {{ topic.title }} </p>
          <p class="text-left text-sm leading-tight text-dark"> {{ topic.genre }} </p>
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
