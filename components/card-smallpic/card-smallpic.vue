<template>
	<view class="card">
		<view class="top-image">
			<image src="../../static/image/dog4.png" mode="" class="image"></image>
		</view>
		<view class="pet-info">
			<view class="item">
				<view class="item-name">名字: </view>
				<view class="item-desc">噼噼啪啪</view>
			</view>
			<view class="item">
				<view class="item-name">年龄: </view>
				<view class="item-desc">2</view>
			</view>
			<view class="item">
				<view class="item-name">品种: </view>
				<view class="item-desc">阿拉斯加</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"card-smallpic",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.card {
		width: 276rpx;
		height: 370rpx;
		background-color: #F8F8FB;
		border-radius: 24rpx;
	}
	.top-image {
		width: 236rpx;
		height: 188rpx;
		margin: 20rpx;
		border-radius: 30rpx;
		overflow: hidden;
	}
	.top-image .image {
		width: 236rpx;
		height: 188rpx;
	}
	.pet-info .item {
		display: flex;
		white-space: nowrap;
		font-size: 20rpx;
		margin-left: 20rpx;
		line-height: 40rpx;
	}
</style>
