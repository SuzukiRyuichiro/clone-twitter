<template>
  <div class="w-1/5 border-r border-lighter px-8 py-2 flex flex-col justify-between">
    <!-- upper half of side nav -->
    <div class="text-left">
      <!-- twitter logo -->
      <button class="h-12 w-12 hover:bg-lightblue text-3xl text-blue rounded-full">
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </button>
      <!-- menu -->
      <button v-for="tab in tabs" @click="selectedId = tab.id" :class="['flex', 'items-center', 'py-2', 'px-4', 'mb-3', 'hover:bg-lightblue', 'rounded-full', 'mr-auto', 'hover:text-blue', tab.id === selectedId ? 'text-blue' : '']">
        <!-- icon and text for each menu item -->
        <font-awesome-icon :icon="tab.icon" class="text-2xl mr-4 text-left" />
        <p class="text-lg font-semibold text-left">{{ tab.title }}</p>
      </button>
      <!-- button that says tweet -->
      <TweetButton />
    </div>
    <!-- drop down with username and avatar (bottom) -->
    <AvatarAndUsername />
  </div>
</template>

<script>
  import TweetButton from './TweetButton';
  import AvatarAndUsername from './AvatarAndUsername';

  export default {

    name: 'SideNav',

    components: {
      TweetButton,
      AvatarAndUsername
    },

    data () {
      return {
        tabs: [
          {icon: 'home', title: 'Home', id: 'home'},
          {icon: 'bell', title: 'Notification', id: 'notification'},
          {icon: 'hashtag', title: 'Explore', id: 'explore'},
          {icon: 'envelope', title: 'Messages', id: 'messages'},
          {icon: 'bookmark', title: 'Bookmarks', id: 'bookmarks'},
          {icon: 'user', title: 'Profile', id: 'profile'},
          {icon: 'user-secret', title: 'Secret', id: 'secret'},
        ],
        selectedId: 'home'
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
