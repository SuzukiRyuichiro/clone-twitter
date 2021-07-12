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
        commentCount: 0,
        retweetCount: 0,
        favCount: 0,
        faved: false,
        retweeted: false,
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
          commentCount: 10,
          retweetCount: 3,
          favCount: 30,
          faved: false,
          retweeted: false,
        },
        {
          displayname: 'Elon Musk',
          username: '@elon',
          avatarUrl: 'https://images.thefacecdn.com/images/13.-GettyImages-1130598318.jpg?fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&w=1180',
          time: '20m',
          content: 'Doge coin!!',
          commentCount: 100,
          retweetCount: 300,
          favCount: 4200,
          faved: false,
          retweeted: false,
        },
        {
          displayname: 'Rick Astley',
          username: '@rickRoll',
          avatarUrl: 'https://i1.sndcdn.com/artworks-hEOBCMzK8YTYPz2Y-UBn09w-t500x500.jpg',
          time: '1.4h',
          content: 'Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you',
          commentCount: 10,
          retweetCount: 3,
          favCount: 30,
          faved: false,
          retweeted: false,
        },
        {
          displayname: 'Yann Klein',
          username: '@yann',
          avatarUrl: 'https://lh3.googleusercontent.com/EJB-ldK9kNtuS1X29b9Dkx8W3OwUardaSZFbJq5pD091Uomdj9CqPgCaNcZD-esP4xg5Pi4INVkopsrLyAGclIKm1DbxMvdIrCzmz5w6D0c_ifUbLLwlPTRZDiSSg76qpOKu5hQTikMvI_NzaozMiLyNx9g6LTstTFU2YBMQdQcFWa2dkXmIjpMDsE-mQ6BgQX8dIHpVbHlXW5QKs_LzZUDSu_1Zu5zxgb3SDfXyR2bQeEDALem_qSxONMtK_D9ocSbihc1Upp6gFvrrvigLY2Qhk4N_w38n7SOxkRKRKER7UZZQ54FsPBqp9xpiOGnv9lyN5HUMaLZZcM8zKuVa3z_DjseA4Q0QK0ufxG_cLsJKcIjC2L2QQM6njaDAbDf-NbUkmJvAqapzIJA2yZ73__WPwyJIIdFKX9vYAyoNkAeA3W3R0t8t8WYvn9DN6yU8vVWpge2rEZVt3E7H2YQ1KbNwjsniTZFiWQxiOJCQZ_jB1VtKxHbZSgTJopZdqrafwPN7MDz2c6XkhvVogMtP7oiHhOc-_wXxxbGzx3sU537pVf1h6XDPOjADlAGPvvB6hZKRLDimgF0AFOjbSuoD4G7j3qyVdm17mOQpPeJ_VCjWTrE-k5ONojdF4lulvWiGPCooxpi-TDYks24ytOe4N2WTb5bCmbEik5s3kCUSySIWUPdUwKTFBjpb8TGsLbIh-fvnjseInwkzobrksCiFjYf8=w942-h1392-no?authuser=0',
          time: '1.4h',
          content: 'Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you',
          commentCount: 10,
          retweetCount: 3,
          favCount: 30,
          faved: false,
          retweeted: false,
        },
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
