<template>
	<view>
		<view class="item">
			<view class="label">{{label}}</view>
			<view class="desc">
				<image src="../../../static/address.png" mode="" class="image"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Input',
		props: {
			label: {
				type: String,
				default: ''
			},
			placeholder: {
				type: String,
				default: ''
			},
			type: {
				type: String,
				default: 'text'
			}
		},
		data() {
			return {
				inputValue: ''
			}
		},
		watch:{
			inputValue(newVal) {
				this.$emit('change', newVal);
			}
		}
	}
</script>

<style scoped>
	.item {
		width: 604rpx;
		height: 102rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.label {
		width: fit-content;
		color: #565D80;
		line-height: 102rpx;
	}
	.desc {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		background-color: #666666;
		position: relative;
	}
	.desc .image {
		position: absolute;
		width: 50rpx;
		height: 50rpx;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
