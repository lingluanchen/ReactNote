


//不推荐写法
{ isEdit && (<View style={styles.title_row}> </View>) }
//推荐写法，必须为true或者false 不能为 {} null undifine 等
{ (isEdit === true) && (<View style={styles.title_row}></View>) }



//发送通知
DeviceEventEmitter.emit('loginUpdate')
// 监听通知
this.lister = DeviceEventEmitter.addListener('loginUpdate', () => { })
// 移除通知
this.lister.remove();

// 自定义的监听
const EventEmitter = require('events');
class CountEmitter extends EventEmitter { }
this.lister = CountEmitter.addListener('loginUpdate', () => { })


reduce //数组为0 崩溃， 为1 返回元素本身


// async await
// 基本上是Generator、yield的一个封装(实际也就是通过Promise实现)。async相当于那个`*`，await相当于那个yield，只不过await会进行一些特殊处理

async function t() {
    var a = new Promise(
        function (resolve, reject) {
            console.log(1);
            resolve(9);
            console.log(2);
        })
    var b = new Promise(
        function (resolve, reject) {
            console.log(3);
            resolve(8);
            console.log(4);
        })
    console.log(5);
    b = await b;
    a = await a;
    console.log(b);
    console.log(a);
    console.log(6);
}

t();
console.log(7);
// 输出为1 2 3 4 5 7 8 9 6。主要是最后几个输出为8 9 6。因为执行到await时，会立刻跳出当前async函数，待cpu空闲后回来打印b,a,6这几个值。
// 1.await关键字必须**在async函数内或外部全局代码中**
// 2.async必定返回一个Promise对象。异步函数的返回值`value`，最终变为`Promise.resolve(value)`(没有返回值时`value===undefined`)；函数内的throw，立即变为`Promise.reject(value)`返回





// 深拷贝
let obj = {
    name ='12',
    df: ['small python', 'big python'],
    intro: { color: 'black', like: ['blue'] }
}
function deepClone(formobj, toobj) {
    let temp = toobj || {};
    for (let key in formobj) {
        if (typeof formobj[key] === 'object') {
            temp[key] = object.prototype.toString.call(formobj[key]) === '[object Array]' ? [] : {};
            deepClone(formobj[key], temp[key]);
        } else {
            temp[key] = formobj[key];
        }
    }
    return temp;
}
console.log(deepClone(obj));


// 传值
{
    [].map((val, index) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.click(index)
                }} >
            </TouchableOpacity>)
    })
}


//子组件反响传值

// 父组件绑定this
<HotelSearchHead
    callback={(type, obj) => {
        this.headViewHandle(type, obj)
    }} />

    <HotelSearchHead callback={this.headViewHandle.bind(this)} />


//子组件回调父组件
/*
callback(type, obj) {
    this.props.callback(type, obj)
}
*/



//正则
let regMoney = /^[1-9]+[0-9]*$/;
regMoney.test(val) //返回值true false


// 注意swipe不能设置宽度，否则无法滑动
