import React from "react";
import styles from "./Loading.module.scss";

interface LoadingProps {
  loading: boolean;
}

export default function Loading({ loading }: LoadingProps) {
  return (
    <>
      {loading ? (
        <div className={styles.loading}>
          <h3>Loading...</h3>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
