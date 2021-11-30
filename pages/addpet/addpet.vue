<template>
	<view class="content">
		<xn-upload 
			class="form-item"
			label="宠物头像"
			propName="petAvatar"
			:defaultValue="petAvatar"
			@change="onChange"
		></xn-upload>
		<xn-input 
			class="form-item" 
			label="宠物名字" 
			placeholder="请输入" 
			propName="petName"
			:defaultValue="petName"
			@change="onChange"
		></xn-input>
		<xn-ratio 
			class="form-item" 
			label="宠物性别"
			propName="petGender"
			:list="genderRatio"
			:currentIndex="radioIndex"
			@btnClick="onChange"
		></xn-ratio>
		<xn-select 
			class="form-item" 
			label="宠物类型"
			propName="petType"
			:currentIndex="typeIndex"
			:list="typeListName"
			@select="onChange"
		></xn-select>
		<xn-select 
			class="form-item" 
			label="宠物品种"
			propName="petBreed"
			:currentIndex="breedIndex"
			:list="breedListName"
			@select="onChange"
		></xn-select>
		<xn-date 
			class="form-item" 
			label="出生日期"
			propName="birthday"
			:defaultDate="birthday"
			@change="onChange"
		></xn-date>
		<xn-date 
			class="form-item" 
			label="到家日期"
			propName="homeDay"
			:defaultDate="homeDay"
			@change="onChange"
		></xn-date>
		<xn-ratio 
			class="form-item" 
			label="是否绝育"
			propName="isSterilisation"
			:list="sterilisationList"
			:currentIndex="sterilisationIndex"
			@btnClick="onChange"
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
	import XnUpload from '../../components/xn-form/upload/upload.vue';
	import XnInput from '../../components/xn-form/input/input.vue';
	import XnRatio from '../../components/xn-form/ratio/ratio.vue';
	import XnDate from '../../components/xn-form/date/date.vue';
	import XnSelect from '../../components/xn-form/select/select.vue';
	
	import { addPet, getType, getBreed } from '../../network/Pet.js';
	import { $toast, timeFormat } from '../../common/common.js';
	import { CONFIG } from '../../common/config.js';
	export default {
		name: 'AddPet',
		data() {
			return {
				buttonStatus: 'usable',
				
				radioIndex: 0,
				genderRatio: [
					{value: 1, name: 'GG'}, 
					{value: 2, name: 'MM'}
					],
				
				typeIndex: 0,
				typeList: [],
				
				breedIndex: 0,
				allBreedList: {
					dog: [],
					cat: []
				},
				breedList: [],
				
				sterilisationIndex: 0,
				sterilisationList: [
					{value: 1, name: '未绝育'}, 
					{value: 2, name: '已绝育'}
					],
				
				petAvatar: '',
				petName: '',
				petGender: '',
				petType: '',
				petBreed: '',
				birthday: '',
				homeDay: '',
				isSterilisation: ''
			}
		},
		components: {
			XnUpload,
			XnInput,
			XnRatio,
			XnDate,
			XnSelect
		},
		async onLoad(options) {
			let {isEdit, data} = options;
			await this.init();
			if(isEdit === '1' && data) {
				let petData = JSON.parse(data);
				console.log(11111, petData);
				if(Object.keys(petData).length) {
					this.petId = petData.petId;
					this.petAvatar = petData.petAvatar;
					this.petName = petData.petName;
					this.birthday = timeFormat('yyyy-MM-dd', new Date(petData.petBirthday * 1000));
					this.homeDay = timeFormat('yyyy-MM-dd', new Date(petData.petHomday * 1000));
					this.setValue(this.genderRatio, petData, 'petGender', 'radioIndex');
					this.setValue(this.sterilisationList, petData, 'isSterilisation', 'sterilisationIndex');
					this.setValue(this.typeList, petData, 'petType', 'typeIndex');
					this.setValue(this.allBreedList.cat, petData, 'petBreed', 'breedIndex');
					this.setValue(this.allBreedList.dog, petData, 'petBreed', 'breedIndex');
				}
			}
			
			this.setConfigs();
			let breedList = JSON.parse(JSON.stringify(this.breedList));
			this.petBreed = breedList[this.breedIndex].value;
			this.isSterilisation = this.sterilisationList[this.sterilisationIndex].value;
			this.petGender = this.genderRatio[this.radioIndex].value;
		},
		computed:{
			typeListName() {
				return this.typeList.map(item => {
					return item.name;
				})
			},
			breedListName() {
				return this.breedList.map(item => {
					return item.name;
				})
			}
		},
		watch:{
			typeIndex() {
				this.setConfigs();
				this.breedIndex = 0;
			}
		},
		methods: {
			async init() {
				let result = await Promise.all([getType(), getBreed()]);
				let {code = 0, data = {}} = result[0] || {};
				if(code === 1) {
					data.list.data.forEach(item => {
						this.typeList.push({value: item.articleId, name: item.articleTitle});
					})
				}
				code = result[1] ? result[1].code : 0;
				data = result[1] ? result[1].data : {};
				if(code === 1) {
					data.list.cat.data.forEach(item => {
						this.allBreedList.cat.push({value: item.articleId, name: item.articleTitle});
					})
					data.list.dog.data.forEach(item => {
						this.allBreedList.dog.push({value: item.articleId, name: item.articleTitle});
					})
				}
			},
			onChange(e) {
				let {name, value} = e || {};
				if(name === 'isSterilisation') {
					this.sterilisationIndex = value;
					this.isSterilisation = this.sterilisationList[value].value;
				}else if(name === 'petGender') {
					this.radioIndex = value;
					this.petGender = this.genderRatio[value].value;
				}else if(name === 'petType') {
					this.typeIndex = value;
					this.petType = this.typeList[value].value;
				}else if(name === 'petBreed') {
					this.breedIndex = value;
					this.petBreed = this.breedList[value].value;
				}else {
					this[name] = value;
				}
			},		
			verification() {
				if(!this.petName) {
					$toast('宠物名不能为空');
				}
				let data = {
					petAvatar: this.petAvatar,
					petName: this.petName,
					petGender: this.petGender,
					petType: this.petType,
					petBreed: this.petBreed,
					petBirthday: this.birthday,
					petHomday: this.homeDay,
					isSterilisation: this.isSterilisation
				}
				if(this.petId) {
					data.petId = this.petId;
				}
				return data;
			},
			submit() {
				let data = this.verification();
				console.log(data);
				if(!data) {
					return;
				}
				this.buttonStatus = 'unusable';
				addPet({petData: data})
				.then(res => {
					let { code, msg } = res || {};
					if(code === 1) {
						$toast('保存成功').then(() => {
							uni.navigateBack({
								delta: 1
							});
						})
					}else {
						$toast(msg);
					}
				})
				.finally(() => {
					this.buttonStatus = 'usable';
				})
			},
			setValue(arr, data, dataPropName, thisPropName) {
				Array.isArray(arr) && arr.forEach((item, index) => {
					if(item.value === data[dataPropName]){
						this[thisPropName] = index;
					}
				})
			},
			setConfigs() {
				let typeList = JSON.parse(JSON.stringify(this.typeList));
				let allBreedList = JSON.parse(JSON.stringify(this.allBreedList));
				this.petType = typeList[this.typeIndex].value;
				this.breedList = this.petType === CONFIG.PETTYPE.CAT 
									? allBreedList.cat
									: this.petType === CONFIG.PETTYPE.DOG
									? allBreedList.dog
									: [];
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
