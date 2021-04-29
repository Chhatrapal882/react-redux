import {ADD_TO_CART} from '../Constant'
import {REMOVE_TO_CART} from '../Constant'
// const initialState = {
//     Data :[]
// }

export default function CardItem(state=[],action){
    console.log("action",action);
    switch (action.type){
        case ADD_TO_CART:
            return[
                ...state ,
                {cardData:action.data}
            ]
            case REMOVE_TO_CART:
                console.log("stae",state);
                state.pop()
            return[
                ...state 
            ]
            break
               default :
        return  state
    }
}