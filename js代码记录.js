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
/*
父组件两种写法
<HotelSearchHead
callback={(type, obj) => {
    this.headViewHandle(type, obj)
}}/>

<HotelSearchHead callback={this.headViewHandle.bind(this)} />

子组件
//回调父组件
callback(type, obj) {
    this.props.callback(type, obj)
}

*/


// 注意swipe不能设置宽度，否则无法滑动
