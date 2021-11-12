<template>
	<view class="content">
		<navigator class="item" url="../profile-setting/profile-setting">
			<view class="icon">
				<image src="../../static/address.png" mode="" class="image"></image>
			</view>
			<view class="desc">
				修改信息
			</view>
		</navigator>
		<xn-button class="item" text="退出登录" size="large" @btnClick="signOut"></xn-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.item {
		width: 604rpx;
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
	}
	.icon {
		width: 40rpx;
		height: 40rpx;
	}
	.icon .image {
		width: 40rpx;
		height: 40rpx;
	}
</style>
