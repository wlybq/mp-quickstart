
export default {
  data () {
    return {
    }
  },
  computed: {
  },
  // 页面挂载
  mounted () {
  },
  methods: {

    toIndex () {
      this.$router.back()
    },

    navChange ({mp: {detail: { key }}}) {
      if (key === 'tab1') this.toIndex()
    },

    onContact (e) {
      console.log('onContact', e)
    },
    onGotUserInfo (e) {
      console.log('onGotUserInfo', e)
    },
    onGotPhoneNumber (e) {
      console.log('onGotPhoneNumber', e)
    }
  }
}

