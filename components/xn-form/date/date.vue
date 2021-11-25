<template>
    <view class="date">
		<view class="label">
			{{label}}
		</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-db">
					<picker 
						mode="date" 
						:value="date" 
						:start="startDate" 
						:end="endDate" 
						@change="bindDateChange"
					>
						<view class="uni-input">{{date}}</view>
					</picker>
				</view>
			</view>
		</view>
    </view>
</template>
<script>
   export default {
	   name: 'Date',
	   props: {
		   label: {
			   type: String,
			   default: ''
		   },
		   propName: {
			   type: String,
			   default: ''
		   },
		   defaultDate: {
			   type: String,
			   default: ''
		   }
	   },
       data() {
           const currentDate = this.getDate({
               format: true
           })
           return {
               date: currentDate
           }
       },
       computed: {
           startDate() {
               return this.getDate('start');
           },
           endDate() {
               return this.getDate('end');
           }
       },
	   mounted() {
		   console.log(5555555, this.defaultDate);
		   if(this.defaultDate) {
			   this.date = this.defaultDate;
		   }
		   this.$emit('change', {name: this.propName, value: this.date});
	   },
       methods: {
           bindDateChange: function(e) {
               this.date = e.target.value;
			   this.$emit('change', {name: this.propName, value: this.date});
           },
           getDate(type) {
               const date = new Date();
               let year = date.getFullYear();
               let month = date.getMonth() + 1;
               let day = date.getDate();
   
               if (type === 'start') {
                   year = year - 60;
               } else if (type === 'end') {
                   year = year + 2;
               }
               month = month > 9 ? month : '0' + month;
               day = day > 9 ? day : '0' + day;
               return `${year}-${month}-${day}`;
           }
       }
   }
</script>
<style scoped>
    .date {
		width: 604rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
	}
	.uni-list {
		margin-left: 50rpx;
	}
</style>