import { print, debounce } from 'utils/util'
import { mapState } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      count: state => state.service.count
    })
  },
  watch: {
    count () {
      console.log(this.count)
    }
  },
  // 页面挂载
  mounted () {
  },
  methods: {
    navChange ({mp: {detail: { key }}}) {
      // if (key === 'tab2') this.$router.replace('/packageOther/index/index') // 跳转地址为pages.js设置的地址,前面带斜杠/
      if (key === 'tab2') this.$router.push('/packageOther/index/index') // 跳转地址为pages.js设置的地址,前面带斜杠/
    }
  }
}

