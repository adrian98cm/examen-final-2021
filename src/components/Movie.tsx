import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import "../styles/Style.css";

const Movie: FC<{ id: string }> = ({ id }) => {
  const [data, setData] = useState<any>();

  const url = "https://the-one-api.dev/v2/movie/" + id;

  useEffect(() => {
    axios
      .get(url, { headers: { Authorization: `Bearer 0iLtF9P5ro1VF2t9qCk8` } })
      .then((response) => {
        setData(response.data.docs);
      });
  }, [url]);

  if (data) {
    console.log("hay data de movie:");
    console.log(data);
  }

  return (
    <div className="show">
      {data && (
        <div>
          <div>Pelicula: </div>

          <div>{data[0].name}</div>
        </div>
      )}
    </div>
  );
};

export default Movie;
