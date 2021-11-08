import { request } from "./Request.js";
export function login(data) {
	return request({
		url: '/index.php?s=/api/user/h5login',
		data
	})
}