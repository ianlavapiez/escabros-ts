import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { AppDispatch, AppState } from "app/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
