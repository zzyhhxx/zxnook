import { request } from "./Request.js";
export function getUser(data) {
	return request({
		url: '/index.php?s=/api/user/detail',
		data
	})
}