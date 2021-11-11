export function uploadFile() {
	uni.chooseImage({
	    count: 9, //默认9
	    sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
	    sourceType: ['album'], //从相册选择
	    success: function (res) {
	        console.log(JSON.stringify(res.tempFilePaths));
			  uni.uploadFile({
			            url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
			            filePath: tempFilePaths[0],
			            name: 'file',
			            formData: {
			                'user': 'test'
			            },
			            success: (uploadFileRes) => {
			                console.log(uploadFileRes.data);
			            }
			  });
	    }
	});
}