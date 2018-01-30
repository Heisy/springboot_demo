$(document).ready(function(){
	//页数判断
	var pageint = parseInt($("#pagenum").val())/parseInt($("#pagesize").val());
	var pages = parseInt(pageint);
	if(parseInt($("#pagenum").val())%parseInt($("#pagesize").val())!=0){
		pages = pages + 1;
	}
	$("#pages").val(pages);
	$(".bill_page_num").html("共"+pages+"页");
	var pagenow_htm = "";
	for(var i = 1 ;i<pages+1;i++){
		if(i==1){
			pagenow_htm = pagenow_htm + "<a class='bold' index='"+i+"'>"+ i +"</a>"
		}else{
			pagenow_htm = pagenow_htm + "<a index='"+i+"'>"+ i +"</a>"
		}
	}
	$(".bill_pagenow").html(pagenow_htm);
	var num = 0;
	$(".bill_yue_number").each(function(){
		num = num + Number($(this).html());
	});
	num = num + "";
	if(num.indexOf('.')!=-1){
		len = num.split('.')[1].length;
		if(len==2){
			num = num;
		}
		if(len==1){
			num = num + '0';
		}
	}else{
		num = num + ".00";
	}
	$(".bill_number").html(num);
	$(".bill_datetime_begin").datepicker();
	$(".bill_datetime_end").datepicker();
	$(".bill_pro_type").click(function(){//全部，充值，提现  三类的切换
		$(".type_blue").removeClass("type_blue");
		$(this).addClass("type_blue");
		
		//var bill_type = $(".bill_select").val();
		var bill_type ="";
		var bill_datetime_begin = $(".bill_datetime_begin").val();
		var bill_datetime_end = $(".bill_datetime_end").val();
		var bill_xianshi_type = $(".type_blue").attr("id");
		var pagesize = $("#pagesize").val();
		var pagenow = 1;//切换类型，回第1页
		findlist(bill_type,bill_datetime_begin,bill_datetime_end,bill_xianshi_type,pagesize,pagenow);
	});
	$(".bill_find").click(function(){//日期查询按钮
		var bill_type = $(".bill_select").val();
		var bill_datetime_begin = $(".bill_datetime_begin").val();
		var bill_datetime_end = $(".bill_datetime_end").val();
		var bill_xianshi_type = $(".type_blue").attr("id");
		var pagesize = $("#pagesize").val();
		var pagenow = $("#pagenow").val();
		findlist(bill_type,bill_datetime_begin,bill_datetime_end,bill_xianshi_type,pagesize,pagenow);
	});
	$(".bill_prevpage").click(function(){//上一页
		if($("#pagenow").val()!="1"){
			var bill_type = $(".bill_select").val();
			var bill_datetime_begin = $(".bill_datetime_begin").val();
			var bill_datetime_end = $(".bill_datetime_end").val();
			var bill_xianshi_type = $(".type_blue").attr("id");
			var pagesize = $("#pagesize").val();
			var pagenow = Number($("#pagenow").val())-1;//上一页 -1
			$("#pagenow").val(pagenow);
			findlist(bill_type,bill_datetime_begin,bill_datetime_end,bill_xianshi_type,pagesize,pagenow);
		}
	});
	$(".bill_nextpage").click(function(){//下一页
		if($("#pagenow").val()!=$("#pages").val()){
			var bill_type = $(".bill_select").val();
			var bill_datetime_begin = $(".bill_datetime_begin").val();
			var bill_datetime_end = $(".bill_datetime_end").val();
			var bill_xianshi_type = $(".type_blue").attr("id");
			var pagesize = $("#pagesize").val();
			var pagenow = Number($("#pagenow").val())+1;//下一页 +1
			$("#pagenow").val(pagenow);
			findlist(bill_type,bill_datetime_begin,bill_datetime_end,bill_xianshi_type,pagesize,pagenow);
		}
	});
	$(".bill_pagenow a").click(function(){//点击页面数字
		$(".bold").removeClass("bold");
		$(this).addClass("bold");
		var bill_type = $(".bill_select").val();
		var bill_datetime_begin = $(".bill_datetime_begin").val();
		var bill_datetime_end = $(".bill_datetime_end").val();
		var bill_xianshi_type = $(".type_blue").attr("id");
		var pagesize = $("#pagesize").val();
		var pagenow = $(this).html();
		$("#pagenow").val(pagenow);   //重新赋值
		findlist(bill_type,bill_datetime_begin,bill_datetime_end,bill_xianshi_type,pagesize,pagenow);
	});

	//执行点击事件
	invokeClick( $("#allTradeType").val());
});
/**
 * 页面初始化的时候执行交易类型点击事件
 * @param tradeType
 */
