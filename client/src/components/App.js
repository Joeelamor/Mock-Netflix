import React from "react";
import MyList from "./myList";
import Recommendations from "./recommendations";
import TitleList from "./titleList";

const App = () => {
  return (
    <div className="App">
      <MyList />
      <Recommendations />
      <TitleList />
    </div>
  );
};

export default App;
