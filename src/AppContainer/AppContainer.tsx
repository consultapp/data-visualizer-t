import { LOADING_STATUS } from "@/src/consts";
import useLoadData from "@/src/hooks/useLoadData/useLoadData";
import DataVisualizer from "@/src/components/DataVisualizer/DataVisualizer";

const dataLinks = [
  "https://rcslabs.ru/ttrp1.json",
  "https://rcslabs.ru/ttrp2.json",
  //   "https://rcslabs.ru/ttrp3_.json",
  //   "https://rcslabs.ru/ttrp4.json",
  //   "https://rcslabs.ru/ttrp5.json]",
];

export default function AppContainer() {
  const { loading, data } = useLoadData(dataLinks);

  console.log("data", data, loading);

  if (!data || !data.length || loading === LOADING_STATUS.error)
    return <div>Data Error.</div>;

  return (
    <div>
      {data.map((d, i) => (
        <DataVisualizer data={d} key={d.title + i} />
      ))}
    </div>
  );
}
