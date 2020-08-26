<template>
	<view class="container">
		<uni-icons type="back" size="22" class="container__back" color="#333333" @click="handleGoBack"></uni-icons>
		<text class="container__text">{{text}}</text>
	</view>
</template>

<script>
	import UniIcons from '../../../components/uni-icons/icons.js'
	export default {
		components:{
			UniIcons
		},
		props:{
			text:{
				type:String
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			handleGoBack(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
.container{
	border-bottom: 1px solid #eee;
	padding: 20rpx;
	box-sizing: border-box;
	text-align: center;
	&__back{
		position: absolute;
		left: 20rpx;
	}
	&__text{
		color: #333333;
	}
}
</style>
