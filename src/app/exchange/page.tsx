"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchExchange } from "@/store/slice/rateSlice";
import { AppDispatch } from "@/store/store";

export default function page() {
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

  return (
    <div className={styles.wrapper}>
      <form onSubmit={submit} className={styles.formExchange}>
        <select
          name="from_currency"
          className={clsx(styles.selectCurrency, styles.from)}
        >
          <option value="USD">USD</option>
          <option value="RUB">RUB</option>
          <option value="EUR">EUR</option>
          <option value="BTC">BTC</option>
        </select>
        <span className={styles.arrow}>→</span>
        <select
          name="to_currency"
          className={clsx(styles.selectCurrency, styles.to)}
        >
          <option value="USD">USD</option>
          <option value="RUB">RUB</option>
          <option value="EUR">EUR</option>
          <option value="BTC">BTC</option>
        </select>
        <input type="number" name="from" placeholder="from" required />
        <input
          type="text"
          name="to"
          placeholder="to"
          defaultValue={0}
          readOnly
        />
        <div className={styles.submitWrapper}>
          <input type="submit" value="Submit" className={styles.formButton} />
        </div>
        <div className={styles.resetWrapper}>
          <input type="reset" value="Reset" className={styles.formButton} />
        </div>
        {loading ? (
          <div className={styles.loading}>
            <h3>Loading...</h3>
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}
