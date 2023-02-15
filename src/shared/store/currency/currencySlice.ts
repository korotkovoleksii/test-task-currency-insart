import { ICurrencyResponse } from './../../interfaces/currencyResponse.interface';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ICurrencyInitState } from './../../interfaces/currencyInit.interface';


function api<T>(url: string,): Promise<T> {
    return fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': 'true'
        },
        mode: 'cors'

    })
        .then(response => {
            console.log(response, 44444)
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json() as T
        })
}

export const retrieveCurrency = createAsyncThunk(
    'currency/retrieve',
    async (undefine, { rejectWithValue }) => {
        try {
            const data = await api<ICurrencyResponse[]>('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
            console.log(data);
            return data;
        } catch (error) {
            rejectWithValue(error);
        }
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
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(retrieveCurrency.fulfilled, (state, action) => {
                    state.status = 'finished';
                    console.log(action.payload, 'wwwwww')
                    if (action.payload) {
                        state.data = action.payload;
                    }
                })
                .addCase(retrieveCurrency.pending, (state) => {
                    state.status = 'loading';
                    state.error = null;
                })
                .addCase(retrieveCurrency.rejected, (state) => {
                    state.error = 'error';
                })
        }
    }
)

export default currencySlice.reducer