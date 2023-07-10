import React from "react";
import DisplayMovie from "./DisplayMovie";
import DisplaySingle from "./DisplaySingle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [jname, setj] = React.useState("");
  function clicked(data) {
    console.log(":::" + data);
    setj(data);
  }
  return (
    <div>
      <Routes>
        <Route path="" element={<DisplayMovie fun={clicked} />}></Route>
        <Route
          path="/movie"
          element={<DisplaySingle movienam={jname} />}
        ></Route>
      </Routes>
    </div>
  );
}
export default App;
