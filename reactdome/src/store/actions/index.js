
const action = {
    changeText(text){
        return {type:"ADD",b:text}
    },
    add(id){
        return {type:"ADDID",d:id}
    }
}

export default action;