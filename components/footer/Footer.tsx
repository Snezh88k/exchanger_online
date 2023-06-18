import React from "react";
import Image from "next/image";
import devLovo from "../../src/image/logo5.png";
import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.developerInfo}>
          <span>By</span>
          <Link href="https://github.com/Snezh88k">
            <Image src={devLovo} width={25} alt="logo" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
