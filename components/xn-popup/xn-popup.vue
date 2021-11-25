<template>
	<view>
		<view v-if="isShow" class="mask" @click="maskClick()" @touchmove.prevent></view>
		<view class="propup" :class="{show: isShow}" @touchmove.prevent>
			<view class="prop-title">
				<view class="item-left">
					<slot name="titleLeft"></slot>
				</view>
				<view class="item-center">
					<slot name="titleCenter"></slot>
				</view>
				<view class="item-right">
					<slot name="titleRight"></slot>
				</view>
			</view>
			<scroll-view class="prop-list" scroll-y="true">
				<slot name="list"></slot>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"xn-popup",
		props: {
			isShow: {
				type: Boolean,
				default: false
			}
		},
		methods:{
			maskClick() {
				this.$emit('maskClick');
			}
		}
	}
</script>

<style scoped>
	.propup {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		z-index: 999;
		background-color: #ffffff;
		height: 0;
		overflow: hidden;
		transition: all ease-in-out .3s; 
	}
	.show {
		height: 800rpx;
	}
	.prop-list {
		height: 700rpx;
	}
	.mask {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		background-color: #000000;
		opacity: .5;
	}
	.prop-title {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		position: relative;
		display: flex;
		justify-content: space-between;
		padding: 0 20rpx;
		overflow: hidden;
	}
	.prop-title::after {
		position: absolute;
		content: '';
		width: 200%;
		height: 1px;
		left: 0;
		bottom: 0;
		background: #E6E6E6;
		transform: scale(0.5);
		transform-origin: 0 0;
	}
	.item-left {
		width: 20%;
		position: relative;
	}
	.item-center {
		flex: 1;
		position: relative;
	}
	.item-right {
		width: 20%;
		position: relative;
	}
</style>
