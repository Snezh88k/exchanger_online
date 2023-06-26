import clsx from "clsx";
import React from "react";
import styles from "./Select.module.scss";

interface SelectProps {
  optionValue: string[];
  name?: string;
  onChange?: (e: any) => void;
  className?: string;
}

export default function Select({
  className,
  optionValue,
  name,
  onChange,
}: SelectProps) {
  return (
    <select
      name={name}
      className={clsx(styles.selectCurrency, className)}
      onChange={onChange}
    >
      {optionValue.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
