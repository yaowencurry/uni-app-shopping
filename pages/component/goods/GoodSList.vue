<template>
	<view class="container d-flex">
		<goods-list-item v-for="item in list" :key="item.lid" :info="item"
		></goods-list-item>
	</view>
</template>

<script>
	import GoodsListItem from './GoodsListItem.vue'
	export default {
		components: {
			GoodsListItem
		},
		props: {
			list: {
				type: Array,
				required: true
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 20rpx;
	}
</style>
