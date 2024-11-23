import { zodSystemData } from "@/src/zod";
import styles from "./styles.module.scss";
import {
  SYSTEM_PARTS,
  SYSTEM_TYPES,
  SystemParts,
  SystemTypes,
} from "@/src/fixtures";
import { useMemo } from "react";
import End from "../Lines/End";
import DoubleVerticalLine from "../Lines/DoubleVerticalLine";
import VerticalLine from "../Lines/VerticalLine";
type Props = { data: zodSystemData; max: number; type: SystemTypes };

export default function VerticalHistogram({ data, max, type }: Props) {
  console.log("zodSystemData", data);
  const sum = useMemo(() => data.sumSystemDataValues(), [data]);
  const values = useMemo(() => Object.keys(SYSTEM_PARTS) as SystemParts[], []);

  const gridTemplateRows = useMemo(
    () =>
      `50px ${max - sum}fr  20px ${values.map((k) => data[k]).join("fr ")}fr`,
    [max, sum, values, data]
  );

  console.log("VerticalHistogram:", max, sum, gridTemplateRows);
  return (
    <div className={styles.root} style={{ gridTemplateRows }}>
      <div key={-3}>-3</div>
      <div key={-2}>
        {type === SYSTEM_TYPES.test && <DoubleVerticalLine />}
        {type !== SYSTEM_TYPES.test && <VerticalLine />}
      </div>
      <div key={-1}>
        <End />
      </div>
      {values.map((k, i) => (
        <div key={i}>{data[k]}</div>
      ))}
    </div>
  );
}
