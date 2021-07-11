<template>
  <div class="w-full rounded-lg bg-lightest">
    <div class="flex items-center justify-between p-3">
      <p class="text-lg font-bold">What’s happening</p>
      <i class="fas fa-cog text-lg text-blue"></i>
    </div>
    <button v-for="trend in trending" class="w-full flex justify-between transition hover:bg-lighter p-3 border-t border-lighter">
      <div>
        <p class="text-xs text-left leading-tight text-dark"> {{ trend.top }} </p>
        <p class="font-semibold text-sm text-left leading-tight"> {{ trend.title }} </p>
        <p class="text-left text-sm leading-tight text-dark"> {{ trend.bottom }} </p>
      </div>
      <button class="rounded-full transition hover:bg-light hover:text-blue h-8 w-8">
        <font-awesome-icon icon="ellipsis-h" class="text-sm text-dark" />
      </button>
    </button>
    <button class="p-3 w-full transition hover:bg-lighter text-left text-blue border-t border-lighter">
      Show More
    </button>
  </div>
</template>

<script>
export default {

  name: 'Trending',

  data () {
    return {
      trending: [
        {top: 'Trending in Meguro', title: 'Hungry Heaven', bottom: 'Trending with: Hungry Heaven price increase'},
        {top: 'Vue', title: 'Vue is nice', bottom: '19k Tweets'},
        {top: 'Code', title: 'Le Wagon Tokyo', bottom: '5 tweets'},
        {top: 'Trending in Japan', title: 'Olympic', bottom: '400k tweets'},
        {top: 'Trending', title: 'Englang vs Italy', bottom: '24k tweets'},
      ],
    }
  }
}
</script>

<style lang="css" scoped>
</style>
