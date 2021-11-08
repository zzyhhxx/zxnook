<template>
	<view>
		<view class="item">
			<view class="label">{{label}}</view>
			<view 
				class="desc"
			>
				<input :type="type" value="" :placeholder="placeholder" class="input" v-model="inputValue" @blur="onBlur()"/>
				<view :class="{bgeye: bgimg === 'eye', open: bgStatus, close: !bgStatus}" @click="bgClick()"></view>
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
			},
			bgimg: {
				type: String,
				default: ''
			},
			bgStatus: {
				type: Boolean,
				default: false
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
		},
		methods: {
			bgClick() {
				this.$emit('bgClick');
			},
			onBlur() {
				this.$emit('inputBlur');
			}
		}
	}
</script>

<style scoped>
	.item {
		width: 604rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
	}
	.label {
		width: fit-content;
		color: #565D80;
		font-size: 28rpx;
		line-height: 80rpx;
	}
	.desc {
		width: 604rpx;
		height: 102rpx;
		position: relative;
	}
	.desc .input {
		width: 100%;
		height: 102rpx;
		border: 1px solid #565D80;
		border-radius: 20rpx;
		padding: 0 80rpx 0 20rpx;
		outline:none;
		box-shadow: none;
	}
	.bgeye{
		position: absolute;
		content: '';
		width: 40rpx;
		height: 40rpx;
		right: 30rpx;
		top: 50%;
		transform: translateY(-50%);
	}
	.open {
		background: url(../../../static/image/eye1.svg) no-repeat;
		background-size: 40rpx 40rpx;
		
	}
	.close {
		background: url(../../../static/image/eye2.svg) no-repeat;
		background-size: 40rpx 40rpx;
	}
</style>
