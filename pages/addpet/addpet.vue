<template>
	<view class="content">
		<xn-upload class="form-item" label="宠物头像"></xn-upload>
		<xn-input 
			class="form-item" 
			label="宠物名字" 
			placeholder="请输入" 
			@change="onPetNameChange"
		></xn-input>
		<xn-ratio 
			class="form-item" 
			label="宠物性别"
			:list="genderRatio"
			:currentIndex="radioIndex"
			@btnClick="onGenderChange"
		></xn-ratio>
		<xn-select 
			class="form-item" 
			label="宠物类型"
			:currentIndex="typeIndex"
			:list="typeList"
			@select="onTypeChange"
		></xn-select>
		<xn-select 
			class="form-item" 
			label="宠物品种"
			:currentIndex="breedIndex"
			:list="breedList"
			@select="onBreedChange"
		></xn-select>
		<xn-date 
			class="form-item" 
			label="出生日期"
			@change="onBirthdayChange"
		></xn-date>
		<xn-date 
			class="form-item" 
			label="到家日期"
			@change="onHomeDayChange"
		></xn-date>
		<xn-ratio 
			class="form-item" 
			label="是否绝育"
			:list="sterilisationList"
			:currentIndex="sterilisationIndex"
			@btnClick="onSterChange"
		></xn-ratio>
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
				buttonStatus: 'usable',
				radioIndex: 0,
				genderRatio: [{value: '1', name: 'GG'}, {value: '2', name: 'MM'},],
				typeIndex: 0,
				typeList: ['猫猫', '狗狗', '兔兔', '鸟鸟'],
				breedIndex: 0,
				breedList: ['中华田园犬', '萨摩耶', '金毛', '阿拉斯加', '牧羊犬'],
				sterilisationIndex: 0,
				sterilisationList: [{value: '1', name: '未绝育'}, {value: '2', name: '已绝育'},],
				
				petAvatar: '',
				petName: '',
				petGender: 1,
				petType: '',
				petBreed: 1,
				birthday: '',
				homeDay: '',
				isSterilisation: ''
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
			onPetNameChange(name) {
				this.petName = name;
			},
			onGenderChange(index) {
				this.radioIndex = index;
				this.petGender = this.genderRatio[index].value;
			},
			onTypeChange(index) {
				this.typeIndex = index;
				this.petType = this.typeList[index];
			},
			onBreedChange(index) {
				this.breedIndex = index;
				this.petBreed = this.breedList[index];
			},
			onBirthdayChange(date) {
				this.birthday = date;
			},
			onHomeDayChange(date) {
				this.homeDay = date;
			},
			onSterChange(index) {
				this.sterilisationIndex = index;
				this.isSterilisation = this.sterilisationList[index].value;
			},
			verification() {
				if(!this.petName) {
					uni.showToast({
					    title: '宠物名不能为空哦～',
					    duration: 1500
					});
				}
				let data = {
					petAvatar: this.petAvatar,
					petName: this.petName,
					petGender: this.petGender,
					petType: this.petType,
					petBreed: this.petBreed,
					birthday: this.birthday,
					homeDay: this.homeDay,
					isSterilisation: this.isSterilisation
				}
				console.log(data);
			},
			submit() {
				if(!this.verification()) {
					return;
				}
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
