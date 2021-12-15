<template>
	<view>
		{{petId}}
	</view>
</template>

<script>
	import { getPetById } from '../../network/Pet/';
	export default {
		name: 'PetDetail',
		data() {
			return {
				petId: ''
			}
		},
		onLoad(options) {
			let { petId } = options || {};
			this.petId = petId;
		},
		methods: {

		}
	}
</script>

<style>

</style>
