import { redirect } from "next/navigation";
import styles from "./page.module.scss";

export default function page() {
  redirect("/exchange_rates/USD");
}
