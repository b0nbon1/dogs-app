import {AnyAction, Dispatch, ThunkDispatch} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {RootState, AppDispatch} from '.';

export type AppThunkDIspatchType = ThunkDispatch<RootState, null, AnyAction> &
  Dispatch<AnyAction>;
export const useAppDispatch = (): AppThunkDIspatchType =>
  useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
