import { ICurrencyResponse } from "./currencyResponse.interface";


export interface ICurrencyInitState {
    status: 'idle' | 'loading' | 'finished' | 'error';
    data: ICurrencyResponse[];
    error: string | null;
}