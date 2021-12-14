<template>
	<view class="card">
		<view class="left">
			<image :src="image" mode="" class="image"></image>
		</view>
		<view class="right">
			{{text}}
		</view>
	</view>
</template>

<script>
	export default {
		name:"card-classify",
		props: {
			image: {
				type: String,
				default: ''
			},
			text: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style scoped>
.card {
	width: 178rpx;
	height: 98rpx;
	background-color: #F8F8FB;
	border-radius: 18rpx;
	display: flex;
}
.left {
	width: 70rpx;
	height: 98rpx;
	border-radius: 18rpx;
	overflow: hidden;
	position: relative;
	margin-left: 16rpx;
}
.left .image {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: 70rpx;
	height: 70rpx;
}
.right {
	flex: 1;
	margin-left: 18rpx;
	font-size: 24rpx;
	line-height: 98rpx;
}
</style>
