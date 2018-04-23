import actions from "../actions"

export default function reduser(state={a:1,id:[]},actions){
    switch(actions.type){
        case "ADD":
        return {...state,a:state.a+actions.b}
        case "ADDID":
            state.id.push(actions.d)
        return {...state,id:state.id}
    }
    return state;
}
