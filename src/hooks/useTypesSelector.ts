import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store/reducers";

export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector