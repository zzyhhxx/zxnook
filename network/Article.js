import { request } from "./Request.js";
export function getArticleList(data) {
	return request({
		url: '/index.php?s=/api/article/lists',
		data
	})
}