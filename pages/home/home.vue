<template>
	<view class="content" v-if="isReady">
		<card-pet
			:petInfo="petInfo"
			@changePet="onChangePet"
		></card-pet>
		<tab-control 
			ref="tabcontrol"
			:currentIndex="currentIndex" 
			@tabClick="onTabClick" 
		></tab-control>
		<tab-control 
			v-if="showFixTabControl"
			class="fixed"
			:currentIndex="currentIndex" 
			@tabClick="onTabClick" 
		></tab-control>
		<card-content></card-content>
		<card-content></card-content>
		<card-content></card-content>
		<card-content></card-content>
		<xn-popup 
			:isShow="showPetList"
			title="切换宠物"
			:list="[{value: 'hhjh'}, {value: 'ooo'}]"
			@maskClick="onMaskClick"
		></xn-popup>
	</view>
</template>

<script>
	import { getPet } from '../../network/Pet.js';
	import {computed, ref, reactive} from 'vue';
	export default {
		data() {
			return {
				isReady: true,
				currentIndex: 0,
				showFixTabControl: false,
				petInfo:{},
				tabList:[],
				contentList:[],
				showPetList: false
			}
		},
		onLoad() {
			this.init();
		},
		setup(props, {slots, attrs, emit}) {
			console.log(333333333, props, slots, attrs, emit);
		},
		methods: {
			async init() {
				let result = await Promise.all([getPet()]);
				let {code, msg, data} = result[0] || {};
				if(code === 1) {
					if(Array.isArray(data) && data.length) {
						this.petInfo = data[data.length - 1];
					}
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
			onMaskClick() {
				this.showPetList = false;
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
