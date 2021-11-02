<template>
	<view>
		<view
			class="btn"
			:class="{large: isLarge, normal: isNormal, small: isSmall, usable: isUsable, unusable: isUnusable}"
		>
			{{text}}
		</view>
	</view>
</template>

<script>
	export default {
		name:"my-button",
		props: {
			text: {
				type: String,
				default: ''
			},
			size: {
				type: String,
				default: ''
			},
			type: {
				type: String,
				default: ''
			}
		},
		computed: {
			isLarge() {
				return this.size === 'large';
			},
			isNormal() {
				return this.size === 'normal';
			},
			isSmall() {
				return this.size === 'small';
			},
			isUsable() {
				return this.type === 'usable';
			},
			isUnusable() {
				return this.type === 'unusable';
			}
		}
	}
</script>

<style scoped>
	.btn {
		color: #fff;
		border-radius: 10rpx;
		font-size: 36rpx;
		text-align: center;
	}
	.large {
		width: 604rpx;
		height: 102rpx;
		line-height: 102rpx;
	}
	.normal {
		width: 292rpx;
		height: 102rpx;
		line-height: 102rpx;
	}
	.small {
		width: 100rpx;
		height: 20rpx;
	}
	.usable {
		background-color: var(--color-tint);
	}
	.unusable {
		background-color: gray;
	}
</style>
