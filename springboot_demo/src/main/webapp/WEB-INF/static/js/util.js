// 判断是否是金额
// 可验证 大于等于零，小于等于99999999.99 的数字
function isMoney(num) {
	var exp = /^([1-9][\d]{0,9}|0)(\.[\d]{1,2})?$/;
	if (exp.test(num)) {
		return true;
	} else {
		return false;
	}
}

// 取某一天的日期，如今天是2014-11-07，则GetDateStr(-1)为2014-11-06
function GetDateStr(AddDayCount) {
	var dd = new Date();
	dd.setDate(dd.getDate() + AddDayCount);// 获取AddDayCount天后的日期
	var y = dd.getFullYear();
	var m = dd.getMonth() + 1;// 获取当前月份的日期
	var d = dd.getDate();
	return y + "-" + m + "-" + d;
}
/**
 * 得到N年、N月、N日后的日期
 * 如：addDays(new Date("2014-11-01"),0,1,1)) 得到 Tue Dec 02 2014 00:00:00 GMT+0800 (中国标准时间)
 */
function addDays(day, y, m, d) {
	var newDay = new Date(day.getFullYear() + y, day.getMonth() + m, day.getDate() + d);
	return newDay;
}

/**
 * 只能输入数字，如手机号<input id="phone" type="text" onkeypress="return isNum(event)" />
 * @param e
 */
function isNum(e) {
    var k = window.event ? e.keyCode : e.which;
    if (((k >= 48) && (k <= 57)) || k == 8 || k == 0) {
    } else {
        if (window.event) {
            window.event.returnValue = false;
        }
        else {
            e.preventDefault(); //for firefox 
        }
    }
}
