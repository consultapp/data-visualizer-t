import { useMemo } from "react";
import styles from "./styles.module.scss";

type Props = { value: number; max: number };

export default function NormalHistogram({ value, max }: Props) {
  const gridTemplateRows = useMemo(
    () => `80px ${max - value}fr ${value}fr`,
    [value, max]
  );

  return (
    <div className={styles.root} style={{ gridTemplateRows }}>
      <div data-type="value">
        <span>{value}</span>
      </div>
    </div>
  );
}
