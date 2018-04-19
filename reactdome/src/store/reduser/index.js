import action from "../action"

export default function reduser(state={a:1},action){
    switch(action.type){
        case "ADD":
        return {a:state.a+action.b}
    }
    return state;
}
