import { LOADING_STATUS } from "@/src/consts";
import { zodDataVisualizer } from "@/src/zod";
import { useEffect, useState } from "react";

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

export default useLoadData;
