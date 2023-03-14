import { BurgerAction, BurgerActionTypes, burgerState } from "../../types/burger"


const initialState:burgerState = {
    show: false
}

export const burgerReducer = (state = initialState, action: BurgerAction): burgerState => {
    switch (action.type){
        case BurgerActionTypes.FETCH_BURGER_DEFAULT:
            return {...state, show: action.payload}

        case BurgerActionTypes.FETCH_BURGER_SHOW:
            return {...state, show: action.payload}
        default:
            return state
    }
}