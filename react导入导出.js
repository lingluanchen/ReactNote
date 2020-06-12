// 组件
// 导出
export default class Component extends Component {
    render(){
        return (<div>Hello, World.</div>)
    }
}
// 导入
import Component from '.......'
// 注意：这里import后面的名称可以随便起，因为总会解析到export default；



// 变量常量
// 导出
export let name = 'wangcai'; // 变量
export const age = 2 // // 常量
const x='string'
/*批量导出*/
export {x} //或写多个export x
// 导入
import {name, age} from '......'
// 注意：这里import后面的名称必须和定义的相同；



// 方法
// 导出
export function sum(a, b){
    return (a + b)
}
function sum2(a, b){
    return (a + b)
}
export {sum2}   //或export sum2
// 导入
import {sum} from '.......'
// 注意：这里import后面的名称必须和定义的相同；