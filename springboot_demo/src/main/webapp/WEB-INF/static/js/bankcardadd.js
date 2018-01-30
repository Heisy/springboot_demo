$(document).ready(function(){
	$(".bankcard_number_re").click(function(){
		$(".bankcard_number_input input").removeAttr("readonly");
		$(".bankcard_number_input input").css("background-color","white");
		$(".bankcard_number_re").hide();
		$(".mobile").hide();
		$("#card_numbaer").focus();
		window.flag = 0;
	});
	$(".button").click(function(){
		$(this).removeClass("button");
		$(".mobile_button").attr("time",60);
		var obj = $(".mobile_button");
		var time = $(".mobile_button").attr(time);
		jishi(obj,time);
		//ajax请求
	});
});
function ischeck(certName,certNo,mobile,bankCardNo,bankCode){
	if(certName.length==0){
		return "请输入姓名";
	}
	if(certNo.length==0){
		return "请输入证件号";
	}
	if(mobile.length==0){
		return "请输入手机号";
	}
	if(bankCardNo.length==0){
		return "请输入银行卡号";
	}
	if(bankCode==0){
		return "请输入银行";
	}
}
