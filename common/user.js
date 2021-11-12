import { clearCache } from "./cache.js";

const USERCACHE = ['token'];

export function clearUserCache() {
	USERCACHE.forEach(item => {
		item && clearCache(item);
	})
}