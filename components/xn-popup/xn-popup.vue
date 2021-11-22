<template>
	<view>
		<view v-if="isShow" class="mask" @click="maskClick()" @touchmove.prevent></view>
		<view class="propup" :class="{show: isShow}" @touchmove.prevent>
			<view class="prop-title">{{title}}</view>
			<scroll-view class="prop-list" scroll-y="true">
				<view
					v-for="(item, index) in list"
					:key="index"
					class="item"
				>
				{{item.value}}
				</view>
				<view
					v-for="(item, index) in list"
					:key="index"
					class="item"
				>
				{{item.value}}
				</view>
				<view
					v-for="(item, index) in list"
					:key="index"
					class="item"
				>
				{{item.value}}
				</view>
				<view
					v-for="(item, index) in list"
					:key="index"
					class="item"
				>
				{{item.value}}
				</view>
				<view
					v-for="(item, index) in list"
					:key="index"
					class="item"
				>
				{{item.value}}
				</view>
				<view
					v-for="(item, index) in list"
					:key="index"
					class="item"
				>
				{{item.value}}
				</view>
				<view
					v-for="(item, index) in list"
					:key="index"
					class="item"
				>
				{{item.value}}
				</view>
				<view
					v-for="(item, index) in list"
					:key="index"
					class="item"
				>
				{{item.value}}
				</view>
				<view
					v-for="(item, index) in list"
					:key="index"
					class="item"
				>
				{{item.value}}
				</view>
				<view
					v-for="(item, index) in list"
					:key="index"
					class="item"
				>
				{{item.value}}
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"xn-popup",
		props: {
			isShow: {
				type: Boolean,
				default: false
			},
			title: {
				type: String,
				default: ''
			},
			list: {
				type: Array,
				default() {
					return []
				}
			}
		},
		methods:{
			maskClick() {
				this.$emit('maskClick');
			}
		}
	}
</script>

<style scoped>
	.propup {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		z-index: 999;
		background-color: #ffffff;
		height: 0;
		transition: all ease-in-out .3s; 
	}
	.show {
		min-height: 400rpx;
		max-height: 600rpx;
	}
	.mask {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		background-color: #000000;
		opacity: .5;
	}
	.prop-title {
		width: 100%;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
	}
</style>
