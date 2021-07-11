<template>
  <div class="absolute bottom-0 left-0 w-64 shadow-md border-lightest bg-white mb-16 rounded-lg">
    <!-- showing who is logged in now with avatar and username -->
    <button class="flex items-center w-full hover:bg-lightest py-2 px-4">
      <img src="https://ca.slack-edge.com/T02NE0161-UHW0TQJ72-gcbf2e73747f-192" alt="avatar" class="w-12 h-12 rounded-full">
      <div class="ml-4">
        <p class="text-sm font-bold leading-tight">Trouni Tiet</p>
        <p class="text-sm leading-tight">@Trouni</p>
      </div>
      <font-awesome-icon icon="check" class="ml-auto text-blue" />
    </button>
    <!-- option to login to another account -->
    <button class="w-full text-left hover:bg-lightest border-t border-lighter p-3">
      Add an existing account
    </button>
    <!-- option to log out -->
    <button class="w-full text-left hover:bg-lightest border-t border-lighter p-3">
      Log out @Trouni
    </button>
    <!-- triangle to make the dropdown like a speech bubble -->
  </div>
</template>

<script>
export default {

  name: 'DropDown',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>
