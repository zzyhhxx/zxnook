export function setCache(key, value) {
	uni.setStorageSync(key, value);
}
export function getCache(key) {
	return uni.getStorageSync(key);
}
export function clearCache(key) {
	if(!key) {
		uni.clearStorageSync();
	}else {
		uni.removeStorageSync(key);
	}
}