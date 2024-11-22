import { zodDataVisualizer } from "@/src/zod";
import DataVisualizerWrapper from "../ui/DataVisualizerWrapper/DataVisualizerWrapper";

type Props = { data: zodDataVisualizer };

export default function DataVisualizer({ data }: Props) {
  return (
    <DataVisualizerWrapper title={data.title}>Container</DataVisualizerWrapper>
  );
}
