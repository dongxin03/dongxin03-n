
const action = {
    changeText(text){
        return {type:"ADD",b:text}
    },
    add(id){
        return {type:"ADDID",d:id}
    },
    changeClient(x,y){
        return {type:"CHANGE",b:{x:x,y:y}}
    },
    itmeDate(a){
        return function(dispatch,getState){
            setTimeout(()=>{
                dispatch({type:"ITEM",b:a})
            },3000)
        }
    },
    itmeSet(a){
        return {type:"ITEMSET",b:a}
    }
}

export default action;