"use client";
import { fetchRates } from "@/store/slice/rateSlice";
import { AppDispatch } from "@/store/store";

import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./page.module.scss";

interface State {
  rates: {
    rates: [string, string];
  };
}

export default function page() {
  const [activeСurrency, setActiveСurrency] = useState("USD");
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchRates("USD"));
  }, []);

  const store = useSelector((state: State) => state.rates.rates);

  const changeCurrency = (e: any) => {
    dispatch(fetchRates(e.target.value));
    setActiveСurrency(e.target.value);
  };

  useEffect(() => {
    console.log(store);
  }, [store]);

  return (
    <div className={styles.exchangeWrapper}>
      <select
        id="currency"
        className={styles.selectCurrency}
        onChange={(e) => changeCurrency(e)}
      >
        <option value="USD">USD</option>
        <option value="RUB">RUB</option>
        <option value="EUR">EUR</option>
        <option value="BTC">BTC</option>
      </select>

      <div className={styles.info}>
        {store.map((item) => {
          return (
            <div key={item[0]}>
              1 {activeСurrency} → {item[1]} {item[0]}
            </div>
          );
        })}
      </div>
    </div>
  );
}
