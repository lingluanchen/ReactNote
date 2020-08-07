- 关于Date基础用法



```jsx
var myDate = new Date();  
myDate.getYear(); //获取当前年份(2位)  
myDate.getFullYear(); //获取完整的年份(4位,1970-????)  
myDate.getMonth(); //获取当前月份(0-11,0代表1月)         // 所以获取当前月份是myDate.getMonth()+1;   
myDate.getDate(); //获取当前日(1-31)  
myDate.getDay(); //获取当前星期X(0-6,0代表星期天)  
myDate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)  
myDate.getHours(); //获取当前小时数(0-23)  
myDate.getMinutes(); //获取当前分钟数(0-59)  
myDate.getSeconds(); //获取当前秒数(0-59)  
myDate.getMilliseconds(); //获取当前毫秒数(0-999)  
myDate.toLocaleDateString(); //获取当前日期  
var mytime=myDate.toLocaleTimeString(); //获取当前时间  
myDate.toLocaleString( ); //获取日期与时间  
```

- 计算指定两个时间之间的时间差



```jsx
//计算时间差，输入为日期字符串
function GetDateDiff(startDate, endDate) {
    var startTime = new Date(Date.parse(startDate.replace(/-/g, "/"))).getTime();
    var endTime = new Date(Date.parse(endDate.replace(/-/g, "/"))).getTime();
    //时间差的毫秒数
    var date3 = endTime - startTime;    
    //计算出相差天数  
    var days = Math.floor(date3 / (24 * 3600 * 1000))
    //计算出小时数  
    var leave1 = date3 % (24 * 3600 * 1000)
    //计算天数后剩余的毫秒数  
    var hours = Math.floor(leave1 / (3600 * 1000))
    //计算相差分钟数  
    var leave2 = leave1 % (3600 * 1000)
    //计算小时数后剩余的毫秒数  
    var minutes = Math.floor(leave2 / (60 * 1000))
    //计算相差秒数  
    var leave3 = leave2 % (60 * 1000)
    //计算分钟数后剩余的毫秒数  
    var seconds = Math.round(leave3 / 1000)
    var str = " 相差 " + days + "天 " + hours + "小时 " + minutes + "分钟 " + seconds + "秒";
    return str;
}
```

- 时间戳转换为 普通日期格式



```jsx
function formatDate(myTime) {
    // 比如需要这样的格式 yyyy-MM-dd hh:mm:ss
    var date = new Date(myTime);
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    var str = (Y + M + D + h + m + s)
    return str;
};
```

- 时间格式字符串转为时间戳（毫秒）



```jsx
function dateToStamp(myTime) {
    var date = new Date(myTime.replace(/-/g, '/')); //开始时间  
    var res = date.getTime();
    return res;
}
```

- 显示当前时间



```jsx
function getCurDate() {
    var d = new Date();
    var week;
    switch (d.getDay()) {
        case 1:
            week = "星期一";
            break;
        case 2:
            week = "星期二";
            break;
        case 3:
            week = "星期三";
            break;
        case 4:
            week = "星期四";
            break;
        case 5:
            week = "星期五";
            break;
        case 6:
            week = "星期六";
            break;
        default:
            week = "星期天";
    }
    var years = d.getFullYear();
    var month = add_zero(d.getMonth() + 1);
    var days = add_zero(d.getDate());
    var hours = add_zero(d.getHours());
    var minutes = add_zero(d.getMinutes());
    var seconds = add_zero(d.getSeconds());
    var ndate = years + "年" + month + "月" + days + "日 " + hours + ":" + minutes + ":" + seconds + " " + week;
    console.log(ndate);
}
function add_zero(temp) {
    if (temp < 10) return "0" + temp;
    else return temp;
}
setInterval("getCurDate()", 1000);
```



### 时间格式化 -- 转换为：yyyy-MM-dd hh:mm:ss格式

