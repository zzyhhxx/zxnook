<template>
	<view class="content">
		<view class="top-image" @click="uploadFile">
			<image :src="avatar" mode="" class="image"></image>
			<image src="../../static/image/icon/add.svg" mode="" class="add"></image>
		</view>
		<xn-input
			class="item" 
			label="昵称"
			propName="nickName"
			:defaultValue="nickName"
			@change="onChange"
			@inputBlur="onBlur"
		></xn-input>
		<xn-input
			class="item" 
			label="邮箱"
			propName="email"
			:defaultValue="email"
			@change="onChange"
			@inputBlur="onBlur"
		></xn-input>
		<xn-input
			class="item" 
			label="新密码"
			propName="password"
			:defaultValue="password"
			@change="onChange"
			@inputBlur="onBlur"
		></xn-input>
		<xn-input
			class="item" 
			label="再次输入新密码"
			propName="rPassword"
			:defaultValue="rPassword"
			@change="onChange"
			@inputBlur="onBlur"
		></xn-input>
		<xn-button class="item" text="保存修改" size="large" @btnClick="submit"></xn-button>
	</view>
</template>

<script>
	import XnInput from '../../components/xn-form/input/input-large.vue';
	import { uploadFile, checkAndToast } from '../../common/common.js';
	import { $toast } from '../../common/toast.js';
	import { check } from '../../common/check.js';
	import { getUser, editUser } from '../../network/Profile.js';
	export default {
		name: 'ProfileSetting',
		components:{
			XnInput
		},
		data() {
			return {
				avatar: '../../static/image/default/default-avatar.jpg',
				nickName: '',
				email: '',
				password: '',
				rPassword: ''
			}
		},
		mounted() {
			getUser()
			.then(res => {
				let {code, msg, data = {}} = res || {};
				 if(code !== 1) {
					 $toast(msg);
				 }else {
					 let userInfo = data.userInfo || {};
					 this.avatar = userInfo.avatarUrl || '';
					 this.nickName = userInfo.nickName || '';
					 this.email = userInfo.email || '';
				 }
			})
		},
		methods: {
			uploadFile() {
				uploadFile().then(res => {
					if(Array.isArray(res) && res.length) {
						this.avatar = res[0];
					}
				});
			},
			onChange(e) {
				let {name, value} = e || {};
				this[name] = value;
			},
			onBlur(e) {
				let {name, value} = e || {};
				if(name === 'nickName') {
					name = 'name';
				}else if(name === 'rPassword') {
					name = 'password'
				}
				checkAndToast(name, value);
			},
			validation() {
				if(!checkAndToast('name', this.nickName) || !checkAndToast('email', this.email)) {
					return false;
				}
				if(this.password) {
					if(!checkAndToast('password', this.password)
						|| !checkAndToast('password', this.rPassword)) {
							return false
						}
					if(this.password !== this.rPassword) {
						$toast('两次输入的密码不一致')
						return false
					}
				}
				return {
					nickName: this.nickName,
					email: this.email,
					avatarUrl: this.avatar
				};
			},
			submit() {
				
				let data = this.validation();
				console.log(data)
				if(!data) {
					return;
				}
				if(this.password) {
					data.password = this.password;
				}
				editUser({userInfo: data}).then(res => {
					let {code, msg, data} = res || {};
					if(code === 1) {
						$toast('修改成功').then(() => {
							uni.navigateBack({
								delta:1
							})
						})
					}else {
						$toast('修改失败，请稍后再试')
					}
				})
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
