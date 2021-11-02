<template>
	<view class="content">
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
	export default {
		data() {
			return {
				currentIndex: 0,
				showFixTabControl: false
			}
		},
		onLoad() {
		},
		methods: {
			onTabClick(e) {
				this.currentIndex = e;
			},
			onPageScroll(e) {
				let tabControlTop = this.$refs.tabcontrol.$el.offsetTop;
				this.showFixTabControl = e.scrollTop > tabControlTop;
			}
		}
	}
</script>

<style scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #ffffff;
	}
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
