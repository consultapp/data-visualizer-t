import { zodSystemData } from "@/src/zod";
import styles from "./styles.module.scss";
import { SYSTEM_PARTS, SystemParts } from "@/src/fixtures";
type Props = { data: zodSystemData; max: number };

export default function VerticalHistogram({ data, max }: Props) {
  console.log("zodSystemData", data);
  return (
    <div className={styles.root}>
      <div key={4}></div>
      {(Object.keys(SYSTEM_PARTS) as SystemParts[]).map((k, i) => (
        <div key={i}>{data[k]}</div>
      ))}
    </div>
  );
}
