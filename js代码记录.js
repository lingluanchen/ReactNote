let obj = {
 name ='12',
 df:['small python','big python'],
 intro:{color:'black',like:['blue']}
}
function deepClone (formobj,toobj){
 let temp=toobj || {};
 for(let key in formobj){
  if(typeof formobj[key] === 'object'){
   temp[key]= object.prototype.toString.call(formobj[key]) === '[object Array]' ? [] : {};
   deepClone(formobj[key],temp[key]);
  }else{
   temp[key] = formobj[key];
  }
 }
 return temp;
}

console.log(deepClone(obj));