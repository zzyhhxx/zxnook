<template>
	<view class="content" v-if="isReady">
		<card-pet
			:petInfo="petInfo"
		></card-pet>
		<tab-control 
			ref="tabcontrol"
			:currentIndex="currentIndex" 
			:list="tabList"
			@tabClick="onTabClick"  
		></tab-control>
		<tab-control 
			v-if="showFixTabControl"
			class="fixed"
			:currentIndex="currentIndex"
			:list="tabList"
			@tabClick="onTabClick" 
		></tab-control>
		
		<card-content
			v-for="(item, index) in articleList"
			:key="index"
			:info="item"
		></card-content>
	</view>
</template>

<script>
	import { getPet } from '../../network/Pet.js';
	import { getTabList } from '../../network/Home.js';
	import { getArticleList } from '../../network/Article.js';
	
	import { $toast } from '../../common/common.js';
	export default {
		data() {
			return {
				isReady: true,
				currentIndex: 0,
				showFixTabControl: false,
				tabList:[],
				currentIndex: 0,
				
				showPetList: false,
				petList:[],
				petCurrentIndex: 0,
				
				petInfo:{},
				tabList:[],
				contentList:[],
				articleList:[]
			}
		},
		async onLoad() {
			let result = await getTabList();
			let tabData = result ? result.data.list.data : [];
			tabData.forEach((item, index) => {
				this.tabList.push({
					name: item.articleTitle, 
					value: item.articleContent.replace(/[^0-9]/ig,'')
				});
			})
			this.getArticleList();
		},
		onShow() {
			this.init();
		},
		watch: {
			currentIndex() {
				this.getArticleList();
			}
		},
		methods: {
			async init() {
				let result = await Promise.all([getPet()]);
				let {code, msg, data} = result[0] || {};
				if(code === 1) {
					if(Array.isArray(data) && data.length) {
						this.petInfo = data[data.length - 1];
						this.petList = data;
					}
				}else {
					$toast(msg);
				}
			},
			onTabClick(e) {
				this.currentIndex = e;
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
			},
			getArticleList() {
				let tabList = JSON.parse(JSON.stringify(this.tabList));
				tabList.length && getArticleList({
					categoryId: tabList[this.currentIndex].value
				}).then(res => {
					let {code, data, msg} = res || {};
					if(code === 1) {
						this.articleList = data.list.data;
					}else {
						$toast(msg);
					}
				})
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
		color: #8f8f94;
	}
	.fixed {
		position: fixed;
		z-index: 999;
		top: 88rpx;
		left: 0;
		right: 0;
		margin: 0 auto;
	}
</style>
