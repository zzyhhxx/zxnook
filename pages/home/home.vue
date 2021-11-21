<template>
	<view class="content" v-if="isReady">
		<card-pet
			:petInfo="petInfo"
		></card-pet>
		<tab-control 
			ref="tabcontrol"
			:currentIndex="currentIndex" 
			@tabClick="onTabClick" 
		></tab-control>
		<tab-control 
			v-if="showFixTabControl"
			class="fixed"
			:currentIndex="currentIndex" 
			@tabClick="onTabClick" 
		></tab-control>
		
		<card-content
			v-for="(item, index) in articleList"
			:key="index"
			:info="item"
		></card-content>
	</view>
</template>

<script>
	import { getPet } from '../../network/Pet.js';
	import { getArticleList } from '../../network/Article.js';
	export default {
		data() {
			return {
				isReady: true,
				currentIndex: 0,
				showFixTabControl: false,
				petInfo:{},
				tabList:[],
				contentList:[],
				articleList:[]
			}
		},
		onLoad() {
			this.init();
		},
		methods: {
			async init() {
				let result = await Promise.all([getPet(),getArticleList()]);
				let {code, msg, data} = result[0] || {};
				console.log(333333, result);
				if(code === 1) {
					if(Array.isArray(data) && data.length) {
						this.petInfo = data[data.length - 1];
					}
				}
				let articleData = result[1] ? result[1].data : {};
				if(articleData.list && articleData.list.data) {
					this.articleList = articleData.list.data;
				}
				console.log('articlelist', this.articleList)
				
			},
			onTabClick(e) {
				this.currentIndex = e;
			},
			onPageScroll(e) {
				let tabControlTop = this.$refs.tabcontrol.$el.offsetTop;
				let showFixTabControl = e.scrollTop > tabControlTop;
				if(this.showFixTabControl !== showFixTabControl) {
					this.showFixTabControl = showFixTabControl;
				}
			}
		}
	}
</script>

<style scoped>
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}
	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.fixed {
		position: fixed;
		z-index: 999;
		top: 88rpx;
		left: 0;
		right: 0;
		margin: 0 auto;
	}
</style>
