<template>
	<scroll-view class="tab-control" :scroll-x="true" :show-scrollbar="false">
		<view class="tab-content">
			<view 
				class="tab-item"
				:class="{active: currentIndex === index}"
				v-for="(item, index) in list" 
				:key="index"
				@click="tabClick(index)"
				>{{item.name}}</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		name:"tab-control",
		props: {
			list: {
				type: Array,
				default() {
					return []
				}
			},
			currentIndex: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			tabClick(index) {
				this.$emit('tabClick', index);
			}
		}
	}
</script>

<style scoped>
 .tab-control {
	 height: 88rpx;
	 width: 604rpx;
	 background-color: #ffffff;
 }
 .tab-content {
	 display: flex;
	 justify-content: space-around;
	 flex-wrap: nowrap;
	 width: fit-content;
 }
 .tab-item {
	 width: 100rpx;
	 white-space: nowrap;
	 line-height: 98rpx;
 }
 .active {
	 color: var(--color-high-text);
 }
</style>
