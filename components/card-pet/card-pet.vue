<template>
	<view class="card">
		<view v-if="hasPet">
			<view class="left">
				<image :src="petInfo.petAvatar" mode="" class="image"></image>
			</view>
			<view class="right">
				<view class="pet-name">{{petInfo.petName}}</view>
				<view class="pet-info">
					<view class="icon">
						<image src="../../static/pet.png" mode="" class="image"></image>
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
	import {getTimeText, timeFormat} from '../../common/common.js';
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
				console.log(555555, this.petInfo)
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
				let timestamp = Math.floor(new Date().getTime()/1000 - this.petInfo.petBirthday);
				let {year, month, day} = getTimeText(timestamp);
				console.log(getTimeText(timestamp), timeFormat('yyyy-MM-dd hh:mm:ss', new Date(this.petInfo.petBirthday * 1000)))
				if(year >= 1) {
					return `${year}岁${month}个月`;
				}
				else if(month >= 1) {
					return `${month}个月${day}天`;
				}
				else if(day > 1) {
					return `${day}天`;
				}
				else {
					return `0天`;
				}
			}
		},
		methods:{
			onClick() {
				uni.navigateTo({
					url: '/pages/addpet/addpet',
					fail: () => {
						uni.redirectTo({
							url: '/pages/addpet/addpet'
						});
					},
				});
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
	.add-btn {
		
	}
</style>
