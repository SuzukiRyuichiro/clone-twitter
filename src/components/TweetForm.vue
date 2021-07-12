<template>
  <div class="px-5 py-3 border-b-8 border-lighter flex">
    <div class="flex-none">
      <img src="https://ca.slack-edge.com/T02NE0241-UHW0TQJ72-gcbf2e73747f-192" alt="prof" class="transition duration-75 filter hover:brightness-90 flex-none w-12 h-12 rounded-full border border-lighter"/>
    </div>
    <!-- v-on:submit.prevent = "addNewTweet" -->
    <form class="w-full px-4 relative">
      <textarea v-model="tweetContet" placeholder="What's up?" class="mt-3 pb-3 w-full focus:outline-none focus:border-b focus:border-lighter"/>
      <!-- attachments buttons (img, video, polls) -->
      <div class="flex items-center">
        <button class="flex justify-center items-center hover:bg-lighter mr-1 rounded-full transition duration-75 h-9 w-9"><font-awesome-icon :icon="['far', 'image']"  class="text-blue text-lg" /></button>
        <button class="flex justify-center items-center hover:bg-lighter mr-1 rounded-full transition duration-75 h-9 w-9"><font-awesome-icon :icon="['fas', 'video']"  class="text-blue text-lg" /></button>
        <button class="flex justify-center items-center hover:bg-lighter mr-1 rounded-full transition duration-75 h-9 w-9"><font-awesome-icon :icon="['fas', 'poll-h']"  class="text-blue text-lg" /></button>
        <button class="flex justify-center items-center hover:bg-lighter mr-1 rounded-full transition duration-75 h-9 w-9"><font-awesome-icon :icon="['far', 'smile']"  class="text-blue text-lg md:block hidden" /></button>
        <button class="flex justify-center items-center hover:bg-lighter mr-1 rounded-full transition duration-75 h-9 w-9"><font-awesome-icon :icon="['far', 'calendar-alt']"  class="text-blue text-lg md:block hidden" /></button>
        <div class="ml-2 text-sm text-blue">{{ remainingText }}</div>
      </div>
      <button @click.prevent = "submitTweet" class="h-10 px-4 text-white font-semibold bg-blue hover:bg-darkblue focus:outline-none rounded-full absolute bottom-0 right-0">
        Tweet
      </button>
    </form>
  </div>
</template>

<script>
export default {

  name: 'TweetForm',

  methods: {
    submitTweet() {
      if (this.tweetContet !== '' && this.tweetContet.length <= 240) {
        // send the text in text area to the parent (TweetsList)
        this.$emit('tweet-submit', this.tweetContet);
        // empty the input
        this.tweetContet = '';
      }
    }
  },

  computed: {
    remainingText() {
      return 240 - this.tweetContet.length;
    }
  },

  data () {
    return {
      tweetContet: '',
    }
  },
}
</script>

<style lang="css" scoped>
</style>
