export function check(type = '', value = '') {
	let result = {status: true, msg: ''};
	value = String(value).trim()
	switch(type) {
	case 'name': 
		if(!value){
		  result = {status: false, msg: '用户名不能为空'}
		}else{
		  let patrn = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/im; 
		  if(patrn.test(value)){
			result = {status: false, msg: '用户名不能包含特殊字符'} 
		  }
		  if(value.length > 10){
			result = {status: false, msg: '用户名最多10个字符'}
		  }
		}
	break; 
	case 'password':
		if(!value){
		  result = {status: false, msg: '密码不能为空'}
		}else{
		  let patrn = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/im; 
		  if(patrn.test(value)){
			result = {status: false, msg: '密码不能包含特殊字符'} 
		  }
		  if(value.length > 10){
			result = {status: false, msg: '密码最多10个字符'}
		  }
		}
	break; 
	case 'remark': value.length < 2 ?  result = {status: false, msg: '备注最少两个字'} : result = {status: true, msg: ''};break; 
	case 'phone': !(/^1\d{10}$/).test(value) ?  result = {status: false, msg: '手机号格式错误'} : result = {status: true, msg: ''};break;
	case 'qq': !(/^\d{4,12}$/).test(value) ?  result = {status: false, msg: 'QQ号格式错误'} : result = {status: true, msg: ''};break;
	case 'email': !(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/).test(value) ?  result = {status: false, msg: '邮箱格式错误'} : result = {status: true, msg: ''};break;
	case 'age': !value ?  result = {status: false, msg: '年龄不能为空'} : result = {status: true, msg: ''};break;
	case 'detail': !value ?  result = {status: false, msg: '详细地址不能为空'} : result = {status: true, msg: ''};break; 
	default : result = {status: false, msg: '未知类型'};break;
	}
	return result
}