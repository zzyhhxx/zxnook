<template>
	<view class="content">
		<view class="top-image" @click="uploadFile">
			<image src="../../static/image/head2.png" mode="" class="image"></image>
			<image src="../../static/image/icon/add.svg" mode="" class="add"></image>
		</view>
		<xn-input
			class="item" 
			label="昵称"
			@change="onNameChange"
			@inputBlur="onNameBlur"
		></xn-input>
		<xn-input
			class="item" 
			label="邮箱"
			@change="onNameChange"
			@inputBlur="onNameBlur"
		></xn-input>
		<xn-input
			class="item" 
			label="新密码"
			@change="onNameChange"
			@inputBlur="onNameBlur"
		></xn-input>
		<xn-input
			class="item" 
			label="再次输入新密码"
			@change="onNameChange"
			@inputBlur="onNameBlur"
		></xn-input>
		<xn-button class="item" text="保存修改" size="large" @btnClick="submit"></xn-button>
	</view>
</template>

<script>
	import XnInput from '../../components/xn-form/input/input-large.vue';
	import { uploadFile } from '../../common/common.js';
	export default {
		name: 'ProfileSetting',
		components:{
			XnInput
		},
		data() {
			return {
				
			}
		},
		methods: {
			uploadFile() {
				uploadFile();
			},
			onNameChange() {
				
			},
			onNameBlur() {
				
			},
			submit() {
				
			}
		}
	}
</script>

<style scoped>
	.top-image {
		width: 160rpx;
		height: 160rpx;
		border-radius: 52rpx;
		margin-top: 60rpx;
		/* overflow: hidden; */
		position: relative;
	}
	.top-image .image {
		width: 160rpx;
		height: 160rpx;
	}
	.top-image .add {
		width: 56rpx;
		height: 56rpx;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(25%, -25%);
	}
	.item {
		margin-top: 100rpx;
	}
	.item:nth-child(n+1) {
		margin-top: 20rpx;
	}
	.item:last-child {
		margin-top: 50rpx;
	}
</style>
