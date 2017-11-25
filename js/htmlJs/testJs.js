//全局地替换出现的所有匹配上的字符串
String.prototype.replaceAll = function(oldStr,newStr){
	return this.replace(new RegExp(oldStr,"gm"),newStr);
}

/**
 * 字符串格式化.
 * 匹配格式：{}.
 * 比如：'test{}ddd{}'.format(2,3);
 * 输出：test2ddd3.
 * @returns {*}
 */
String.prototype.format = function () {
    var args = arguments;
    if (args.length == 0) {
        return '';
    }
    var index = 0;
    var result = this.replace(/\{\s*\}/g, function (word, i) {
        return args[index++];
    });
    return result;
};

$(function(){
	//var obj = $("body").html().replaceAll("haha","000");
	var obj = 'test{}ddd{}'.format(2,3);
	console.log(obj);	
});
