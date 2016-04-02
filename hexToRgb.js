function hexTorgb(hexStr){
  var newArr = [];
	var arrToStr = "";
	var hexArr = {"0":0,"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"a":10,"b":11,"c":12,"d":13,"e":14,"f":15};
	var newStr = hexStr.substr(1,hexStr.length-1);				//十六进制的字符串去掉#号
	if(newStr.length == 3){							//十六进制的颜色值简写如：#FFF,#CCC等
		for(var i=0;i<newStr.length;i++){
			var splitStr = newStr.substr(parseInt(i*1),1);
			var first = splitStr.substr(0,1).toLowerCase();
			newArr.push(parseInt(parseInt((hexArr[first]*16))+parseInt(hexArr[first])));	//计算rgb值并以数组形式保存
		}
	}else{												//十六进制的颜色值不简写：#FFFFFF,#CCCCCC等
		for(var i=0;i<parseInt(newStr.length/2);i++){
			var splitStr = newStr.substr(parseInt(i*2),2);
			var first = splitStr.substr(0,1).toLowerCase();
			var last = splitStr.substr(1,1).toLowerCase();
			newArr.push(parseInt(parseInt((hexArr[first]*16))+parseInt(hexArr[last])));
		}
	}
	if(newArr.join()){
		return "rgb("+newArr.join()+")";						//把数组转换成字符串
	}else{
		for(var k=0;k<newArr.length;k++){
			arrToStr+= newArr[k]+",";
		}
		return "rgb("+substr(0,arrToStr.length-1)+")";
	}
}

exports.hexTorgb = hexTorgb;
