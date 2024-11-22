import { useEffect, useState } from "react";
import { LOADING_STATUS, zodDataVisualizer } from "../zod";
import DataVisualizer from "../components/DataVisualizer/DataVisualizer";

const dataLinks = [
  "https://rcslabs.ru/ttrp1.json",
  "https://rcslabs.ru/ttrp2.json",
  //   "https://rcslabs.ru/ttrp3_.json",
  //   "https://rcslabs.ru/ttrp4.json",
  //   "https://rcslabs.ru/ttrp5.json]",
];

async function loadData(links: string[]) {
  return Promise.allSettled(
    links.map((link) => {
      return fetch(link);
    })
  );
}

function useLoadData(links: string[]) {
  const [loading, setLoading] = useState(LOADING_STATUS.idle);
  const [data, setData] = useState<zodDataVisualizer[]>();

  useEffect(() => {
    if (loading === LOADING_STATUS.idle && links.length) {
      setLoading(LOADING_STATUS.pending);
      loadData(links)
        .then((data) =>
          Promise.all(
            data
              .map((d) => {
                if (d.status === "fulfilled") return d.value.json();
              })
              .filter((item) => !!item)
          )
        )
        .then((data) => {
          const result = data
            .map((d) => zodDataVisualizer.safeParse(d))
            .filter(({ success }) => success === true)
            .map((r) => r.data);

          if (result.length) {
            console.log("Result", result);
            setData(result as zodDataVisualizer[]);
            setLoading(LOADING_STATUS.fullfiled);
          } else throw new Error("Parse Data Error.");
        })
        .catch(() => {
          setData([]);
          setLoading(LOADING_STATUS.error);
          throw new Error("Load Data Error.");
        });
    }
  }, []);

  return { loading, data };
}

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
