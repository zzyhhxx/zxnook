import { request } from "./Request.js";
export function getClassify(data) {
	return request({
		url: '/index.php?s=/api/article/getClassifyList',
		data
	})
}
export function getTradeList(data) {
	return request({
		url: '/index.php?s=/api/pet/getTradePet',
		data
	})
}
export function searchTradeList(data) {
	return request({
		url: '/index.php?s=/api/pet/getTradePet',
		data
	})
}