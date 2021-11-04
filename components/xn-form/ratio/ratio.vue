<template>
	<view class="ratio">
		<view class="label">{{label}}</view>
		<view class="ratio-item">
			<view class="item">
				<view>
					<radio value="1" :checked="true" name="sex" />
				</view>
				<view>gg</view>
			</view>
			<view class="item">
				<view>
					<radio value="2" name="sex"/>
				</view>
				<view>mm</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		name: 'Ratio',
		props: {
			label: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style scoped>
	.ratio {
		width: 604rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
		line-height: 44rpx;
	}
	.item {
		display: flex;
		justify-content: space-around;
		flex-wrap: nowrap;
		width: fit-content;
	}
	.item:nth-child(n + 1) {
		margin-left: 24rpx;
	}
	.label {
		width: fit-content;
	}
	.ratio-item {
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-around;
	}
</style>
