<template>
  <button class="flex items-center w-full justify-between hover:bg-lightest rounded-full duration-75 transition py-2 px-4">
    <!-- avatar -->
    <img src="https://ca.slack-edge.com/T02NE0241-UHW0TQJ72-gcbf2e73747f-192" alt="avatar" class="w-10 h-10 rounded-full">
    <!-- username and display name -->
    <div class="ml-4 lg:block hidden">
      <p class="text-sm font-bold leading-tight">Trouni Tiet</p>
      <p class="text-sm leading-tight">@Trouni</p>
    </div>
    <font-awesome-icon icon="ellipsis-h" class="ml-1 text-sm lg:block hidden" />
  </button>
</template>

<script>
export default {

  name: 'AvatarAndUsername',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>
