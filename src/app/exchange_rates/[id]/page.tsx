import React from "react";
import styles from "./page.module.scss";

type Props = {
  params: {
    id: string;
  };
};

interface Response {
  data: {
    converted_amount: Rates;
  };
}
interface Rates {
  [index: string]: string;
}

async function getData(id: string) {
  const response: Response = await fetch(
    `https://exchange-rates.abstractapi.com/v1/live/?api_key=1c657994dfa94661bb62ebef2edb99b9&base=${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => data.exchange_rates)
    .catch(function (error) {
      console.log(error);
    });

  return response;
}

export default async function Сurrency({ params: { id } }: Props) {
  const data = await getData(id);

  const currency = data ? Object.entries(data) : [];

  return (
    <div className={styles.exchangeWrapper}>
      <div className={styles.info}>
        {currency.map((item) => {
          return (
            <div key={item[0]}>
              1 {id} → {item[1]} {item[0]}
            </div>
          );
        })}
      </div>
      <div>{id}</div>
    </div>
  );
}
