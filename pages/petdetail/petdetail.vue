<template>
	<view class="content">
		<card-pet 
			:petInfo="petInfo"
			:showChangePet="false"
		></card-pet>
		<view class="other-info">
			<view class="info-item">
				<view class="info-item-icon">
					<image src="../../static/image/icon/breed.svg" class="item-icon"></image>
				</view>
				<view class="info-item-key">品种：</view>
				<view class="info-item-value">{{ breed }}</view>
			</view>
			<view class="info-item">
				<view class="info-item-icon">
					<image src="../../static/image/icon/sterilisation.svg" class="item-icon"></image>
				</view>
				<view class="info-item-key">是否绝育：</view>
				<view class="info-item-value">{{ isSterilisation }}</view>
			</view>
			<view class="info-item">
				<view class="info-item-icon">
					<image src="../../static/image/icon/birthday.svg" class="item-icon"></image>
				</view>
				<view class="info-item-key">生日：</view>
				<view class="info-item-value">{{ birthday }}</view>
			</view>
			<view class="info-item">
				<view class="info-item-icon">
					<image src="../../static/image/icon/date.svg" class="item-icon"></image>
				</view>
				<view class="info-item-key">到家：</view>
				<view class="info-item-value">{{ homeday }}</view>
			</view>
			<view 
				v-if="tradeStatus"
				class="info-item"
			>
				<view class="info-item-icon">
					<image src="../../static/image/icon/trade.svg" class="item-icon icon-trade"></image>
				</view>
				<view class="info-item-key">领养状态：</view>
				<view class="info-item-value">{{ tradeStatus }}</view>
			</view>
			
		</view>
		<view class="desc">
			<view class="title">描述</view>
			<view class="desc-content">{{ petInfo.petDesc }}</view>
		</view>
	</view>
</template>

<script>
	import { getPetById, getBreed } from '../../network/Pet';
	import { $toast, timeFormat } from '../../common/common';
	export default {
		name: 'PetDetail',
		data() {
			return {
				petId: '',
				petInfo: {},
				petBreed: []
			}
		},
		onLoad(options) {
			let { petId } = options || {};
			this.petId = petId;
			this.init();
		},
		computed: {
			breed() {
				let breed = '';
				this.petBreed.forEach(item => {
					if(item.articleId === this.petInfo.petBreed) {
						breed = item.articleTitle; 
					}
				})
				return breed;
			},
			birthday() {
				return timeFormat('yyyy-MM-dd', new Date(this.petInfo.petBirthday * 1000))
			},
			homeday() {
				return timeFormat('yyyy-MM-dd', new Date(this.petInfo.petHomday * 1000))
			},
			isSterilisation() {
				return this.petInfo.isSterilisation === 2 ? '已绝育' : '未绝育';
			},
			tradeStatus() {
				return this.petInfo.tradeStatus === 20 
					? '待领养' 
					: this.petInfo.tradeStatus === 30
					? '已领养'
					: '';
			}	
		},
		methods: {
			async init() {
				let result = await getBreed();
				if(result) {
					this.petBreed.push(...result.data.list.cat.data);
					this.petBreed.push(...result.data.list.dog.data);
				}
				this.petId && getPetById({
					petId: this.petId
				}).then(res => {
					let { code, msg, data } = res || {};
					if(code === 1) {
						this.petInfo = data;
					}else {
						$toast(msg);
					}
				})
			}
		}
	}
</script>

<style scoped>
.desc, .other-info {
	width: 604rpx;
	height: 276rpx;
	background: #F8F8FB;
	border-radius: 36rpx;
	margin-top: 20rpx;
	position: relative;
	padding: 16rpx;
}
.desc .title {
	font-size: 36rpx;
	font-weight: 500;
}
.other-info {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	align-content: flex-start;
}
.info-item {
	display: flex;
	line-height: 50rpx;
	font-size: 24rpx;
	width: 50%;
}
.info-item:nth-child(n + 3) {
	margin-top: 24rpx;
}
.info-item-icon {
	width: 50rpx;
    height: 50rpx;
    background: #D9E5FB;
    border-radius: 50%;
    position: relative;
}
.item-icon {
	width: 28rpx;
    height: 24rpx;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.icon-trade {
	width: 36rpx;
	height: 32rpx;
}
.info-item-key {
	margin-left: 22rpx;
}
</style>
