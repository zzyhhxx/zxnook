<template>
    <view class="select">
		<view class="label">
			{{label}}
		</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :value="index" :range="array">
						<view class="uni-input">{{array[index]}}</view>
					</picker>
				</view>
			</view>
		</view>
    </view>
</template>
<script>
   export default {
	   name: 'Select',
	   props: {
		 label: {
			 type: String,
			 default: ''
		 }  
	   },
       data() {
           return {
               array: ['阿拉斯加', '中华田园犬', '萨摩耶', '金毛'],
			   index: 0
           }
       },
       methods: {
            bindPickerChange: function(e) {
			   console.log('picker发送选择改变，携带值为', e.target.value)
			   this.index = e.target.value
		    },
       }
   }
</script>
<style scoped>
    .select {
		width: 604rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
	}
	.uni-list {
		margin-left: 50rpx;
	}
</style>