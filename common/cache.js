export function setCache(key, value) {
	localStorage.setItem(key, value);
}
export function getCache(key) {
	return localStorage.getItem(key);
}