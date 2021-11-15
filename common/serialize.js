/**
** @desc 深拷贝对象、数组
** @param {*} data                要拷贝的数据源
** @param {Function} serializer   属性序列化函数：camelize or hyphenate or 其他
** @param {String}  segment 	  连字符：'_' or '-' or 其他
**/
function deepCopy(data, serializer, segment) {
    let dataType = Object.prototype.toString.call(data);
    let isArray = (dataType == "[object Array]");
    let isObject = (dataType == "[object Object]");
    if(isArray){
    	let res = [];
    	data.forEach((item, index)=>{
    		res[index] = deepCopy(item, serializer, segment);
    	});
    	return res;
    }else if(isObject){
    	let res = {};
    	for(let key in data){
	   	   let newKey = serializer ? serializer(key, segment) : key;
　　　　　　 res[newKey] = deepCopy(data[key], serializer, segment);
    	}
    	return res;
    }
    return data;
}

/**
** @desc 属性：连字符转换驼峰
** @param {String} str   		要转换的属性
** @param {String} segment		连字符：'_' or '-' or 其他
**/
function camelize(str, segment = '_'){
	if(!str) return '';
	// let camelizeRE = /_(\w)/g;
	let camelizeRE = new RegExp(`${segment}(\\w)`, 'g');
	return str.replace(camelizeRE, (m, c)=>{
		return c ? c.toUpperCase() : '';
	})
}

/**
** @desc 属性：驼峰转换连字符
** @param {String} str   		要转换的属性
** @param {String} segment		连字符：'_' or '-' or 其他
**/
function hyphenate(str, segment = '_'){
	if(!str) return '';
	let hyphenateRE = /\B([A-Z])/g;
	return str.replace(hyphenateRE, `${segment}$1`).toLowerCase();
}
/**
** @desc 数据：连字符转换驼峰
** @param {*} data              要转换的数据源
** @param {String} segment		连字符：'_' or '-' or 其他
**/
function camelizeCopy(data, segment){
	return deepCopy(data, camelize, segment);
}
/**
** @desc 数据：驼峰转换连字符
** @param {*} data              要转换的数据源
** @param {String} segment		连字符：'_' or '-' or 其他
**/
function hyphenateCopy(data, segment){
	return deepCopy(data, hyphenate, segment);
}

export default {
	deepCopy,
	camelize,
	hyphenate,
	camelizeCopy,
	hyphenateCopy
}
