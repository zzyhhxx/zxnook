<template>
	<view
		v-if="isReady"
		class="content" 
	>
		<card-pet
			:petInfo="petInfo"
			@changePet="onChangePet"
		></card-pet>
		<tab-control 
			ref="tabcontrol"
			:currentIndex="tabCurrentIndex" 
			@tabClick="onTabClick" 
		></tab-control>
		<tab-control 
			v-if="showFixTabControl"
			class="fixed"
			:currentIndex="tabCurrentIndex" 
			@tabClick="onTabClick" 
		></tab-control>
		<xn-popup 
			:isShow="showPetList"
			@maskClick="closePetList"
		>	
			<template v-slot:titleLeft>
				<view 
					class="new-add" 
					@click="addNewPet()"
				>
					<view class="icon-new-add">
						<image 
							src="../../static/image/icon/add.svg"
							class="new-add-img" 
						></image>
					</view>
					<text>添加</text>
				</view>
			</template>
			<template v-slot:titleCenter>
				<view class="title">
					切换宠物
				</view>
			</template>
			<template v-slot:titleRight>
				<image 
					src="../../static/image/icon/close.svg" 
					class="icon-close"
					@click="closePetList()"
				></image>
			</template>
			<template v-slot:list>
				<view
					v-for="(item, index) in petList" 
					:key="index"
					class="pet-item"
				>
						<view 
							class="pet-item-icon"
							@click="editPet(index)" 
						>
							<image 
								src="../../static/image/icon/edit.svg" 
								mode="" 
								class="icon-image"
							></image>
						</view>
						<view 
							class="pet-item-name" 
							:class="{active: index === petCurrentIndex}" 
							@click="onChoosePet(index)"
						>
							{{item.petName}}
						</view>
				</view>
			</template>
			
		</xn-popup>
		<card-content
			v-for="(item, index) in articleList"
			:key="index"
			:info="item"
		></card-content>
	</view>
</template>

<script>
	import { getPet, changePet } from '../../network/Pet.js';
	import { getArticleList } from '../../network/Article.js';
	export default {
		data() {
			return {
				isReady: true,
				
				showFixTabControl: false,
				tabList:[],
				tabCurrentIndex: 0,
				
				showPetList: false,
				petList:[],
				petCurrentIndex: 0,
				
				petInfo:{},
				contentList:[],
				articleList:[]
			}
		},
		onLoad() {
			this.init();
		},
		methods: {
			async init() {
				let result = await Promise.all([getPet(),getArticleList()]);
				let {code, msg, data} = result[0] || {};
				if(code === 1) {
					if(Array.isArray(data) && data.length) {
						data.forEach((item, index) => {
							if(item.isShow === 20) {
								console.log(item, index);
								this.petInfo = item;
								this.petCurrentIndex = index;
							}
						})
						this.petList = data;
					}
				}
				let articleData = result[1] ? result[1].data : {};
				if(articleData.list && articleData.list.data) {
					this.articleList = articleData.list.data;
				}
			},
			onTabClick(e) {
				this.tabCurrentIndex = e;
			},
			onPageScroll(e) {
				let tabControlTop = this.$refs.tabcontrol.$el.offsetTop;
				let showFixTabControl = e.scrollTop > tabControlTop;
				if(this.showFixTabControl !== showFixTabControl) {
					this.showFixTabControl = showFixTabControl;
				}
			},
			onChangePet() {
				this.showPetList = !this.showPetList;
			},
			onChoosePet(index) {
				this.petCurrentIndex = index;
				this.petInfo = this.petList[index];
				changePet({petId: this.petInfo.petId});
				this.closePetList();
			},
			closePetList() {
				this.showPetList = false;
			},
			addNewPet() {
				this.closePetList();
				uni.navigateTo({
					url: '/pages/addpet/addpet',
					fail: () => {
						uni.redirectTo({
							url: '/pages/addpet/addpet'
						});
					},
				});
			},
			editPet(index) {
				this.closePetList();
				const url = `/pages/addpet/addpet?isEdit=1&data=${JSON.stringify(this.petList[index])}`;
				uni.navigateTo({
					url,
					fail: () => {
						uni.redirectTo({
							url
						});
					},
				});
			}
		}
	}
</script>

<style scoped>
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}
	.title {
		font-size: 36rpx;
	}
	.fixed {
		position: fixed;
		z-index: 999;
		top: 88rpx;
		left: 0;
		right: 0;
		margin: 0 auto;
	}
	.pet-item {
		display: flex;
		height: 100rpx;
		line-height: 100rpx;
		width: 100%;
	}
	.pet-item-icon {
		margin-left: 20rpx;
		width: 48rpx;
		height: 48rpx;
		overflow: hidden;
		position: relative;
		align-self: center;
	}
	.pet-item-icon .icon-image {
		width: 48rpx;
		height: 48rpx;
		position: absolute;
		top: 0;
		left: 0;
	}
	.pet-item-name {
		flex: 1;
		margin-left: 40rpx;
	}
	.pet-item-name.active {
		color: var(--color-high-text);
	}
	.new-add {
		display: flex;
		line-height: 100rpx;
		font-size: 24rpx;
	}
	.new-add-img {
		width: 48rpx;
		height: 48rpx;
		position: absolute;
		top: 0;
		left: 0;
	}
	.icon-new-add {
		width: 48rpx;
		height: 48rpx;
		align-self: center;
		position: relative;
		margin-right: 10rpx;
	}
	.icon-close {
		width: 48rpx;
		height: 48rpx;
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
	}
</style>
