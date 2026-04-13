import { useDispatch, useSelector } from "react-redux";
import type { AppStoreDispatch } from "./types.ts";

export const useAppDispatch: () => AppStoreDispatch = useDispatch;

export const useAppSelector = <TState, TSelected>(
    selector: (state: TState) => TSelected
): TSelected => {
    return useSelector((state: unknown) => selector(state as TState));
};
