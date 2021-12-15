<template>
	<view 
		class="card"
		@click="onClick()"
	>
		<view class="top-image">
			<image :src="info.petAvatar" mode="" class="image"></image>
		</view>
		<view class="pet-info">
			<view class="item">
				<view class="item-name">名字: </view>
				<view class="item-desc">{{info.petName}}</view>
			</view>
			<view class="item">
				<view class="item-name">年龄: </view>
				<view class="item-desc">{{age}}</view>
			</view>
			<view class="item">
				<view class="item-name">品种: </view>
				<view class="item-desc">{{breed}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getAge, navigateTo } from '../../common/common';
	export default {
		name:"CardSmallPic",
		props: {
			info: {
				type: Object,
				default() {
					return {};
				}
			},
			breeds: {
				type: Array,
				default() {
					return [];
				}
			}
		},
		computed: {
			age() {
				return getAge(this.info.petBirthday);
			},
			breed() {
				let breed = '';
				this.breeds.forEach(item => {
					if(item.articleId === this.info.petBreed) {
						breed = item.articleTitle; 
					}
				})
				return breed;
			}
		},
		methods: {
			onClick() {
				navigateTo(`/pages/petdetail/petdetail?petId=${this.info.petId}`)
			}
		}
	}
</script>

<style scoped>
	.card {
		width: 276rpx;
		height: 370rpx;
		background-color: #F8F8FB;
		border-radius: 24rpx;
	}
	.top-image {
		width: 236rpx;
		height: 188rpx;
		margin: 20rpx;
		border-radius: 30rpx;
		overflow: hidden;
	}
	.top-image .image {
		width: 236rpx;
		height: 188rpx;
	}
	.pet-info .item {
		display: flex;
		white-space: nowrap;
		font-size: 20rpx;
		margin-left: 20rpx;
		line-height: 40rpx;
	}
</style>
