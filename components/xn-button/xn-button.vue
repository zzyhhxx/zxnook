<template>
	<view>
		<view
			class="btn"
			:class="{large: isLarge, normal: isNormal, small: isSmall, usable: isUsable, unusable: isUnusable}"
			@click="onClick()"
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
				default: 'normal'
			},
			type: {
				type: String,
				default: 'usable'
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
		},
		methods:{
			onClick() {
				this.$emit('btnClick')
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
		transition: all .2s ease-in-out;
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
		background-color: #C7CAD5;
	}
</style>
