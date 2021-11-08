<template>
	<view class="content" v-if="isReady">
		<card-pet></card-pet>
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
		<card-bigpic></card-bigpic>
		<card-bigpic></card-bigpic>
		<card-bigpic></card-bigpic>
		<card-bigpic></card-bigpic>
		<card-content></card-content>
		<card-content></card-content>
		<card-content></card-content>
		<card-content></card-content>
	</view>
</template>

<script>
	import { getPetInfo, getTabList, getContentList } from '../../network/Home.js';
	export default {
		data() {
			return {
				isReady: true,
				currentIndex: 0,
				showFixTabControl: false,
				petInfo:{},
				tabList:[],
				contentList:[]
			}
		},
		onLoad() {
			this.init();
		},
		methods: {
			async init() {
				// let result = await Promise.all([getPetInfo(), getTabList(), getContentList()]);
				
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
