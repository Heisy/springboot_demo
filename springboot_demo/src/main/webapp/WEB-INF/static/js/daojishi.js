function jishi(obj,num){
	//obj为JQ对象，num为倒计时的时间
	//obj.attr("disabled", "disabled");
	if(num==0){
		obj.html("获取短信验证码");
		obj.addClass("button");
	}else{
		obj.html(num--+"秒后重新获取");
		obj.attr("time",num);
		setTimeout(function(){jishi(obj,num);},1000);
	}
}