```js
复制// 说明：JS时间Date格式化参数
// 参数：格式化字符串如：'yyyy-MM-dd hh:mm:ss'
// 结果：如2016-06-01 10:09:00
Date.prototype.format = function (fmt) { 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
        "S": this.getMilliseconds() // 毫秒
    };

    // 根据y的长度来截取年
    if (/(y+)/.test(fmt)){ 
	fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o){
	if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
    return fmt;
}
// 用法： 
var time1 = new Date().format("yyyy-MM-dd");js
var time2 = new Date(1469281964000).format("yyyy-MM-dd hh:mm:ss");
console.log(time1);
console.log(time2);
```

[回到顶部](https://www.cnblogs.com/chenwenhao/p/10480234.html#_labelTop)

### 某一天所在星期范围

```js
复制// 参数：‘2019-03-05’ || 时间对象
// 结果：‘2019-03-04 至 2019-03-10’
function getWeekRange(date) {
  if(!date) return

  var now = new Date(date);
  var nowDayOfWeek = now.getDay();  // 星期日—>六（0->6）
  var nowDay = now.getDate();
  var nowMonth = now.getMonth();
  var nowYear = now.getYear(); // 2019年是119
  nowYear += (nowYear < 2000) ? 1900 : 0;
  var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek+1);  // 这周的周五
  var weekEndDate = new Date(nowYear, nowMonth, nowDay + (7 - nowDayOfWeek));   // 7- 这周的周日  &&  用5- 得到这的周五
  return weekStartDate.format('yyyy-MM-dd') + " 至 " + weekEndDate.format('yyyy-MM-dd');
}
// 用法：
getWeekRange(‘2019-03-05’)  // ‘2019-03-04 至 2019-03-10’
```

[回到顶部](https://www.cnblogs.com/chenwenhao/p/10480234.html#_labelTop)

### 获取当月第一天

```js
复制//获取当月第一天
function getFirstDayOfMonth () {
    var date = new Date();
    date.setDate(1);
    return date.format('yyyy-MM-dd');
}
```

[回到顶部](https://www.cnblogs.com/chenwenhao/p/10480234.html#_labelTop)

### 获取当月最后一天

```js
复制function getFirstDayOfMonth () {
    var date = new Date();
    var month = date.getMonth();
    date.setMonth(month+1);
    date.setDate(0);
    return date.format('yyyy-MM-dd');
}
```

[回到顶部](https://www.cnblogs.com/chenwenhao/p/10480234.html#_labelTop)

### 获取这个季度的第一天

```js
复制function getFirstDayOfSeason () {
    var date = new Date();
    var month = date.getMonth();
    if(month <3 ){
        date.setMonth(0);
    }else if(2 < month && month < 6){
        date.setMonth(3);
    }else if(5 < month && month < 9){
        date.setMonth(6);
    }else if(8 < month && month < 11){
        date.setMonth(9);
    }
    date.setDate(1);
    return date.format('yyyy-MM-dd');;
}
```

[回到顶部](https://www.cnblogs.com/chenwenhao/p/10480234.html#_labelTop)

### 获取当年的第一天

```js
复制function getFirstDayOfYear () {
    var date = new Date();
    date.setDate(1);
    date.setMonth(0);
    return date.format('yyyy-MM-dd');;
}
```

[回到顶部](https://www.cnblogs.com/chenwenhao/p/10480234.html#_labelTop)

### 获取当前日期为一年中的第几天

```js
复制Math.ceil(( new Date() - new Date(new Date().getFullYear().toString()))/(24*60*60*1000))+1;
```

[回到顶部](https://www.cnblogs.com/chenwenhao/p/10480234.html#_labelTop)

### 获取今天还剩多少天

```js
复制function restDayOfYear() {
    var fullyear = new Date().getFullYear();
    var nextyear = fullyear + 1;
    var lastday = new Date(new Date(nextyear,0,1) - 1); //本年的最后一毫秒：
    var now = new Date();
    var diff = lastday - now;  //毫秒数

    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
```

[回到顶部](https://www.cnblogs.com/chenwenhao/p/10480234.html#_labelTop)

### 获取今天星期几中文

```javascript
复制getWeekZh(value) {
   var dateArray = value.split("-");
   var zhWeek = "星期" + "日一二三四五六".charAt(new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2]).getDay());
   return zhWeek
}
```