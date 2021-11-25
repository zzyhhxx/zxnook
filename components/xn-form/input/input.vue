<template>
	<view>
		<view class="item">
			<view class="label">{{label}}</view>
			<view class="desc">
				<input 
					:type="type" 
					:value="thisValue" 
					:placeholder="placeholder" 
					class="input" 
					@input="inputValue"
				/>
			</view>
		</view>
	</view>
</template>

<script>
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
				type: [String, Number],
				default: ''
			}
		},
		data() {
			return {
				value: ''
			}
		},
		computed:{
			thisValue() {
				return this.value || this.defaultValue;
			}
		},
		methods:{
			inputValue(e) {
				this.value = e.target.value;
				this.$emit('change', {name: this.propName, value: this.value});
			}
		}
	}
</script>

<style scoped>
	.item {
		width: 604rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.label {
		width: fit-content;
		color: #565D80;
	}
	.desc {
		flex: 1;
		margin-left: 50rpx;
		display: flex;
		justify-content: flex-end;
	}
	.desc .input {
		width: 50%;
		border-bottom: 1px solid #565D80;
		border-top: none;
		border-left: none;
		border-right: none;
		outline:none;
		box-shadow: none;
	}
	.input:focus {
		border: none;
	}
</style>
