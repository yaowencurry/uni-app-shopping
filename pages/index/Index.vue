<template>
	<view class="container">
		<search-top></search-top>
		<view class="container__banner">
			<view class="container__banner-box">
				<swiper indicator-dots autoplay :interval="1000" :duration="500">
					<swiper-item v-for="(item,index) in bannerList" :key="index">
						<image :src="item.img_url" mode="scaleToFill" class="swiper-img"></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<goods-list :list="goodsList"></goods-list>
	</view>
</template>

<script>
	import SearchTop from '../component/search/SearchTop.vue';
	import GoodsList from '../component/goods/GoodSList.vue';
	export default {
		components: {
			SearchTop,
			GoodsList
		},
		data() {
			return {
				keyword: '',
				bannerList: [],
				goodsList:[]
			}
		},
		mounted() {
			this.getBannerList();
			this.getGoodsList();
		},
		methods: {
			getBannerList() {
				uni.request({
					url: 'http://49.232.158.155:3000/imageList',
					method: 'GET'
				}).then(res => {
					if (res) {
						this.bannerList = res[1].data;
					}
				})
			},
			getGoodsList() {
				uni.request({
					url: 'http://49.232.158.155:3000/products',
					method: 'GET',
					data: {
						pno: 1,
						size: 10
					}
				}).then(res => {
					if (res) {
						this.goodsList = res[1].data.data;
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.container {
		&__banner {
			padding: 40rpx;
			background-color: #a91527;
			border-radius: 0 0 100rpx 100rpx;

			&-box {
				border-radius: 100px;
			}

			.swiper-img {
				width: 100%;
			}
		}
	}
</style>
