export interface burgerState{
    show: boolean
}

export enum BurgerActionTypes {
    FETCH_BURGER_DEFAULT = 'FETCH_BURGER_DEFAULT',
    FETCH_BURGER_SHOW = 'FETCH_BURGER_SHOW',
}

interface FetchBurgerAction {
    type: BurgerActionTypes.FETCH_BURGER_DEFAULT;
    payload: boolean;
}

interface FetchBurgerShowAction {
    type: BurgerActionTypes.FETCH_BURGER_SHOW;
    payload: boolean;
}

export type BurgerAction = FetchBurgerAction | FetchBurgerShowAction
