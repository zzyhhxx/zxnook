import { request } from "./Request.js";
export function register(data) {
	return request({
		url: '/index.php?s=/api/user/register',
		data
	})
}