function invokeClick( tradeType){
	if( tradeType && "1" == tradeType){
		$("#tradeType1").trigger("click");
	}else if(tradeType && "2" == tradeType){
		$("#tradeType2").trigger("click");
	}else{
		$("#allTradeType").trigger("click");
	}
}
function sel(){//select框查询
	var bill_type = $(".bill_select").val();
	var bill_datetime_begin = $(".bill_datetime_begin").val();
	var bill_datetime_end = $(".bill_datetime_end").val();
	var bill_xianshi_type = $(".type_blue").attr("id");
	var pagesize = $("#pagesize").val();
	var pagenow = 1;//选择select框后回显第1页
	findlist(bill_type,bill_datetime_begin,bill_datetime_end,bill_xianshi_type,pagesize,pagenow);
}
function findlist(bill_type,bill_datetime_begin,bill_datetime_end,bill_xianshi_type,pagesize,pagenow){
	//6个查询条件
	var product= { record_accType:bill_type,
		queryStartTime:bill_datetime_begin,
		queryEndTime:bill_datetime_end,
		record_curPage:pagenow,
		record_pageSize:pagesize,
		record_txnType:bill_xianshi_type
	}
	var url="";
	if("tradeType1"==bill_xianshi_type){
		url="/wallet/queryRechargeRecord.htm";
	}else if("tradeType2"==bill_xianshi_type){
		url="/wallet/queryWithdrawRecord.htm";
	}else{
		url="/wallet/queryAllRecord.htm";
	}
	$.ajax({
		url:spr+url,
		type: "POST",
        data: product,
        dataType: "json",
        success:function(data){
        	console.log(data);
        	showtable(data.data);//数据加载
        	prevnext();//上一页下一页是否可点判断
        	selectA();//当前页字体加粗
        },
        error:function(data){
        	alert("请求失败");
        }
	})
}
function prevnext(){
	//初始化
	$(".bill_prevpage").attr("class","bill_prevpage prev");
	$(".bill_nextpage").attr("class","bill_nextpage next");
	//判断共有页数
	var pageint = parseInt($("#pagenum").val())/parseInt($("#pagesize").val());
	var pages = parseInt(pageint);
	if(parseInt($("#pagenum").val())%parseInt($("#pagesize").val())!=0){
		pages = pages + 1;
	}
	
	var now = Number($("#pagenow").val());
	if(now == 1){//第1页判断
		$(".prev").removeClass("prev");
	}else if(now == pages){//最后一页判断
		$(".next").removeClass("next");
	}
}
function selectA(){
	$(".bold").removeClass("bold");
	var now = $("#pagenow").val();
	$("[index="+now+"]").addClass("bold");
}
function showtable(data){
	$(".bill_table_two_table").html("");
	var tablehtml = '<tr class="bill_firsttr">'
				+'<td width="20%">时间</td>'
				+'<td width="28%">交易号</td>'
				//+'<td width="20%">银行卡</td>'
				+'<td width="10%">类型</td>'
				+'<td width="10%">金额（元）</td>'
				+'<td width="12%">状态</td>'
				+'</tr>';
	for(var i in data.recordList){
		var bankname = "";//银行名及银行卡号
		if(data.recordList[i].bankName!=""){
			bankname = data.recordList[i].bankName+":"+data.recordList[i].cardNo;
		}
		var rsType = "";//类型
		if(data.recordList[i].tradeType=="1"){
			rsType = "充值";
		}else if(data.recordList[i].tradeType=="2"){
			rsType = "提现";
		}else if(data.recordList[i].tradeType=="3"){
			rsType = "转账";
		}
		var rsStatus = "";//状态
		if(data.recordList[i].status=="F"){
			rsStatus = "失败";
		}else if(data.recordList[i].status=="S"){
			rsStatus = "成功";
		}
		var background = "";//判断奇偶显示背景色
		if(i%2!=0){
			background =  ' style="background-color:#F5F5F5;"';
		}
		tablehtml = tablehtml + '<tr class="bill_unfirsttr" ' + background +'>'
					+ "<td>"+getFormatDateByLong(data.recordList[i].gmtSubmit, "yyyy-MM-dd hh:mm:ss")+"</td>"
					+ "<td >"+data.recordList[i].tradeVoucherNo+"</td>"
					//+ "<td></td>"
					+ "<td>"+rsType+"</td>"
					+ "<td>"+data.recordList[i].payAmount.amount+"</td>"
					+ "<td>"+rsStatus+"</td>"
					+ "</tr>";
	}
	$(".bill_table_two_table").html(tablehtml);
	$("#pagesize").val();
	$("#pagenow").val();
	$("#pagenum").val();
	$("#pages").val();
}