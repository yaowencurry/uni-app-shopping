<template>
  <view class="container">
    <image
      class="container__image"
      :src="`http://49.232.158.155:3000/${info.md}`"
      mode=" scaleToFill"
    ></image>
    <view class="">{{info.title}}</view>
  </view>
</template>

<script>
export default {
  props: {
    info: {
      type: Object
    }
  },
  data () {
    return {

    };
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 50%;
  box-sizing: border-box;
  &__image {
    width: 100%;
  }
}
</style>
