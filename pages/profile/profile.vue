<template>
	<view class="content">
		<view class="top-image">
			<navigator 
				v-if="Object.keys(userInfo).length" 
				url="../profile-setlist/profile-setlist"
			>
				<image 
					:src="userInfo.avatarUrl || '../../static/image/default/default-avatar.jpg'" 
					mode="" 
					class="image"
				></image>
			</navigator>
			<view v-else>
				<image 
					src="../../static/image/default/default-avatar.jpg" 
					mode="" 
					class="image"
				></image>
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
		</view>
		<view class="content-list">
			<card-smallpic
				v-for="(item, index) in petList"
				:key="index"
				:info="item"
				:breeds="petBreed"
			></card-smallpic>
		</view>
	</view>
</template>

<script>
	import { getUser } from '../../network/Profile.js';
	import { getPet, getBreed } from '../../network/Pet.js';
	export default {
		data() {
			return {
				userInfo: {},
				petList: [],
				petBreed: []
			}
		},
		async onLoad() {
			let result = await getBreed();
			if(result) {
				this.petBreed.push(...result.data.list.cat.data);
				this.petBreed.push(...result.data.list.dog.data);
			}
			console.log(111111, this.petBreed)
		},
		onShow() {
			this.init();
		},
		methods: {
			async init() {
				let result = await Promise.all([getUser(), getPet()]);
				this.userInfo = result[0] ? result[0].data.userInfo : {};
				this.petList = result[1] ? result[1].data : [];
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
