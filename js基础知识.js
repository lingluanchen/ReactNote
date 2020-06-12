'use strict';


//不要使用==比较，始终坚持使用===比较。==会自动转换数据类型再比较

NaN; // NaN表示Not a Number，当无法计算结果时用NaN表示
Infinity; // Infinity表示无限大，当数值超过了JavaScript的Number所能表示的最大值时，就表示为Infinity

NaN === NaN; // false
isNaN(NaN); // true

// 浮点数比较
1 / 3 === (1 - 2 / 3); // false
Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001; // true

// null表示一个空的值，而undefined表示值未定义。大多数情况下，我们都应该用null。undefined仅仅在判断函数参数是否传递的情况下有用。


/******************************************************** String *************************************************************/
`这是一个
多行
字符串`;

var message = `你好, ${name}, 你今年${age}岁了!`;

var s = 'Hello, world!';
s.length; // 13
s[0]; // 'H'
s[12]; // '!'
s[13]; // undefined 超出范围的索引不会报错，但一律返回undefined

// 字符串是不可变的，如果对字符串的某个索引赋值，不会有任何错误，但是，也没有任何效果
var s = 'Test';
s[0] = 'X';
alert(s); // s仍然为'Test'

var s = 'Hello world';
s.toUpperCase(); // 返回'HELLO'
s.toLowerCase(); // 返回'hello'
s.indexOf('world'); // 返回7
s.indexOf('World'); // 没有找到指定的子串，返回-1
s.substring(0, 5); // 从索引0开始到5（不包括5），返回'Hello'
s.substring(3);     // 从索引3开始到结束，返回'lo world'   等同slice
s.concat(3);  
s.substr(0,1)   //返回字符串的一个子串，传入参数是起始位置和长度
s.split(",")    //分割


/******************************************************** Array *************************************************************/

var arr = [1, 2, 3.14, 'Hello', null, true];
arr.length; // 6
arr.indexOf(10); // 元素10的索引为0
arr.indexOf(30); // 元素30没有找到，返回-1

var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
arr.slice(0, 3); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
arr.slice(3); // 从索引3开始到结束: ['D', 'E', 'F', 'G']
var aCopy = arr.slice();
aCopy; // ['A', 'B', 'C', 'D', 'E', 'F', 'G']
aCopy === arr; // false

//增/删数组从尾开始
var arr = [1, 2];
arr.push('A', 'B'); // 返回Array新的长度: 4
arr.pop(); // pop()返回'B'
arr.pop(); // 空数组继续pop不会报错，而是返回undefined

//增/删数组从头开始
arr.unshift('A', 'B'); // 返回Array新的长度: 4
arr.shift(); // 空数组继续shift不会报错，而是返回undefined

//默认按ascii排序
arr.sort();


arr.reverse();  //反转

var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
// 从索引2开始删除3个元素,然后再添加两个元素:
arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
// 只删除,不添加:
arr.splice(2, 2); // ['Google', 'Facebook']
arr; // ['Microsoft', 'Apple', 'Oracle']
// 只添加,不删除:
arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']


// 请注意，concat()方法并没有修改当前Array，而是返回了一个新的Array。
var arr = ['A', 'B', 'C'];
var added = arr.concat([1, 2, 3]);
arr.concat(1, 2, [3, 4]); 
arr.join('-'); // 'A-B-C-1-2-3'

/******************************************************** Object *************************************************************/
// in判断一个属性存在，hasOwnProperty判断是否属于本对象
var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
    'middle-school': 'No.1 Middle School'
};
'grade' in xiaoming; // false
'name' in xiaoming; // true
xiaoming.hasOwnProperty("weight")

xiaohong['name']; // '小红'
xiaohong.name; // '小红'
toString
xiaoming.hasOwnProperty('name'); // true
xiaoming.age = 18; // 新增一个age属性
delete xiaoming.age; // 删除age属性


// JavaScript把null、undefined、0、NaN和空字符串''视为false，其他值一概视为true



/******************************************************** 循环 *************************************************************/

var x = 0;
for (;;) { // 将无限循环下去
    if (x > 100) {
        break; // 通过if判断来退出循环
    }
    x ++;
}


var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
o.key
for (var key in o) {
    if (o.hasOwnProperty(key)) {
        console.log(key); // 'name', 'age', 'city'
    }
}


var a = ['A', 'B', 'C'];
for (var i in a) {
    console.log(i); // '0', '1', '2'
    console.log(a[i]); // 'A', 'B', 'C'
}

for (var x of a) {
    console.log(x); // 'A', 'B', 'C'
}

while (true) {
}

do {
} while (true)

let m = new Map([["s",1],["s",1],["s",1]])
m.forEach(function(value, key) {
    console.log(key,value);
})

/******************************************************** Map Set *************************************************************/

// 初始化Map需要一个二维数组，或者直接初始化一个空Map
var map = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
var m = new Map(); // 空Map
m.set('Adam', 67); // 添加新的key-value
m.has('Adam'); // 是否存在key 'Adam': true
m.get('Adam'); // 67
m.delete('Adam'); // 删除key 'Adam'
m.get('Adam'); // undefined


// 要创建一个Set，需要提供一个Array作为输入，或者直接创建一个空Set，Set中元素不重复
var s1 = new Set(); // 空Set    
var s = new Set([1, 2, 3, 3, '3']);
s.delete(3);
s.add(4);



/******************************************************** function *************************************************************/


function abs(x, ...rest) {
    if (typeof x !== 'number') {
        throw 'Not a number';
    }
    arguments.forEach(function(char, index, heSelf){
        console.log(char, indexm, heSelf);
    })
    console.log(res);

    
    if (x >= 0) {
        return 
        x; //这里执行不到，因为return后面自动加了分号
    } else {
        return {
            "name":"这里会返回内容的, { 代表语句没结束" 
        }
    }
}

// 函数在查找变量时从自身函数定义开始，从“内”向“外”查找。如果内部函数定义了与外部函数重名的变量，则内部函数的变量将“屏蔽”外部函数的变量。

/******************************************************** 命名空间 *************************************************************/
// 唯一的全局变量MYAPP:
var MYAPP = {};
// 其他变量:
MYAPP.name = 'myapp';
MYAPP.version = 1.0;
// 其他函数:
MYAPP.foo = function () {
    return 'foo';
};




 