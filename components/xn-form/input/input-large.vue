<template>
	<view>
		<view class="item">
			<view class="label">{{label}}</view>
			<view class="desc">
				<input :type="type" value="" :placeholder="placeholder" class="input" v-model="inputValue"/>
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
</style>
