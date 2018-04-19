import actions from "../actions"

export default function reduser(state={a:1},actions){
    switch(actions.type){
        case "ADD":
        return {a:state.a+actions.b}
    }
    return state;
}
