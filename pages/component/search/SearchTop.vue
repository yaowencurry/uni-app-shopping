<template>
  <view class="d-flex container">
    <view class="d-flex flex-start container__search">
      <uni-icons
        type="list"
        color="#fff"
        size="24"
      ></uni-icons>
      <input
        type="text"
        v-model="keyWord"
        placeholder="请输入搜索关键词"
        class="container__search-input"
      />
    </view>
    <text
      class="container__btn"
      @click="handleLogin"
    >登录</text>
  </view>
</template>

<script>
import UniIcons from '../../../components/uni-icons/uni-icons.vue'
export default {
  components: {
    UniIcons
  },
  data () {
    return {
      keyWord: ''
    };
  },
  methods: {
    handleLogin () {
      console.log(123)
      uni.navigateTo({
        url: '/pages/login/Login'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 20rpx 35rpx;
  background-color: #a91527;

  &__search {
    width: 89%;

    &-input {
      background-color: #fff;
      width: 89%;
      height: 70rpx;
      margin-left: 20rpx;
      display: block;
      border-radius: 40rpx;
      padding: 10rpx 30rpx;
      box-sizing: border-box;
      font-size: 28rpx;
    }
  }

  &__btn {
    font-size: 28rpx;
    color: #fff;
  }
}
</style>
