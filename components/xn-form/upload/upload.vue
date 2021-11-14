<template>
	<view>
		<view class="item">
			<view class="label">{{label}}</view>
			<view 
				v-show="!imgsrc"
				class="desc bgcolor"
				@click="onClick()"
			>
				<image src="../../../static/image/icon/camera.png" mode="" class="image"></image>
			</view>
			<view
				v-show="imgsrc"
				class="desc"
				@click="onClick()"
			>
				<image :src="imgsrc" mode="" class="dimage"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import {uploadFile} from '../../../common/common.js';
	export default {
		name: 'Input',
		props: {
			label: {
				type: String,
				default: ''
			},
			placeholder: {
				type: String,
				default: ''
			},
			type: {
				type: String,
				default: 'text'
			},
			propName: {
				type: String,
				default: ''
			},
			defaultValue: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				editUrl: ''
			}
		},
		computed: {
			imgsrc() {
				return this.editUrl || this.defaultValue;
			}
		},
		methods:{
			onClick() {
				uploadFile().then(res => {
					if(Array.isArray(res) && res.length) {
						this.editUrl = res[0];
						this.$emit('change', {name: this.propName, value: this.editUrl});
					}
				})
			}
		}
	}
</script>

<style scoped>
	.item {
		width: 604rpx;
		height: 102rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.label {
		width: fit-content;
		color: #565D80;
		line-height: 102rpx;
	}
	.desc {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		position: relative;
		overflow: hidden;
	}
	.bgcolor {
		background-color: #666666;
	}
	.desc .image {
		position: absolute;
		width: 50rpx;
		height: 50rpx;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.desc .dimage {
		width: 100rpx;
		height: 100rpx;
	}
</style>
