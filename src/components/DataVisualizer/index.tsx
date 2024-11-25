import { zodDataVisualizer } from "@/src/zod";
import DataVisualizerWrapper from "./ui/DataVisualizerWrapper/DataVisualizerWrapper";
import InnerWrapper from "./ui/InnerWrapper/InnerWrapper";
import { memo, useMemo } from "react";
import { SYSTEM_TYPES } from "@/src/fixtures";

type Props = { data: zodDataVisualizer };

const DataVisualizer = memo(function ({ data }: Props) {
  const max = useMemo(() => {
    return Object.entries(data).reduce((acc, [k, v]) => {
      let tmp = 0;
      if (k in SYSTEM_TYPES) {
        tmp += Object.values(v).reduce((a, v) => a + v, 0);
      }
      return Math.max(acc, tmp, data.norm);
    }, 0);
  }, [data]);

  return (
    <DataVisualizerWrapper title={data.title}>
      <InnerWrapper data={data} max={max} />
    </DataVisualizerWrapper>
  );
});

export default DataVisualizer;
