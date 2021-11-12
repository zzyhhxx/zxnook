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
			label="邮箱"
			type="email"
			propName="email"
			:defaultValue="email"
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
		<xn-button class="item" text="注册" size="large" @btnClick="submit"></xn-button>
		<view class="register">
			<text>已有账号?</text><navigator url="../login/login" class="to-register">去登录</navigator>
		</view>
		<view class="bottom">
			<image src="../../static/image/cat1.svg" mode="" class="image"></image>
		</view>
	</view>
</template>

<script>
	import XnInput from '../../components/xn-form/input/input-large.vue';
	
	import { register } from '../../network/Register.js';
	import { setCache } from '../../common/cache.js';
	import { checkAndToast, $toast } from '../../common/common.js';
	export default {
		name: 'Register',
		props: {
			
		},
		components: {
			XnInput
		},
		data() {
			return {
				bgStatus: false,
				username: '',
				password: '',
				email: ''
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
			onBlur(e) {
				let {name, value} = e || {};
				checkAndToast(name, value);
			},
			verification() {
				if(!checkAndToast('name', this.username) 
					|| !checkAndToast('email', this.email)
					|| !checkAndToast('password', this.password)) {
						return false;
					}
				return {
					username: this.username,
					password: this.password,
					email: this.email
				}
			},
			submit() {
				let data = this.verification();
				if(!data) {
					return;
				}
				register({userinfo: data})
				.then(res => {
					console.log(11111, res);
					let { data = {}, msg = '' } = res || {};
					if(data && data.token) {
						setCache('token', data.token);
						$toast('注册成功')
						.then(() => {
							uni.reLaunch({
								url: '../profile/profile'
							})
						})
						
					}else {
						msg && $toast(msg)
					}
					
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
	margin-top: 50rpx;
}
.bottom .image {
	width: 438rpx;
	height: 372rpx;
}
</style>
