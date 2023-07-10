import React from "react";
import Card from "./Card";
import Head from "./Head";
import Axios from "axios";

function DisplayMovie(props) {
  function createCard(data) {
    return (
      <Card
        image={data.img}
        title={data.title}
        year={data.year}
        func={buttonclicked}
      ></Card>
    );
  }
  function buttonclicked(data) {
    console.log("***" + data);
    props.fun(data);
  }
  const [mdata, setmdata] = React.useState([]);
  React.useEffect(() => {
    Axios.get("http://localhost:3000/allmovies").then((res) => {
      console.log(res.data);
      setmdata(res.data);
    });
  }, []);
  return (
    <div>
      <Head />
      {mdata.map(createCard)}
    </div>
  );
}
export default DisplayMovie;
