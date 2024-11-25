import { zodSystemData } from "@/src/zod";
import styles from "./styles.module.scss";
import {
  SYSTEM_PARTS,
  SYSTEM_TYPES,
  SystemParts,
  SystemTypes,
} from "@/src/fixtures";
import { useMemo } from "react";

import TwoColumns from "../TwoColumns/TwoColumns";
import RightCornerArrow from "../Lines/RightCornerArrow";
import LeftCornerArrow from "../Lines/LeftCornerArrow";
import { fraction, fractionFiler, getScale } from "../../histogramFns";

type Props = { data: zodSystemData; max: number; type: SystemTypes };

const directions = {
  [SYSTEM_TYPES.dev]: <RightCornerArrow />,
  [SYSTEM_TYPES.test]: (
    <TwoColumns>
      <LeftCornerArrow w100={true} />
      <RightCornerArrow w100={true} />
    </TwoColumns>
  ),
  [SYSTEM_TYPES.prod]: <LeftCornerArrow />,
} as const;

export default function VerticalHistogram({ data, max, type }: Props) {
  const sum = useMemo(() => data.sumSystemDataValues(), [data]);
  const values = useMemo(() => Object.keys(SYSTEM_PARTS) as SystemParts[], []);
  const scaleValue = useMemo(() => getScale(max), [max]);

  const gridTemplateRows = useMemo(
    () =>
      `80px ${fractionFiler(max - sum, scaleValue)} ${values
        .map((k) => fraction(data[k], scaleValue))
        .join(" ")}`,
    [max, sum, scaleValue, values, data]
  );

  return (
    <div className={styles.root} style={{ gridTemplateRows }}>
      <div key={-1} data-type="filler">
        {directions[type]}
      </div>
      {values.map((k, i) => (
        <div key={i} data-system-part={k}>
          {data[k]}
        </div>
      ))}
    </div>
  );
}
