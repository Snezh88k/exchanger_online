import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Response {
  data: {
    conversion_rates: Rates;
  };
}

interface FetchExchangeProps {
  from: string;
  to: string;
  sum: number;
}

export interface Rates {
  [index: string]: string;
}

interface InitialState {
  rates: StateRates;
  converted_amount: number;
}

const initialState: InitialState = {
  rates: [],
  converted_amount: 0,
};

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export type StateRates = Entries<Rates>;

export const fetchRates = createAsyncThunk(
  "rates/fetchRates",

  async function (currency: string) {
    const response: Response = await axios
      .get(
        `https://exchange-rates.abstractapi.com/v1/live/?api_key=1c657994dfa94661bb62ebef2edb99b9&base=${currency}`
      )
      .then((response) => {
        return response.data.exchange_rates;
      })
      .catch(function (error) {
        console.log(error);
      });

    return response;
  }
);

export const fetchExchange = createAsyncThunk(
  "rates/fetchExchange",

  async function ({ from, to, sum }: FetchExchangeProps) {
    const response = await axios
      .get(
        `https://exchange-rates.abstractapi.com/v1/convert/?api_key=1c657994dfa94661bb62ebef2edb99b9&base=${from}&target=${to}&base_amount=${sum}`
      )
      .then((response) => {
        return response.data.converted_amount;
      })
      .catch(function (error) {
        console.log(error);
      });

    return response;
  }
);

const ratesSlice = createSlice({
  name: "message",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRates.fulfilled, (state, action) => {
      const array = action.payload ? Object.entries(action.payload) : [];
      state.rates = array;
    });
    builder.addCase(fetchExchange.fulfilled, (state, action) => {
      state.converted_amount = action.payload;
    });
  },
});

export const {} = ratesSlice.actions;

export default ratesSlice.reducer;
