<template>
  <div class="number-control">
    <span class="control-bar subtract" @click="val--, $emit('sub', val)"></span>
    <input class="input-bar" v-model="val" type="number"/>
    <span class="control-bar plus" @click="val++, $emit('plus', val)"></span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number | String,
      default: 0
    }
  },
  data () {
    return {
      val: this.value
    }
  },
  methods: {
  }
}

</script>
<style lang='scss' scoped>

.number-control {
  display: inline-block;
	vertical-align: middle;
	position: relative;
  height: 29px;
  border-radius: 4px;
	border: 1px solid #f13a47;
  overflow: hidden;
  .control-bar {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    width: 59px;
    height: 29px;
    &::before,&::after {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%,-50%,0);
      display: block;
      content: '';
      background: #f13a47;
    }
  }

  .subtract {
    &::before {
      width: 11px;
      height: 1px;
      border: 1px solid #f13a47;
      background: #fff;
    }
    &::after {
    }
  }

  .plus {
    &::before {
      width: 14px;
      height: 3px;
    }
    &::after {
      width: 3px;
      height: 14px;
    }
  }
  .input-bar {
    	display: inline-block;
      vertical-align: middle;
      width: 55px;
      height: 29px;
      line-height: 29px;
      text-align: center;
      font-size: 15px;
      font-weight: bold;
      color: #333;
      border: none;
      border-left: 1px solid #f13a47;
      border-right: 1px solid #f13a47;
  }
}

</style>
