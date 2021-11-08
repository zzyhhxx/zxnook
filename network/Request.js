import { getCache } from '../common/cache.js';
import { CONFIG } from './Config.js';
export function request({url = '', data = {}}) {
	return new Promise( (resolve, reject) => {
		uni.request({
		    url: `${CONFIG.DEMAIN}url`,
		    data: {
				...data,
				token: getCache('token')
			},
			method:'POST',
		    success: (res) => {
				resolve(res.data);
		    },
			fail: res => {
				reject(res)
			}
		});
	} )
}