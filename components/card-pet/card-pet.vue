<template>
	<view class="card">
		<view 
			v-if="hasPet" 
			class="card-content"
		>
			<view class="left">
				<image 
					:src="petInfo.petAvatar" 
					mode="" 
					class="image"
				></image>
			</view>
			<view class="right">
				<view class="pet-name">{{petInfo.petName}}</view>
				<view class="pet-info">
					<view class="icon">
						<image 
							src="../../static/pet.png" 
							mode="" 
							class="image"
						></image>
					</view>
					<view class="info-name">性别：</view>
					<view class="info-desc">{{gender}}</view>
				</view>
				<view class="pet-info">
					<view class="icon">
						<image src="../../static/address.png" mode="" class="image"></image>
					</view>
					<view class="info-name">年龄：</view>
					<view class="info-desc">{{age}}</view>
				</view>
			</view>
			<view class="change-pet" @click="changePet()">
				切换宠物
			</view>
		</view>
		<view v-else>
			<xn-button
				class="btn"
				text="添加宠物"
				@btnClick="onClick"
			></xn-button>
		</view>
		
	</view>
</template>

<script>
	import { getAge, $toast } from '../../common/common.js';
	import { isLogin } from '../../common/user';
	export default {
		name:"card-pet",
		props: {
			petInfo: {
				type: Object,
				default() {
					return {};
				}
			}
		},
		data() {
			return {
				
			};
		},
		computed:{
			hasPet() {
				return Object.keys(this.petInfo).length;
			},
			gender() {
				return this.petInfo.petGender === 1 
					? 'GG' 
					: this.petInfo.petGender === 2
					? 'MM'
					: ''
			},
			age() {
				return getAge(this.petInfo.petBirthday);
			}
		},
		methods:{
			onClick() {
				let url = '/pages/addpet/addpet';
				let msg = '';
				if(!isLogin()) {
					url = '/pages/login/login';
					msg = '请先登录';
				}
				$toast(msg).then(() => {
					uni.navigateTo({
						url,
						fail: () => {
							uni.redirectTo({
								url
							});
						},
					});
				})
			},
			changePet() {
				this.$emit('changePet');
			}
		}
	}
</script>

<style scoped>
	.card {
		width: 604rpx;
		height: 276rpx;
		background: #F8F8FB;
		border-radius: 36rpx;
		display: flex;
		margin-top: 20rpx;
		position: relative;
	}
	.btn {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.left {
		width: 172rpx;
		height: 172rpx;
		border-radius: 38rpx;
		overflow: hidden;
		margin-left: 36rpx;
		margin-top: 52rpx;
	}
	.left .image {
		width: 172rpx;
		height: 172rpx;
	}
	.icon {
		width: 50rpx;
		height: 50rpx;
		background: #D9E5FB;
		border-radius: 50%;
		position: relative;
	}
	.icon .image {
		width: 28rpx;
		height: 24rpx;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.right {
		flex: 1;
		margin-left: 36rpx;
		margin-top: 52rpx;
	}
	.pet-info {
		display: flex;
		font-size: 24rpx;
		color: #565D80;
		line-height: 50rpx;
	}
	.pet-info:nth-child(2) {
		margin-top: 16rpx;
	}
	.pet-info:nth-child(n+3) {
		margin-top: 10rpx;
	}
	.info-name {
		margin-left: 22rpx;
	}
	.pet-name {
		font-size: 44rpx;
	}
	.change-pet {
		position: absolute;
		top: 20rpx;
		right: 20rpx;
		font-size: 24rpx;
	}
</style>
