<template>
  <div class="lg:w-1/2 w-full h-full border-r border-lighter overflow-y-scroll">
    <!-- Top header -->
    <div class="sticky top-0 px-5 py-3 border-b border-lighter flex items-center justify-between bg-white z-10">
      <h1 class="text-xl font-bold">Home</h1>
      <button class="rounded-full transition duration-75 hover:bg-lighter h-10 w-10">
        <font-awesome-icon icon="bolt" class="text-blue" />
      </button>
    </div>
    <!-- Form to Tweet -->
    <div>
      <TweetForm @tweet-submit="addNewTweet"/>
      <!-- List of Tweets -->
      <div v-for="tweet in tweets" class="flex flex-col-reverse">
        <Tweet :tweet="tweet" />
      </div>
    </div>
  </div>
</template>

<script>
import TweetForm from './TweetForm';
import Tweet from './Tweet';

export default {

  name: 'TweetsList',

  methods: {
    addNewTweet(text){
      // append to the tweets array with current user's info
      this.tweets.unshift({
        displayname: 'Trouni Tiet',
        username: '@trouni',
        avatarUrl: 'https://ca.slack-edge.com/T02NE0241-UHW0TQJ72-gcbf2e73747f-192',
        time: '1m',
        content: text,
        commentCount: '0',
        retweetCount: '0',
        favCount: '0',
        faved: false,
      })
    }
  },

  components: {
    TweetForm,
    Tweet,
  },

  data () {
    return {
      tweets: [
        {
          displayname: 'Douglas Berkley',
          username: '@dmbf29',
          avatarUrl: 'https://ca.slack-edge.com/T02NE0241-U4APKLFLM-da0b004a3774-51',
          time: '20m',
          content: 'Remember, remember, the Fifth of November Gunpowder treason and plot I see no reason why gunpowder treason Should ever be forgot',
          commentCount: '100',
          retweetCount: '10k',
          favCount: '30k',
          faved: false,
        },
        {
          displayname: 'Douglas Berkley',
          username: '@dmbf29',
          avatarUrl: 'https://ca.slack-edge.com/T02NE0241-U4APKLFLM-da0b004a3774-51',
          time: '20m',
          content: 'Remember, remember, the Fifth of November Gunpowder treason and plot I see no reason why gunpowder treason Should ever be forgot',
          commentCount: '100',
          retweetCount: '10k',
          favCount: '30k',
          faved: false,
        },
        {
          displayname: 'Douglas Berkley',
          username: '@dmbf29',
          avatarUrl: 'https://ca.slack-edge.com/T02NE0241-U4APKLFLM-da0b004a3774-51',
          time: '20m',
          content: 'Remember, remember, the Fifth of November Gunpowder treason and plot I see no reason why gunpowder treason Should ever be forgot',
          commentCount: '100',
          retweetCount: '10k',
          favCount: '30k',
          faved: false,
        },
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
