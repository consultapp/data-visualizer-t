import { zodDataVisualizer } from "../../zod";

type Props = { data: zodDataVisualizer };

export default function DataVisualizer({ data }: Props) {
  console.log("data", data);
  return <div>DataVisualizer: {data.title}</div>;
}
