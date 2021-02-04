import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList"
import Filter from "./Filter"

import hogs from "../porkers_data";


function App() {
  const [showGreased, setShowGreased] = useState(false);
  const [sortBy, setSortBy] = useState("name");



  const hogsToDisplay = hogs
  // why is the second statement in the ternary "true"????
    .filter((hog) => (showGreased ? hog.greased : true))
    // why do we put in two different hogs? Why are they named 1 and 2?
    .sort((hog1, hog2) => {
      // where does sortBy come from?
      // first condition handles the weight
      if (sortBy === "weight") {
        return hog1.weight - hog2.weight;
      } else {
        // second condition handles the name
        // need to understand .localeCompare method?? 0/1 values??
        return hog1.name.localeCompare(hog2.name);
      }
    });

  return (
    <div className="ui grid container App">
      <div className="sixteen wide column centered">
        <Nav />
      </div>
      <div className="sixteen wide column centered">
        <Filter
        // what is this
          showGreased={showGreased}
          onChangeShowGreased={setShowGreased}
          // what is this
          sortBy={sortBy}
          onChangeSortBy={setSortBy}
        />
      </div>
      <div className="sixteen wide column centered">
        <HogList hogs={hogsToDisplay} />
      </div>
    </div>
  );
}


export default App;


