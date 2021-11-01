<template>
	<view class="search">
		<input type="text" value="" placeholder="请输入关键词" class="input"/>
		<view class="button">
			<image src="../../static/search.png" mode="" class="img"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name:"search",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
.search {
	display: flex;
	width: 604rpx;
	height: 112rpx;
	border-radius: 28rpx;
	overflow: hidden;
	background-color: #ffffff;
	margin-top: 88rpx;
}
.button {
	width: 112rpx;
	height: 112rpx;
	border-radius: 28rpx;
	background: #F68685;
	position: relative;
}
.img {
	width: 48rpx;
	height: 48rpx;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.input {
	height: 112rpx;
	padding-left: 46rpx;
	flex: 1;
}
</style>
