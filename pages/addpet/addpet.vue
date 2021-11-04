<template>
	<view class="content">
		<xn-upload class="form-item" label="宠物头像"></xn-upload>
		<xn-input class="form-item" label="宠物名字" placeholder="请输入" @change="onChange"></xn-input>
		<xn-ratio class="form-item" label="宠物性别"></xn-ratio>
		<xn-select class="form-item" label="宠物类型"></xn-select>
		<xn-select class="form-item" label="宠物品种"></xn-select>
		<xn-date class="form-item" label="出生日期"></xn-date>
		<xn-date class="form-item" label="到家日期"></xn-date>
		<xn-ratio class="form-item" label="是否绝育"></xn-ratio>
		<xn-button
			text="保存"
			class="btn"
			size="large"
			:type="buttonStatus"
			@btnClick="submit"
		>
		</xn-button>
	</view>
</template>

<script>
	import xnUpload from '../../components/xn-form/upload/upload.vue';
	import xnInput from '../../components/xn-form/input/input.vue';
	import xnRatio from '../../components/xn-form/ratio/ratio.vue';
	import xnDate from '../../components/xn-form/date/date.vue';
	import xnSelect from '../../components/xn-form/select/select.vue';
	export default {
		data() {
			return {
				buttonStatus: 'usable'
			}
		},
		components: {
			xnUpload,
			xnInput,
			xnRatio,
			xnDate,
			xnSelect
		},
		methods: {
			onChange(e) {
				console.log(11111, e)
			},
			submit() {
				this.buttonStatus = 'unusable';
				setTimeout(() => {
					this.buttonStatus = 'usable';
				}, 1000)
			}
		}
	}
</script>

<style scoped>
	.btn {
		margin-top: 100rpx;
	}
	.form-item:nth-child(n + 1) {
		margin-top: 50rpx;
	}
</style>
