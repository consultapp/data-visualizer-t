import { LOADING_STATUS } from "@/src/fixtures";
import useLoadData from "@/src/hooks/useLoadData/useLoadData";
import DataVisualizer from "@/src/containers/DataVisualizer/DataVisualizer";
import styles from "./styles.module.scss";

const dataLinks = [
  "https://rcslabs.ru/ttrp1.json",
  // "https://rcslabs.ru/ttrp2.json",
  // "https://rcslabs.ru/ttrp3.json",
  // "https://rcslabs.ru/ttrp4.json",
  //   "https://rcslabs.ru/ttrp5.json]",
];

export default function AppContainer() {
  const { loading, data } = useLoadData(dataLinks);

  if (loading === LOADING_STATUS.pending) return <div>Data Loading.</div>;

  if (!data || !data.length || loading === LOADING_STATUS.error)
    return <div>Data Error.</div>;

  return (
    <div className={styles.root}>
      {data.map((d, i) => (
        <DataVisualizer data={d} key={d.title + i} />
      ))}
    </div>
  );
}
