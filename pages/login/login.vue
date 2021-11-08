<template>
	<view class="content">
		<xn-input class="item" label="用户名"></xn-input>
		<xn-input class="item" label="密码"></xn-input>
		<view class="forgot-psw">
			<navigator url="../forgotpsw/forgotpsw">忘记密码?</navigator>
			</view>
		<xn-button class="item" text="登录" size="large"></xn-button>
		<view class="register">
			<text>没有账号?</text><navigator url="../register/register" class="to-register">去注册</navigator>
		</view>
	</view>
</template>

<script>
	import XnInput from '../../components/xn-form/input/input-large.vue';
	export default {
		name: 'Login',
		props: {
			
		},
		components: {
			XnInput
		},
		data() {
			return {
				
			}
		},
		methods: {
			
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
</style>
