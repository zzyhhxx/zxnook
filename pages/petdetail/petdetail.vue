<template>
	<view class="content">
		<card-bigpic></card-bigpic>
		<card-pet 
			:petInfo="petInfo"
			:showChangePet="false"
		></card-pet>
		<view class="desc">
			<view class="title">描述</view>
			<view class="desc-content">{{ petInfo.petDesc }}</view>
		</view>
	</view>
</template>

<script>
	import { getPetById } from '../../network/Pet';
	import { $toast } from '../../common/common';
	export default {
		name: 'PetDetail',
		data() {
			return {
				petId: '',
				petInfo: {}
			}
		},
		onLoad(options) {
			let { petId } = options || {};
			this.petId = petId;
			this.init();
		},
		methods: {
			init() {
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
.desc {
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
</style>
