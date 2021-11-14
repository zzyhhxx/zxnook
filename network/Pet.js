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
export function editPet(data) {
	return request({
		url: '/index.php?s=/api/pet/editPet',
		data
	})
}
export function getType() {
	return request({
		url: '/index.php?s=/api/pet/getType',
		data
	})
}
export function getBreed() {
	return request({
		url: '/index.php?s=/api/pet/getBreed',
		data
	})
}