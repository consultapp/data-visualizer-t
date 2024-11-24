import React from "react";
import styles from "./styles.module.scss";

type Props = { children: React.ReactNode; gap?: number };

export default function TwoColumns({ children, gap = 20 }: Props) {
  return (
    <div className={styles.root} style={{ gap }}>
      {children}
    </div>
  );
}
