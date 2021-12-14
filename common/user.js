import { clearCache, getCache } from "./cache.js";

const USERCACHE = ['token'];

export function clearUserCache() {
	USERCACHE.forEach(item => {
		item && clearCache(item);
	})
}
export function isLogin() {
	return getCache('token');
}