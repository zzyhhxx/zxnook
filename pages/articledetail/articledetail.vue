<template>
	<view class="content">
		<view class="title">
			{{info.articleTitle}}
		</view>
		<view class="info">
			<view class="view">
				<view class="icon-view"></view>
				<view class="text">{{info.showViews}}</view>
			</view>
			<view class="publish-date">
				{{info.viewTime}}
			</view>
		</view>
		
		<view 
			class="pesc"
			v-html="info.articleContent"
		></view>
	</view>
</template>

<script>
	import { getArticle } from '../../network/Article';
	import { $toast } from '../../common/common';
	export default {
		name: 'ArticleDetail',
		data() {
			return {
				info: {}
			}
		},
		onLoad(options) {
			let { articleId } = options || {};
			if(articleId) {
				getArticle({articleId})
				.then(res => {
					let { code, msg, data } = res || {};
					if(code === 1) {
						this.info = data.detail;
					}else {
						$toast(msg);
					}
				})
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.title {
		font-size: 64rpx;
		margin-top: 60rpx;
		width: 680rpx;
	}
	.pesc {
		width: 680rpx;
		line-height: 60rpx;
		margin-top: 60rpx;
		overflow: hidden;
	}
	.info {
		display: flex;
		justify-content: space-between;
		width: 680rpx;
		margin-top: 20rpx;
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
	}
	.view .text {
		font-size: 28rpx;
		margin-left: 10rpx;
		line-height: 32rpx;
	}
	.publish-date {
		font-size: 28rpx;
	}
</style>
