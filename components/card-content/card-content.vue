<template>
	<view class="card">
		<view class="left">
			<image :src="info.image.filePath" class="left-image"></image>
		</view>
		<view class="right">
			<view class="user-info">
				<view class="user-text">
					<view class="user-name">{{info.articleTitle}}</view>
					<view class="pet-name">{{info.viewTime}}</view>
				</view>
			</view>
			<view class="gender">
				<view class="text"></view>
			</view>
		
		</view>
	</view>
</template>

<script>
	export default {
		name:"content-card",
		props:{
			info: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.card {
		width: 602rpx;
		height: 198rpx;
		display: flex;
		border-radius: 28rpx;
		background-color: #F8F8FB;
		margin-top: 38rpx;
	}
	.left {
		width: 188rpx;
		height: 158rpx;
		border-radius: 30rpx;
		margin: 20rpx 54rpx 20rpx 20rpx;
		overflow: hidden;
	}
	.left-image {
		width: 188rpx;
		height: 158rpx;
	}
	.right {
		margin-top: 20rpx;
	}
	.user-info {
		display: flex;
	}
	.user-head {
		width: 60rpx;
		height: 60rpx;
		border-radius: 10rpx;
		overflow: hidden;
	}
	.user-head .img {
		width: 60rpx;
		height: 60rpx;
	}
	.user-text {
		font-size: 24rpx;
		margin-left: 16rpx;
	}
	.gender, .address {
		font-size: 16rpx;
		display: flex;
	}
	.gender {
		margin-top: 26rpx;
	}
	.address {
		margin-top: 8rpx;
	}
	.gender-image{
		width: 28rpx;
		height: 28rpx;
	}
	.gender-image .image {
		width: 18rpx;
		height: 16rpx;
	}
	.address-image {
		width: 28rpx;
		height: 28rpx;
	}
	.address-image .image {
		height: 26rpx;
		width: 24rpx;
		
	}
</style>
