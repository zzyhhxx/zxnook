import { request } from "./Request.js";
export function getInfo() {
	return request({
		url: '/index.php?s=/api/user/register'
	})
}