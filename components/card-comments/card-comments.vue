<template>
	<view class="card">
		<view class="user-info">
			<view class="user-head">
				<image src="../../static/image/head2.png" mode="" class="head-image"></image>
			</view>
			<view class="user-text">
				<view class="user-name">佩奇的主人</view>
				<view class="pet-name">佩奇</view>
			</view>
		</view>
		<view class="like">
			<image src="../../static/like.png" mode="" class="like-image"></image>
		</view>
		<view class="content">
			11111111111111111111111111
		</view>
		<view class="img">
			<image src="../../static/dog1.png" mode="" class="main-img"></image>
			<image src="../../static/dog1.png" mode="" class="main-img"></image>
			<image src="../../static/dog1.png" mode="" class="main-img"></image>
			<image src="../../static/dog1.png" mode="" class="main-img"></image>
		</view>
		<view class="bottom">
			<view class="bottom-item left">
				<view class="item-image">
					<image src="../../static/like.png" mode="" class="image"></image>
				</view>
				<view class="item-num">2.5k</view>
			</view>
			<view class="bottom-item right">
				<view class="item-image">
					<image src="../../static/commont.png" mode="" class="image"></image>
				</view>
				<view class="item-num">1.6k</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"card",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.card {
		width: 604rpx;
		height: 582rpx;
		background-color: #F8F8FB;
		border-radius: 44rpx;
		position: relative;
		margin-top: 20rpx;
		overflow: hidden;
		padding: 0 10rpx;
	}
	.user-info {
		display: flex;
		margin-top: 48rpx;
	}
	.content {
	}
	.user-head {
		width: 62rpx;
		height: 62rpx;
		border-radius: 20rpx;
		overflow: hidden;
	}
	.user-text {
		margin-left: 22rpx;
	}
	.user-head .head-image {
		width: 62rpx;
		height: 62rpx;
	}
	.user-name, .pet-name {
		white-space: nowrap;
	}
	.user-name {
		font-size: 24rpx;
	}
	.pet-name {
		font-size: 16rpx;
	}
	.like {
		width: 68rpx;
		height: 68rpx;
		border-radius: 50%;
		top: 22rpx;
		right: 24rpx;
		position: absolute;
		background: #FFF4F4;
	}
	.like-image {
		width: 48rpx;
		height: 48rpx;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.img {
		width: 100%;
		height: 316rpx;
		margin-top: 32rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-content: space-between;
	}
	.main-img {
		height: calc(50% - 5px);
		width: calc(50% - 5px);
	}
	.bottom {
		margin-top: 32rpx;
		display: flex;
		position: absolute;
		right: 30rpx;
		bottom: 30rpx;
	}
	.bottom .left {
		margin-left: 34rpx;
		background: #FFF4F4;
	}
	.bottom .right {
		margin-left: 38rpx;
		background: #D9E5FB;
	}
	.bottom-item {
		width: 110rpx;
		height: 50rpx;
		display: flex;
		border-radius: 16rpx;
	}
	.item-image {
		width: 40rpx;
		height: 40rpx;
		margin-top: 4rpx;
		margin-left: 8rpx;
	}
	.item-image .image {
		width: 40rpx;
		height: 40rpx;
	}
	.item-num {
		font-size: 16rpx;
		line-height: 50rpx;
		flex: 1;
	}
	.left .item-num {
		color: #F68685;
	}
	.right .item-num {
		color: #367FFA;
	}
</style>
