import { print, debounce } from 'utils/util'
import { mapState } from 'vuex'
import { uniqueId, range } from 'lodash'


export default {
  data () {
    return {
      list: '',
      queue: range(10).map(() => uniqueId('contact_')),
      currentQueueIndex: 0,
      current: 0,
      stop: true
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
    // currentQueueIndex () {
    //   if (this.currentQueueIndex >= this.queue.length - 2) {
    //     this.queue = [...this.queue, ...range(10).map(() => uniqueId('contact_'))]
    //   }
    // }
  },
  // 页面挂载
  mounted () {
    this.list = range(3).map((item, i) => ({
      id: uniqueId('uniqueId_'),
      contact: this.queue[i]
    }))
  },
  methods: {
    navChange ({mp: {detail: { key }}}) {
      // if (key === 'tab2') this.$router.replace('/packageOther/index/index') // 跳转地址为pages.js设置的地址,前面带斜杠/
      if (key === 'tab2') this.$router.push('/packageOther/index/index') // 跳转地址为pages.js设置的地址,前面带斜杠/
    },
    swiperChange ({mp: {detail: { current }}}) {
      const temp = this.current - current
      if (temp === -1 || temp === 2) {
        // right
        const next = this.currentQueueIndex + 1
        if (next >= this.queue.length) {
          this.currentQueueIndex = this.queue.length - 1
          this.stop = false
          return
        } else {
          this.currentQueueIndex = next
        }
      } else if (temp === 1 || temp === -2) {
        // left
        const prev = this.currentQueueIndex - 1
        if (prev <= -1) {
          this.currentQueueIndex = 0
          this.stop = false
          return
        } else {
          this.currentQueueIndex = prev
        }
      }
      this.stop = true
      const index = this.currentQueueIndex % 3 // 列表当前下标与当前swiper下标映射
      const prev = this.queue[this.currentQueueIndex - 1] // prev
      const next = this.queue[this.currentQueueIndex + 1] // next
      switch (index) {
        case 0:
          // [current, next, prev]
          this.list[index + 1].contact = next
          this.list[index + 2].contact = prev
          break
        case 1:
          // [prev, current, next]
          this.list[index + 1].contact = next
          this.list[index - 1].contact = prev
          break
        case 2:
          // [next, prev, current]
          this.list[index - 2].contact = next
          this.list[index - 1].contact = prev
      }
      this.current = current
    },
    touchMove () {
      return this.stop
    }
  }
}
