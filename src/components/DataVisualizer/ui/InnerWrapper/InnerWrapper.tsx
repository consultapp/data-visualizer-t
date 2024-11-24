import { zodDataVisualizer } from "@/src/zod";
import styles from "./styles.module.scss";
import { SYSTEM_TYPES, SystemTypes } from "@/src/fixtures";
import VerticalHistogram from "../VerticalHistogram/VerticalHistogram";
import { useMemo } from "react";
import NumberBadge from "../NumberBadge/NumberBadge";
type Props = { data: zodDataVisualizer; max: number };

const RU_NAMES = ["Клиентская часть", "Серверная часть", "База данных"];

export default function InnerWrapper({ data, max }: Props) {
  const values = useMemo(() => Object.keys(SYSTEM_TYPES) as SystemTypes[], []);
  const badge1 = useMemo(
    () =>
      data[SYSTEM_TYPES.test].sumSystemDataValues() -
      data[SYSTEM_TYPES.dev].sumSystemDataValues(),
    [data]
  );
  const badge2 = useMemo(
    () =>
      data[SYSTEM_TYPES.prod].sumSystemDataValues() -
      data[SYSTEM_TYPES.test].sumSystemDataValues(),
    [data]
  );

  return (
    <div className={styles.root}>
      <div className={styles.root__bottom}>
        {RU_NAMES.map((n) => (
          <div key={n}>
            <div></div>
            {n}
          </div>
        ))}
      </div>
      <div className={styles.root__badge1}>
        <NumberBadge value={badge1} />
      </div>
      <div className={styles.root__badge2}>
        <NumberBadge value={badge2} />
      </div>
      {values.map((k) => (
        <div className={styles.root__col} data-type={k} key={k}>
          <VerticalHistogram data={data[k]} max={max} type={k} />
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
