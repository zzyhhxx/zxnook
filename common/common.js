import { CONFIG } from "./config.js";
import { getCache } from '../common/cache.js';
import { $toast } from './toast.js';
import { check } from './check.js';
export async function uploadFile() {
	return new Promise(resolve => {
		uni.chooseImage({
		    count: 9, //默认9
		    sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
		    sourceType: ['album'], //从相册选择
		    success: async function(res) {
				let tempFilePaths = res.tempFilePaths || [];
				if(Array.isArray(tempFilePaths) && tempFilePaths.length) {
					_uploadFile(tempFilePaths).then(res => {
						resolve(res)
					});
				}
		    }
		});
	})
}

export function checkAndToast(name, value) {
	let result = check(name, value);
	if(!result.status) {
		$toast(result.msg)
		return false;
	}
	return true;
}
function _uploadFile(files, result = []) {
	if(!files.length) {
		return result;
	}
	let file = files.shift();
	return new Promise(resolve => {
		uni.uploadFile({
				url: `${CONFIG.DEMAIN}/index.php?s=/api/upload/image`, 
				filePath: file,
				name: 'iFile',
				formData: {
					token: getCache('token'),
					wxapp_id: CONFIG.WXAPPID
				},
				success: res => {
					let {statusCode, errMsg, data} = res || {};
					if(statusCode === 200 && errMsg === 'uploadFile:ok') {
						let _data = JSON.parse(data);
						let {code, msg} = _data;
						if(code === 1) {
							result.push(_data.data.file_path);
						}
					}
					resolve(_uploadFile(files, result));
				}
		})
	})
	
	
}