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
		justify-content: space-between;
	}
	.label {
		width: fit-content;
		color: #565D80;
	}
	.desc {
		flex: 1;
		margin-left: 50rpx;
		display: flex;
		justify-content: flex-end;
	}
	.desc .input {
		width: 50%;
		border-bottom: 1px solid #565D80;
		border-top: none;
		border-left: none;
		border-right: none;
		outline:none;
		box-shadow: none;
	}
	.input:focus {
		border: none;
	}
</style>
