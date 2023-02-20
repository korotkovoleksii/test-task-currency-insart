import { ICurrencyResponse } from './../../interfaces/currencyResponse.interface';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICurrencyInitState } from './../../interfaces/currencyInit.interface';
import { arrCodeISO } from '../../constants/codeSelectedCurrencies';
import axiosInstance from '../../../__mocks__/apiMock';

export const retrieveCurrency = createAsyncThunk(
    'currency/retrieve',
    async () => {


        const { data } = await axiosInstance.get<ICurrencyResponse[]>(
            'http://localhost:3000/api/currency-data-mock',
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );
        console.log(data)

        return data.filter(item => (arrCodeISO.includes(item.currencyCodeA)));
    })

const initialState: ICurrencyInitState = {
    status: 'idle',
    data: [],
    error: null,
}
const currencySlice = createSlice(
    {
        name: '@@currency',
        initialState,
        reducers: {
            changePrice: (state, action: PayloadAction<{ code: number, rateType: 'sell' | 'buy', newValue: number }>) => {
                const { code, rateType, newValue } = action.payload;
                const index = state.data.findIndex(item => item.currencyCodeA === code);
                if (index >= 0) {
                    if (rateType === 'sell') {
                        state.data[index] = { ...state.data[index], 'rateSell': newValue }
                    } else {
                        state.data[index] = { ...state.data[index], 'rateBuy': newValue }
                    }
                }


            }
        },
        extraReducers: (builder) => {
            builder
                .addCase(retrieveCurrency.fulfilled, (state, action) => {
                    state.status = 'finished';

                    if (action.payload) {
                        state.data = action.payload;
                    }
                })
                .addCase(retrieveCurrency.pending, (state) => {
                    state.status = 'loading';
                    state.error = null;
                })
                .addCase(retrieveCurrency.rejected, (state, action) => {
                    state.status = 'error';
                    state.error = action.error.message ? action.error.message : 'error without message'
                })
        }
    }
)
export const { changePrice } = currencySlice.actions;

export default currencySlice.reducer;