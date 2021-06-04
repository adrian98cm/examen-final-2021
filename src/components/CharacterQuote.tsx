import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "../styles/Style.css";

const CharacterQuote: FC<{ id: string }> = ({ id }) => {
  const [data, setData] = useState<any>();
  const [aleatorio, setAleatorio] = useState<number>(0);

  const url = "https://the-one-api.dev/v2/character/" + id + "/quote";

  useEffect(() => {
    axios
      .get(url, { headers: { Authorization: `Bearer 0iLtF9P5ro1VF2t9qCk8` } })
      .then((response) => {
        setData(response.data.docs);
      });
  }, [url]);

  if (data) {
    console.log("hay data de quote:");
    console.log(data);
    console.log(data.length);
    //  setAleatorio(Math.round(Math.random()*data.length));
  }

  return (
    <div className="show">
      {data && (
        <div className="show">
          <div>Cita aleatoria del personaje: </div>

          {/* <div>{data[aleatorio].dialog}</div>
          <Movie id={data[aleatorio].movie}></Movie> */}

          <div>{data[0].dialog}</div>
          <Movie id={data[0].movie}></Movie>
        </div>
      )}
    </div>
  );
};

export default CharacterQuote;
