<template>
	<view class="content">
		<xn-input 
			class="item" 
			label="用户名"
			propName="username"
			:defaultValue="username"
			@change="onChange"
			@inputBlur="onBlur"
		></xn-input>
		<xn-input 
			class="item" 
			label="密码" 
			bgimg="eye"
			propName="password"
			:defaultValue="password"
			:bg-status="bgStatus" 
			:type="bgStatus ? 'text' : 'password'"
			@bgClick="onBgClick()"
			@change="onChange"
			@inputBlur="onBlur"
		></xn-input>
		<view class="forgot-psw">
			<navigator url="../forgotpsw/forgotpsw">忘记密码?</navigator>
			</view>
		<xn-button class="item" text="登录" size="large" @btnClick="submit"></xn-button>
		<view class="register">
			<text>没有账号?</text><navigator url="../register/register" class="to-register">去注册</navigator>
		</view>
		<view class="bottom">
			<image src="../../static/image/cat1.svg" mode="" class="image"></image>
		</view>
	</view>
</template>

<script>
	import XnInput from '../../components/xn-form/input/input-large.vue';
	import { login } from '../../network/Login.js';
	import { checkAndToast } from '../../common/common.js';
	export default {
		name: 'Login',
		props: {
			
		},
		components: {
			XnInput
		},
		data() {
			return {
				bgStatus: false,
				username: '',
				password: ''
			}
		},
		methods: {
			onBgClick() {
				this.bgStatus = !this.bgStatus;
			},
			onChange(e) {
				let {name, value} = e || {};
				this[name] = value;
			},
			onBlur() {
				let {name, value} = e || {};
				if(name === 'username') {
					name = 'name';
				}
				checkAndToast(name, value);
			},
			verification() {
				if(!checkAndToast('name', this.username) 
					|| !checkAndToast('password', this.password)) {
						return false;
					}
				return {
					username: this.username,
					password: this.password
				}
			},
			submit() {
				let data = this.verification();
				if(!data) {
					return;
				}
				login({userinfo: data})
				.then(res => {
					
				})
			}
		}
	}
</script>

<style scoped>
.item {
	margin-top: 100rpx;
}
.item:nth-child(n+2) {
	margin-top: 50rpx;
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
