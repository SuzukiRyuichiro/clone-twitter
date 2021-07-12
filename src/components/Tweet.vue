<template>
  <div class="px-5 py-3 border-t border-lighter flex hover:bg-lighter transition duration-75 relative">
    <!-- avatar on the tweet card-->
    <div class="flex-none mr-4">
      <img :src="tweet.avatarUrl" alt="prof" class="flex-none transition duration-75 w-12 h-12 filter hover:brightness-90 rounded-full border border-lighter object-cover " />
    </div>
    <!-- other than the avatar -->
    <div class="w-full">
      <!-- display name, username and time elapsed -->
      <div class="flex justify-between w-full">
        <div class="flex">
          <p class="font-semibold text-md text-left leading-tight hover:underline"> {{ tweet.displayname }} </p>
          <p class="text-left text-sm leading-tight text-dark ml-1"> {{ tweet.username }} </p>
          <p class="text-left text-sm leading-tight text-dark ml-1 hover:underline"> {{ tweet.time }} </p>
        </div>
      </div>
      <!-- content -->
      <div class="text-left whitespace-pre-wrap">
        {{ tweet.content }}
      </div>
      <!-- icons for comment, retweet, etc -->
      <div class="flex items-center justify-around w-full">
        <!-- comments -->
        <div class="flex items-center w-full">
          <button class="flex justify-center items-center filter hover:brightness-90 hover:bg-lighter mr-1 rounded-full transition duration-75 h-9 w-9">
            <font-awesome-icon :icon="['far', 'comment']" class="text-md text-dark" />
          </button>
          <p>{{ tweet.commentCount }}</p>
        </div>
        <!-- retweets -->
        <div class="flex items-center w-full">
          <button class="flex justify-center items-center filter hover:brightness-90 hover:bg-lighter mr-1 rounded-full transition duration-75 h-9 w-9" @click="retweet">
            <font-awesome-icon :icon="['fas', 'retweet']" :class="['text-md', tweet.retweeted ? 'text-blue' : 'text-dark']" />
          </button>
          <p :class="{ 'text-blue': tweet.retweeted }">{{ tweet.retweetCount }}</p>
        </div>
        <!-- favorites -->
        <div class="flex items-center w-full">
          <button v-if="tweet.faved" class="flex justify-center items-center filter hover:brightness-90 hover:bg-lighter mr-1 rounded-full transition duration-75 h-9 w-9" @click="unFav">
            <font-awesome-icon :icon="['fas', 'heart']" class="text-md text-dark" />
          </button>
          <button v-if="!tweet.faved" class="flex justify-center items-center filter hover:brightness-90 hover:bg-lighter mr-1 rounded-full transition duration-75 h-9 w-9" @click="fav">
            <font-awesome-icon :icon="['far', 'heart']" class="text-md text-dark" />
          </button>
          <p>{{ tweet.favCount }}</p>
        </div>
        <!-- share -->
        <button class="flex justify-center items-center filter hover:brightness-90 hover:bg-lighter mr-1 rounded-full transition duration-75 h-9 w-9">
          <font-awesome-icon :icon="['fas', 'external-link-alt']" class="text-md text-dark" />
        </button>
      </div>
      <!-- ellipsis for more (absolute position) -->
      <button class="flex justify-center items-center hover:bg-lighter rounded-full transition duration-75 h-6 w-6 filter hover:brightness-90 absolute top-1 right-2">
        <font-awesome-icon icon="ellipsis-h" class="text-xs text-dark" />
      </button>
    </div>
  </div>
</template>
<script>
export default {

  name: 'Tweet',

  props: {
    tweet: Object,
  },

  methods: {
    fav() {
      this.tweet.favCount += 1;
      this.tweet.faved = true;
    },

    unFav() {
      this.tweet.favCount -= 1;
      this.tweet.faved = false;
    },

    retweet(){
      if (this.tweet.retweeted) {
        this.tweet.retweetCount -= 1;
        this.tweet.retweeted = false;
      } else {
        this.tweet.retweetCount += 1;
        this.tweet.retweeted = true;
      }
    },
  },

  data() {
    return {

    }
  }
}
</script>
<style lang="css" scoped>
</style>
