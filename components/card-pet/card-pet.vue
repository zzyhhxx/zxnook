<template>
	<view class="card">
		<view class="left">
			<image src="../../static/image/dog3.png" mode="" class="image"></image>
		</view>
		<view class="right">
			<view class="pet-name">heiheihei</view>
			<view class="pet-info">
				<view class="icon">
					<image src="../../static/pet.png" mode="" class="image"></image>
				</view>
				<view class="info-name">性别：</view>
				<view class="info-desc">gg</view>
			</view>
			<view class="pet-info">
				<view class="icon">
					<image src="../../static/pet.png" mode="" class="image"></image>
				</view>
				<view class="info-name">年龄：</view>
				<view class="info-desc">12</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"card-pet",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.card {
		width: 604rpx;
		height: 276rpx;
		background: #F8F8FB;
		border-radius: 36rpx;
		display: flex;
		margin-top: 20rpx;
	}
	.left {
		width: 172rpx;
		height: 172rpx;
		border-radius: 38rpx;
		overflow: hidden;
		margin-left: 36rpx;
		margin-top: 52rpx;
	}
	.left .image {
		width: 172rpx;
		height: 172rpx;
	}
	.icon {
		width: 50rpx;
		height: 50rpx;
		background: #D9E5FB;
		border-radius: 50%;
		position: relative;
	}
	.icon .image {
		width: 28rpx;
		height: 24rpx;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.right {
		flex: 1;
		margin-left: 36rpx;
		margin-top: 52rpx;
	}
	.pet-info {
		display: flex;
		font-size: 24rpx;
		color: #565D80;
		line-height: 50rpx;
	}
	.pet-info:nth-child(2) {
		margin-top: 16rpx;
	}
	.pet-info:nth-child(n+3) {
		margin-top: 10rpx;
	}
	.info-name {
		margin-left: 22rpx;
	}
	.pet-name {
		font-size: 44rpx;
	}
</style>
