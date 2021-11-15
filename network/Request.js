import { getCache } from '../common/cache.js';
import { CONFIG } from '../common/config.js';
import serialize from '../common/serialize.js';
export function request({url = '', data = {}, useSerialize = true}) {
	console.log()
	if(useSerialize) {
		data = serialize.hyphenateCopy(data);
	}
	return new Promise((resolve, reject) => {
		uni.request({
		    url: `${CONFIG.DEMAIN}${url}`,
		    data: {
				...data,
				token: getCache('token'),
				wxapp_id: CONFIG.WXAPPID
			},
			method:'POST',
		    success: (res) => {
				let result = res.data;
				if(useSerialize) {
					result = serialize.camelizeCopy(res.data);
				}
				resolve(result);
		    },
			fail: res => {
				reject(res)
			}
		});
	})
}