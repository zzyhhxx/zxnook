import { request } from "./Request.js"

export async function getTabList() {
	return request({
		url: '/index.php?s=/api/article/getTabList'
	});
}