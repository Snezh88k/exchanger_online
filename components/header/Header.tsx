import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/exchange_rates">Rates</Link>
      <Link href="/exchange">Exchange</Link>
    </div>
  );
};

export { Header };
