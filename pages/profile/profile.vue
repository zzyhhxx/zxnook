<template>
	<view class="content">
		<view class="top-image">
			<navigator v-if="Object.keys(userInfo).length" url="../profile-setlist/profile-setlist">
				<image :src="userInfo.avatarUrl || '../../static/image/default/default-avatar.jpg'" mode="" class="image"></image>
			</navigator>
			<view v-else>
				<image src="../../static/image/default/default-avatar.jpg" mode="" class="image"></image>
			</view>
		</view>
		<view class="user-name">
			<navigator 
				v-if="!Object.keys(userInfo).length"
				url="../login/login"
			>去登录</navigator>
			 <text 
			 v-else
			>{{userInfo.nickName || userInfo.username}}</text>
		</view>
		<view class="tab-list">
			<view class="list-item active">
				<text class="item">我的宠物</text>
			</view>
			<view class="list-item">
				<text class="item">动态</text>
			</view>
			<view class="list-item">
				<text class="item">消息</text>
			</view>
		</view>
		<view class="content-list">
			<card-smallpic></card-smallpic>
			<card-smallpic></card-smallpic>
		</view>
	</view>
</template>

<script>
	import { getUser } from '../../network/Profile.js';
	import { $toast } from '../../common/common.js';
	export default {
		data() {
			return {
				userInfo: {}
			}
		},
		mounted() {
			this.init();
		},
		onShow() {
			this.init();
		},
		methods: {
			init() {
				getUser()
				.then(res => {
					let {code, msg, data = {}} = res || {};
					 if(code !== 1) {
						 $toast(msg);
					 }else {
						 this.userInfo = data.userInfo || {};
					 }
				})
			}
		}
	}
</script>

<style scoped>
	.top-image {
		width: 200rpx;
		height: 200rpx;
		border-radius: 52rpx;
		margin-top: 120rpx;
		overflow: hidden;
	}
	.top-image .image {
		width: 200rpx;
		height: 200rpx;
	}
	.user-name {
		font-size: 48rpx;
		margin-top: 74rpx;
	}
	.tab-list {
		width: 604rpx;
		display: flex;
		margin-top: 128rpx;
		justify-content: space-between;
	}
	.list-item {
		width: 148rpx;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 36rpx;
		text-align: center;
		color: #C7CAD5;
		border-radius: 16rpx;
		background-color: #F8F8FB;
	}
	.active {
		background: #FFF4F4;
		color: #F68685;
	}
	.content-list {
		margin-top: 40rpx;
		width: 604rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
</style>
