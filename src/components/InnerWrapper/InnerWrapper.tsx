import { zodDataVisualizer } from "@/src/zod";
import styles from "./styles.module.scss";
import { SYSTEM_TYPES, SystemTypes } from "@/src/fixtures";
import VerticalHistogram from "../VerticalHistogram/VerticalHistogram";
import { useMemo } from "react";
type Props = { data: zodDataVisualizer; max: number };

export default function InnerWrapper({ data, max }: Props) {
  const values = useMemo(() => Object.keys(SYSTEM_TYPES) as SystemTypes[], []);
  return (
    <div className={styles.root}>
      <div className={styles.root__bottom}>
        <div>
          <div></div>Клиентская часть
        </div>
        <div>
          <div></div>Серверная часть
        </div>
        <div>
          <div></div>База данных
        </div>
      </div>
      {values.map((k) => (
        <div className={styles.root__col} data-type={k} key={k}>
          <VerticalHistogram data={data[k]} max={max} />
        </div>
      ))}
      {values.map((k) => (
        <div className={styles.root__colTitle} data-type={k} key={`title_${k}`}>
          {k}
        </div>
      ))}
      <div className={styles.root__col} data-type="normal"></div>
      <div className={styles.root__colTitle} data-type="normal">
        норматив
      </div>
    </div>
  );
}
