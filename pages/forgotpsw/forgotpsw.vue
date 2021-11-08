<template>
	<view class="content">
		<xn-input 
			class="item" 
			label="邮箱" 
			type="email"
			@change="onEmailChange"
			@inputBlur="onEmailBlur"
			></xn-input>
		<xn-button class="item" text="发送" size="large"></xn-button>
		<view class="register tips">
			<text>我们会向您的邮箱发送修改密码的链接</text>
		</view>
		<view class="register">
			<text>想起密码?</text><navigator url="../login/login" class="to-register">去登录</navigator>
		</view>
		<view class="bottom">
			<image src="../../static/image/cat1.svg" mode="" class="image"></image>
		</view>
	</view>
</template>

<script>
	import XnInput from '../../components/xn-form/input/input-large.vue';
	import { check } from '../../common/check.js';
	export default {
		name: 'Forgotpsw',
		props: {
			
		},
		components: {
			XnInput
		},
		data() {
			return {
				email: ''
			}
		},
		methods: {
			onEmailChange(email) {
				this.email = email;
			},
			onEmailBlur() {
				this.checkAndToast('email', this.email);
			},
			checkAndToast(name, value) {
				let result = check(name, value);
				if(!result.status) {
					uni.showToast({
					    title: result.msg,
						icon: 'none',
					    duration: 1500
					});
					return false;
				}
				return true;
			},
			verification() {
				if(!checkAndToast('email', this.email)) {
					return false;
				}
				return {
					email: this.email
				}
			},
			submit() {
				
			}
		}
	}
</script>

<style scoped>
.item {
	margin-top: 100rpx;
}
.item:nth-child(n+2) {
	margin-top: 100rpx;
}
.forgot-psw {
	width: 604rpx;
	text-align: right;
	color: #565D80;
	font-size: 30rpx;
	margin-top: 50rpx;
}
.register {
	display: flex;
	justify-content: flex-end;
	font-size: 30rpx;
	margin-top: 50rpx;
}
.tips {
	justify-content: flex-start;
	color: #565D80;
	width: 604rpx;
}
.to-register {
	color: var(--color-tint);
}
.bottom {
	width: 438rpx;
	height: 372rpx;
	overflow: hidden;
	margin-top: 150rpx;
}
.bottom .image {
	width: 438rpx;
	height: 372rpx;
}
</style>
