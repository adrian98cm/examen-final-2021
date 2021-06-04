import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import CharacterQuote from "../components/CharacterQuote";
import "../styles/Style.css";

const CharactersSearch: FC = () => {
  const [data, setData] = useState<any>();
  const [name, setName] = useState<string>("");
  // const url = "https://the-one-api.dev/v2/character?name="+name;

  const [counter, setCounter] = useState<number>(10);
  const [url, setUrl] = useState<string>("");
  useEffect(() => {
    axios
      .get(url, { headers: { Authorization: `Bearer 0iLtF9P5ro1VF2t9qCk8` } })
      .then((response) => {
        setData(response.data.docs);
      });
  }, [url]);

  if (data) console.log(data);
  let text = "";

  return (
    <div>
      <div className="header">
        <input type="text" onChange={(e) => (text = e.target.value)} />
        <button
          onClick={() => {
            if (text) {
              setName(text);
              setUrl("https://the-one-api.dev/v2/character?name=" + text);
            }
          }}
        >
          Search
        </button>
      </div>
      <div className="body">
        {/* {data &&
            data
              .map((r: { name: string, race:string, spouse:string, gender:string, _id:string }, index: number) => (
                <div className="show">
                  <div>Personaje introducido: {r.name}</div>
                         
                  <CharacterQuote id={r._id}></CharacterQuote>

                </div>
              ))} */}

        {data && (
          <div>
            <div>Personaje introducido: {data[0].name}</div>
            <CharacterQuote id={data[0]._id}></CharacterQuote>
          </div>
        ) }

        {!data && (
          
            <div className="show">
              <img
                width="200px"
                height="180px"
                src="https://ep01.epimg.net/cultura/imagenes/2014/05/29/actualidad/1401384900_228592_1401386334_sumario_normal.jpg"
                alt=""
              ></img>
              <h1>No encontrado</h1>
            </div>
          
        )}
      </div>
    </div>
  );
};

export default CharactersSearch;
