import React, { FC, useEffect, useState } from "react";
import Characters from "./components/Characters";
import CharactersSearch from "./components/CharactersSearch";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Components">
        <CharactersSearch></CharactersSearch>

        {/* <div>LIsta para comprobar la lista de personajes</div>
              <Characters></Characters> */}
      </div>
    </div>
  );
}

export default App;
