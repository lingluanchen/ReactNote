## async await

基本上是Generator、yield的一个封装(实际也就是通过Promise实现)。async相当于那个`*`，await相当于那个yield，只不过await会进行一些特殊处理



```jsx
async function t(){
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
    b=await b;
    a=await a;
    console.log(b);
    console.log(a);
    console.log(6);
}

t();
console.log(7);
```

输出为1 2 3 4 5 7 8 9 6。主要是最后几个输出为8 9 6。因为执行到await时，会立刻跳出当前async函数，待cpu空闲后回来打印b,a,6这几个值。
1.await关键字必须**在async函数内或外部全局代码中**
2.async必定返回一个Promise对象。异步函数的返回值`value`，最终变为`Promise.resolve(value)`(没有返回值时`value===undefined`)；函数内的throw，立即变为`Promise.reject(value)`返回

