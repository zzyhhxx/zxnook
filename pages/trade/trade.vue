<template>
	<view class="content">
		<search 
			@search="onSearch"
		></search>
		<view class="list classify">
			<card-classify
				v-for="(item, index) in classify"
				:key="index"
				:image="item.image.filePath"
				:text="item.articleTitle"
			></card-classify>
		</view>
		<view class="list">
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
	import { getClassify, getTradeList } from '../../network/Trade';
	import { getBreed } from '../../network/Pet';
	export default {
		name: 'Trade',
		data() {
			return {
				classify: [],
				petList: [],
				petBreed: [],
				keywords: ''
			}
		},
		async onLoad() {
			getClassify()
			.then(res => {
				let { code, data, msg} = res || {};
				if(code === 1) {
					this.classify = data.list.data;
				}else {
					console.log(msg);
				}
			});
			let result = await getBreed();
			if(result) {
				this.petBreed.push(...result.data.list.cat.data);
				this.petBreed.push(...result.data.list.dog.data);
			}
		},
		onShow() {
			this.init();
		},
		methods: {
			init() {	
				getTradeList({
					keywords: this.keywords
				})
				.then(res => {
					let { code, data, msg} = res || {};
					if(code === 1) {
						this.petList = data;
					}else {
						console.log(msg);
					}
				})
				
			},
			onSearch(keywords) {
				getTradeList({
					keywords
				}).then(res => {
					let { code, data, msg} = res || {};
					if(code === 1) {
						this.petList = data;
						this.keywords = keywords;
					}else {
						console.log(msg);
					}
				})
			}
		}
	}
</script>

<style scoped>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #ffffff;
}
.list {
	width: 604rpx;
	display: flex;
	justify-content: space-between;
	align-content: space-between;
	flex-wrap: wrap;
	margin-top: 20rpx;
}
.classify {
	justify-content: flex-start;
}
</style>
