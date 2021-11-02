<template>
	<view class="content">
		<search></search>
		<view class="list">
			<card-classify></card-classify>
			<card-classify></card-classify>
			<card-classify></card-classify>
		</view>
		<view class="list">
			<card-smallpic></card-smallpic>
			<card-smallpic></card-smallpic>
			<card-smallpic></card-smallpic>
			<card-smallpic></card-smallpic>
			<card-smallpic></card-smallpic>
			<card-smallpic></card-smallpic>
			<card-smallpic></card-smallpic>
			<card-smallpic></card-smallpic>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
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
}
</style>
