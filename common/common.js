import { CONFIG } from "./config.js";
import { getCache } from '../common/cache.js';
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
	if(name === 'nickName' || name === 'username') {
		name = 'name';
	}else if(name === 'rPassword') {
		name = 'password'
	}
	let result = check(name, value);
	if(!result.status) {
		$toast(result.msg)
		return false;
	}
	return true;
}
export function $toast(title) {
	return new Promise(resolve => {
		if(title) {
			uni.showToast({
			    title,
				icon: 'none',
			    duration: 1500
			});
		}
		setTimeout(() => {
			resolve('success')
		}, 1500);
	})
	
}
export function getTimeText(timestamp) {
	let second = timestamp % 60;
	let hour = Math.floor(timestamp / 3600) % 24;
	let minute = Math.floor((timestamp % 3600) / 60);
	let day = Math.floor(timestamp / 86400);
	let month = Math.floor(day / 30);
	let year = Math.floor(month / 12);
	return {second, minute, hour, day, month, year};
}
//'yyyy-MM-dd hh:mm:ss', new Date(timestamp * 1000)
export function timeFormat(format, d) {
    	if(d == null) {
    		d = new Date();
    	}
        var date = {
            "M+": d.getMonth() + 1,
            "d+": d.getDate(),
            "h+": d.getHours(),
            "m+": d.getMinutes(),
            "s+": d.getSeconds(),
            "q+": Math.floor((d.getMonth() + 3) / 3),
            "S+": d.getMilliseconds()
        };
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in date) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1
                    ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
            }
        }
        return format;
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