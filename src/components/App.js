import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let relatives = [
      {
        key: "relativeListItem1",
        value: "mamaji"
      },
      {
        key: "relativeListItem2",
        value: "mamiji"
      }
    ];
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <ol key="relativeList">
          {relatives.map((relative) => (
            <li key={relative.key} />
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
