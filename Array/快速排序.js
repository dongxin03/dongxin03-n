let ary=[1,3,4,6,8,9,3,5,2,43,2,,1,43,54,23,3,0];

//冒泡排序
function sortA(ary){
    for(let i=0;i<ary.length-1;i++){
        for(let j=i+1;j<ary.length;j++){
            var cur=ary[i];
            if(cur>=ary[j]){
                var index=ary[j];
                ary[j]=cur;
                ary[i]=index;
            }
        }
    }
    return ary
}
sortA(ary);

//快速排序
function sortB(ary){

    if(ary.length<=1){
        return ary
    }
    let len=Math.floor(ary.length/2);
    var cur=ary.splice(len,1);
    var left=[];
    var right=[];
    for(var i=0;i<ary.length;i++){
        if(cur>ary[i]){
            left.push(ary[i]);
        }else{
            right.push(ary[i])
        }
    };
    return sortB(left).concat(cur,sortB(right))
}
// console.log(sortB(ary));

//去重
function sortC(ary){
    let len=[...new Set(ary)]
    return  len
}
// console.log(sortC(ary));

//indexof  去重
function sortD(ary){
   var len=ary.length;
   var result=[];
   ary.forEach((item,index,ary)=> {
       var bool=ary.indexOf(item,index+1);
       if(bool===-1){
           result.push(item)
       }
   });
   return result;
}
// console.log(sortD(ary));

//对象属性名方法去重
function sortE(ary){
    let obj={};
    let arr=[];
    ary.forEach(element => {
        obj[element]=element
    });
    console.log(obj);
    
    for(let key in obj){
        arr.push(key)
    }
    return arr
}
console.log(sortE(ary));

