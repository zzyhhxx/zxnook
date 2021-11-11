export function $toast(title) {
	return new Promise(resolve => {
		uni.showToast({
		    title,
			icon: 'none',
		    duration: 1500
		});
		setTimeout(() => {
			resolve('success')
		}, 1500);
	})
	
}