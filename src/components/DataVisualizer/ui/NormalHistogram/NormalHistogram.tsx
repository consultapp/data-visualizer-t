import { useMemo } from "react";
import styles from "./styles.module.scss";
import { fraction, fractionFiler, getScale } from "../../histogramFns";

type Props = { value: number; max: number };

export default function NormalHistogram({ value, max }: Props) {
  const scaleValue = useMemo(() => getScale(max), [max]);

  const gridTemplateRows = useMemo(
    () =>
      `80px ${fractionFiler(max - value, scaleValue)} ${fraction(
        value,
        scaleValue
      )}`,
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
