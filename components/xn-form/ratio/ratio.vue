<template>
	<view class="ratio">
		<view class="label">{{label}}</view>
		<view class="ratio-item">
			<template v-if="list.length">
				<view
					class="item"
					v-for="(item, index) in list"
					:key="index"
					@click="btnClick(index)"
				>
					<view>
						<radio :value="item.value" :checked="index === currentIndex" />
					</view>
					<view>{{item.name}}</view>
				</view>
			</template>
			
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
			},
			list: {
				type: Array,
				default() {
					return []
				}
			},
			currentIndex: {
				type: Number,
				default: 0
			},
			propName: {
				type: String,
				default: ''
			}
		},
		methods: {
			btnClick(index) {
				this.$emit('btnClick', {name: this.propName, value: index});
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
