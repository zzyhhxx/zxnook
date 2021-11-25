import { request } from "./Request.js";
export function getPet() {
	return request({
		url: '/index.php?s=/api/pet/getPet'
	})
}
export function addPet(data) {
	return request({
		url: '/index.php?s=/api/pet/addPet',
		data
	})
}
export function changePet(data) {
	return request({
		url: '/index.php?s=/api/pet/changePet',
		data
	})
}
export function getType(data) {
	return request({
		url: '/index.php?s=/api/pet/getType',
		data
	})
}
export function getBreed(data) {
	/**
	 * type: cat || dog
	 */
	return request({
		url: '/index.php?s=/api/pet/getBreed',
		data
	})
}