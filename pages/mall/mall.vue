<template>
	<view class="content">
		 <swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="2000" :duration="500">
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/dog1.png" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/image/dog4.png" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item"><image src="../../static/dog2.png" mode=""></image></view>
			</swiper-item>
		</swiper>
		<view class="list">
			<card-classify></card-classify>
			<card-classify></card-classify>
			<card-classify></card-classify>
			<card-classify></card-classify>
			<card-classify></card-classify>
			<card-classify></card-classify>
		</view>
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
		<view class="list">
			<card-smallpic></card-smallpic>
			<card-smallpic></card-smallpic>
			<card-smallpic></card-smallpic>
			<card-smallpic></card-smallpic>
			<card-smallpic></card-smallpic>
			<card-smallpic></card-smallpic>
			<card-smallpic></card-smallpic>
			<card-smallpic></card-smallpic>
		</view>
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
		methods: {
			onPageScroll(e) {
				let tabControlTop = this.$refs.tabcontrol.$el.offsetTop;
				let showFixTabControl = e.scrollTop > tabControlTop;
				if(this.showFixTabControl !== showFixTabControl) {
					this.showFixTabControl = showFixTabControl;
				}
			},
			onTabClick(e) {
				this.currentIndex = e;
			},
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
.swiper {
	width: 604rpx;
}
.list {
	width: 604rpx;
	display: flex;
	justify-content: space-between;
	align-content: space-between;
	flex-wrap: wrap;
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
