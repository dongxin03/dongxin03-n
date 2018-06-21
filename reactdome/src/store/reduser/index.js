import actions from "../actions"

export default function reduser(state={a:1,id:[],inclient:{a:200,b:200},init:false},actions){
    switch(actions.type){
        case "ADD":
        return {...state,a:state.a+actions.b}
        case "ADDID":
            state.id.push(actions.d)
        return {...state,id:state.id}
        case "CHANGE":
        return {...state,inclient:actions.b}
        case "ITEM":
        return {...state,init:actions.b}
        case 'ITEMSET':
        return {...state,init:actions.b}
    }
    return state;
}
