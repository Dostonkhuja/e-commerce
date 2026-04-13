import type { UnknownAction, ThunkDispatch } from "@reduxjs/toolkit";

export type AppStoreDispatch = ThunkDispatch<unknown, unknown, UnknownAction>;
