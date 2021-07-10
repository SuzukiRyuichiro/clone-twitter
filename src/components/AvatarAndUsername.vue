<template>
  <button class="flex items-center w-full hover:bg-lightest rounded-full py-2 px-4">
    <img src="https://ca.slack-edge.com/T02NE0241-UHW0TQJ72-gcbf2e73747f-192" alt="avatar" class="w-12 h-12 rounded-full">
    <div class="ml-4 lg:block hidden">
      <p class="text-sm font-bold leading-tight">Trouni Tiet</p>
      <p class="text-sm leading-tight">@Trouni</p>
    </div>
    <font-awesome-icon icon="angle-down" class="ml-auto text-lg lg:block hidden" />
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
