<template>
	<view class="content">
		<xn-upload 
			class="form-item" l
			abel="宠物头像"
			propName="petAvatar"
		></xn-upload>
		<xn-input 
			class="form-item" 
			label="宠物名字" 
			placeholder="请输入" 
			propName="petName"
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
			:list="typeList"
			@select="onChange"
		></xn-select>
		<xn-select 
			class="form-item" 
			label="宠物品种"
			propName="petBreed"
			:currentIndex="breedIndex"
			:list="breedList"
			@select="onChange"
		></xn-select>
		<xn-date 
			class="form-item" 
			label="出生日期"
			propName="birthday"
			@change="onChange"
		></xn-date>
		<xn-date 
			class="form-item" 
			label="到家日期"
			propName="homeDay"
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
	import xnUpload from '../../components/xn-form/upload/upload.vue';
	import xnInput from '../../components/xn-form/input/input.vue';
	import xnRatio from '../../components/xn-form/ratio/ratio.vue';
	import xnDate from '../../components/xn-form/date/date.vue';
	import xnSelect from '../../components/xn-form/select/select.vue';
	
	import { addPet, getType, getBreed } from '../../network/Pet.js';
	import { $toast } from '../../common/common.js';
	export default {
		name: 'AddPet',
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
				petGender: '',
				petType: '',
				petBreed: '',
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
		created() {
			this.init();
		},
		methods: {
			async init() {
				let result = await Promise.all([getType, getBreed]);
				this.petType = this.typeList[this.typeIndex];
				this.petGender = this.genderRatio[this.radioIndex].value;
				this.petBreed = this.breedList[this.breedIndex];
				this.isSterilisation = this.sterilisationList[this.sterilisationIndex].value;
			},
			onChange(e) {
				console.log(4444444, e)
				let {name, value} = e || {};
				if(name === 'isSterilisation') {
					this.sterilisationIndex = value;
					this.isSterilisation = this.sterilisationList[value];
				}else if(name === 'petGender') {
					this.radioIndex = value;
					this.petGender = this.genderRatio[value];
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
					birthday: this.birthday,
					homeDay: this.homeDay,
					isSterilisation: this.isSterilisation
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
				addPet(data)
				.then(res => {
					let { code, msg, data } = res || {};
					if(code === 1) {
						$toast('添加成功').then(() => {
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
