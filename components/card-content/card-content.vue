<template>
	<view 
		class="card"
		@click="onClick()"
	>
		<view class="left">
			<image :src="info.image.filePath" class="left-image"></image>
		</view>
		<view class="right">
			<view class="article-info">
				<view class="article-text">
					<view class="article-name">{{info.articleTitle}}</view>
					<view class="article-content">{{content}}</view>
					<view class="view">
						<view class="icon-view"></view>
						<view class="text">{{info.showViews}}</view>
					</view>
					<view class="article-time">{{info.viewTime}}</view>
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
		computed: {
			content() {
				return this.info.articleContent.replace(/<[^>]+>/g,"").replace(/&nbsp;/ig,"").substring(0, 200);
			}	
		},
		methods: {
			onClick() {
				this.$emit('articleClick', this.info.articleId);
			}
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
		flex: 1;
	}
	.article-info {
		display: flex;
	}
	.article-head {
		width: 60rpx;
		height: 60rpx;
		border-radius: 10rpx;
		overflow: hidden;
	}
	.article-head .img {
		width: 60rpx;
		height: 60rpx;
	}
	.article-text {
		font-size: 24rpx;
		margin-left: 16rpx;
		position: relative;
		height: 158rpx;
		width: 100%;
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
	.article-content {
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2; 
		-webkit-box-orient: vertical;
		word-break: break-all;
		overflow: hidden; 
		margin-top: 10rpx;
		line-height: 36rpx;
	}
	.article-time {
		position: absolute;
		bottom: 0;
		right: 10rpx;
	}
	.article-name {
		font-size: 14px;
		color: #000;
		font-weight: bold;
	}
	.icon-view {
		width: 32rpx;
		height: 32rpx;
		background: url('../../static/image/icon/view.svg') no-repeat top left;
		background-size: 100%;
		align-self: center;
	}
	.view {
		display: flex;
		position: absolute;
		bottom: 0;
	}
	.view .text {
		font-size: 24rpx;
		margin-left: 4rpx;
		line-height: 32rpx;
	}
</style>
