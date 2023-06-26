import Link from "next/link";
import styles from "./page.module.scss";

export default function ExchangeRatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className={styles.wrapperRates}>
        <Link href="/exchange_rates/USD">USD</Link>
        <Link href="/exchange_rates/BTC">BTC</Link>
        <Link href="/exchange_rates/RUB">RUB</Link>
      </div>{" "}
      {children}
    </div>
  );
}
