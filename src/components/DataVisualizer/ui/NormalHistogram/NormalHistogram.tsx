import { useMemo } from "react";
import styles from "./styles.module.scss";
import { fraction, fractionFiler } from "../../histogramFns";

type Props = { value: number; max: number };

export default function NormalHistogram({ value, max }: Props) {
  const gridTemplateRows = useMemo(
    () => `80px ${fractionFiler(max - value)} ${fraction(value)}`,
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
