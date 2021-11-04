export function request({url = '', data = {}}) {
	return new Promise( (resolve, reject) => {
		uni.request({
		    url,
		    data,
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