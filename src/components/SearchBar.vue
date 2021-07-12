<template>
  <div class="sticky top-0 bg-white h-12 flex items-center">
    <div class="relative w-full">
      <input type="text" placeholder="Search Twitter" class="rounded-full w-full p-2 pl-10 bg-lighter text-sm focus:outline-none">
      <!-- search icon, placed absolute from the parent div -->
      <font-awesome-icon icon="search" class="absolute left-4 top-2.5 text-sm text-light" />
    </div>
  </div>
</template>

<script>
  export default {

    name: 'SearchBar',

    data () {
      return {

      }
    }
  }
</script>

<style lang="css" scoped>
</style>
