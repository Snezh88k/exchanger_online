"use client";
import { fetchRates } from "@/store/slice/rateSlice";
import { AppDispatch } from "@/store/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./page.module.scss";
import Select from "../../../components/select/Select";

interface State {
  rates: {
    rates: [];
  };
}

export default function page() {
  const [activeСurrency, setActiveСurrency] = useState("USD");
  const dispatch = useDispatch<AppDispatch>();
  const store = useSelector((state: State) => state.rates.rates);

  useEffect(() => {
    if (store.length === 0) {
      dispatch(fetchRates("USD"));
    }
  }, []);

  const changeCurrency = (e: any) => {
    dispatch(fetchRates(e.target.value));
    setActiveСurrency(e.target.value);
  };

  const currencies = ["USD", "RUB", "EUR", "BTC"];

  return <div>МЕЙН ПЕЙДЖ</div>;
}
