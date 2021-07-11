<template>
  <div class="w-1/3 h-full border-l border-lighter px-6 py-2 overflow-y-scroll">
    <!-- search bar -->
    <div class="relative">
      <input type="text" placeholder="Search Twitter" class="rounded-full w-full p-2 pl-10 bg-lighter text-sm">
      <font-awesome-icon icon="search" class="absolute left-4 top-2.5 text-sm text-light" />
    </div>
  </div>
</template>

<script>
export default {

  name: 'Trending',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>
