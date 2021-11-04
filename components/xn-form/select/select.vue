<template>
    <view class="select">
		<view class="label">
			{{label}}
		</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :value="currentIndex" :range="list">
						<view class="uni-input">{{list[currentIndex]}}</view>
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
		   }
			
	   },
       data() {
           return {
           }
       },
       methods: {
            bindPickerChange: function(e) {
				this.$emit('select', e.target.value);
		    }
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