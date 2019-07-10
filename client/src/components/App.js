import React from "react";
import MyList from "./myList";
import Recommendations from "./recommendations";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <MyList />
        <Recommendations />
      </div>
    );
  }
}

export default App;
