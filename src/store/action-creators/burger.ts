import { Dispatch } from "redux"
import { BurgerAction, BurgerActionTypes } from "../../types/burger"

export const fetchBurger = (show: boolean) => {
    return (dispatch: Dispatch<BurgerAction>) => {
        dispatch({type: BurgerActionTypes.FETCH_BURGER_DEFAULT, payload: show})
    }
}

export function setShowBurger(show: boolean): BurgerAction {
    return {type: BurgerActionTypes.FETCH_BURGER_SHOW, payload: show}
}