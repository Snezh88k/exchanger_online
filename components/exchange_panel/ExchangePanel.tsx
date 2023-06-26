"use client";
import { useState } from "react";
import styles from "./ExchangePanel.module.scss";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchExchange } from "@/store/slice/rateSlice";
import { AppDispatch } from "@/store/store";
import Select from "../select/Select";
import Loading from "../loading/Loading";

export default function ExchangePanel() {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);

  const submit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    const body = {
      from: e.target.from_currency.value,
      to: e.target.to_currency.value,
      sum: e.target.from.value,
    };

    dispatch(fetchExchange(body)).then((data) => {
      e.target.to.value = data.payload;
      setLoading(false);
    });
  };

  const currencies = ["USD", "RUB", "EUR", "BTC"];
  return (
    <div className={styles.wrapper}>
      <form onSubmit={submit} className={styles.formExchange}>
        <Select
          className={styles.from}
          optionValue={currencies}
          name="from_currency"
        />
        <span className={styles.arrow}>→</span>
        <Select
          className={styles.to}
          optionValue={currencies}
          name="to_currency"
        />
        <input type="number" name="from" placeholder="from" required />
        <input
          type="text"
          name="to"
          placeholder="to"
          defaultValue={0}
          readOnly
        />
        <input
          type="submit"
          value="Submit"
          className={clsx(styles.formButton, styles.submitWrapper)}
        />
        <input
          type="reset"
          value="Reset"
          className={clsx(styles.formButton, styles.resetWrapper)}
        />

        <Loading loading={loading} />
      </form>
    </div>
  );
}
