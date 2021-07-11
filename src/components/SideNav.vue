<template>
  <div class="lg:w-1/5 border-r border-lighter px-2 lg:px-8 py-2 flex flex-col items-center justify-between">
    <!-- upper half of side nav -->
    <div class="lg:text-left text-center">
      <!-- twitter logo -->
      <button class="h-12 w-12 lg:ml-2 duration-75 transition hover:bg-lightblue text-3xl text-blue rounded-full">
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </button>
      <!-- menu -->
      <button v-for="tab in tabs" @click="selectedId = tab.id" :class="[tab.id === selectedId ? 'text-blue' : '', 'flex', 'items-center', 'py-2', 'px-4', 'mb-3', 'duration-75', 'transition', 'hover:bg-lightblue', 'rounded-full', 'lg:mr-auto', 'hover:text-blue']">
        <!-- icon and text for each menu item -->
        <font-awesome-icon :icon="tab.icon" class="text-2xl lg:mr-4" />
        <p class="text-lg font-semibold text-left lg:block hidden">{{ tab.title }}</p>
      </button>
      <!-- button that says tweet -->
      <TweetButton />
    </div>
    <!-- drop down with username and avatar (bottom) -->
    <div class="w-full relative">
      <AvatarAndUsername @click="dropdown = true" />
      <DropDown v-if="dropdown" @click="dropdown = false" />
    </div>
  </div>
</template>

<script>
  import TweetButton from './TweetButton';
  import AvatarAndUsername from './AvatarAndUsername';
  import DropDown from './DropDown';

  export default {

    name: 'SideNav',

    components: {
      TweetButton,
      AvatarAndUsername,
      DropDown
    },

    data () {
      return {
        // icons and names for the side nav items
        tabs: [
          {icon: 'home', title: 'Home', id: 'home'},
          {icon: 'bell', title: 'Notification', id: 'notification'},
          {icon: 'hashtag', title: 'Explore', id: 'explore'},
          {icon: 'envelope', title: 'Messages', id: 'messages'},
          {icon: 'bookmark', title: 'Bookmarks', id: 'bookmarks'},
          {icon: 'user', title: 'Profile', id: 'profile'},
          {icon: 'user-secret', title: 'Secret', id: 'secret'},
        ],
        // selected menu item
        selectedId: 'home',
        // dropdown from username and avatar component
        dropdown: false,
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
