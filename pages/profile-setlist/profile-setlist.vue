<template>
	<view class="content">
		<navigator class="item" url="../profile-setting/profile-setting">
			<view class="icon">
				<image src="../../static/image/icon/setting.svg" mode="" class="image"></image>
			</view>
			<view class="desc">
				修改信息
			</view>
		</navigator>
		<xn-button class="item" text="退出登录" size="large" @btnClick="signOut"></xn-button>
	</view>
</template>

<script>
	import { clearUserCache } from '../../common/user.js';
	import { $toast } from '../../common/common.js';
	export default {
		name: 'ProfileSetlist',
		data() {
			return {
				
			}
		},
		methods: {
			signOut() {
				clearUserCache();
				$toast('退出成功').then(() => {
					uni.navigateBack({
						delta: 1
					});
				})
			}
		}
	}
</script>

<style scoped>
	.item {
		width: 604rpx;
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
		background: #c6c9d333;
		border-radius: 20rpx;
		justify-content: center;
		align-items: center;
		margin-top: 100rpx;
	}
	.item:nth-child(n+2) {
		margin-top: 50rpx;
	}
	.icon {
		width: 40rpx;
		height: 40rpx;
		position: relative;
	}
	.icon .image {
		width: 40rpx;
		height: 40rpx;
		position: absolute;
	}
	.desc {
		margin-left: 20rpx;
		color: #2C3458;
		font-size: 32rpx;
	}
</style>
