<template>
  <view class="container">
    <top-title text="登录/注册"></top-title>
    <view class="container__input">
      <input
        type="text"
        v-model="uname"
        placeholder="请输入用户名/手机号"
      />
      <input
        type="password"
        v-model="upwd"
        placeholder="请输入密码"
      />
      <button
        type="default"
        class="submit-btn"
      >登录</button>
      <button
        type="default"
        class="ignore-btn"
      >注册</button>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      uname: '',
      upwd: ''
    };
  }
}
</script>

<style lang="scss" scoped>
.container {
  &__input {
    margin-top: 100rpx;
    padding: 0 50rpx;
    input {
      border-bottom: 1px solid #eee;
      margin: 30rpx 0;
    }
  }
}
</style>
