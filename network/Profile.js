import { request } from "./Request.js";
export function getUser(data) {
	return request({
		url: '/index.php?s=/api/user/detail',
		data
	})
}
export function editUser(data) {
	return request({
		url: '/index.php?s=/api/user/edit',
		data
	})
}