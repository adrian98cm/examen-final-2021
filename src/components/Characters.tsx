import React, { FC, useEffect, useState } from "react";
import axios from "axios";

const Characters: FC = () => {
  const [data, setData] = useState<any>();
  const url = "https://the-one-api.dev/v2/character";
  // const url = "https://the-one-api.dev/v2/character?limit=10";
  const [counter, setCounter] = useState<number>(10);

  useEffect(() => {
    axios
      .get(url, { headers: { Authorization: `Bearer 0iLtF9P5ro1VF2t9qCk8` } })
      .then((response) => {
        setData(response.data.docs);
      });
  }, [url]);

  if (data) console.log(data);

  return (
    <div>
      <div className="data">
        {data &&
          data
            .slice(counter - 10, counter)
            .map((r: { name: string }, index: number) => (
              <div className="Datacountry">
                <div>{index + counter - 9 + "º " + r.name}</div>
              </div>
            ))}
      </div>

      <div>
        <button
          onClick={() => {
            if (counter > 10) setCounter(counter - 10);
          }}
        >
          Anterior
        </button>
        <button
          onClick={() => {
            if (counter < 923) setCounter(counter + 10);
          }}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Characters;
