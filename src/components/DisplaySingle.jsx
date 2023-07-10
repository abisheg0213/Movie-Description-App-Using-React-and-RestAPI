import React from "react";
import Head from "./Head";
import Axios from "axios";
function DisplaySingle(props) {
  console.log("&&&&%%%%" + props.movienam);
  const [moviedata, setdata] = React.useState([]);
  React.useEffect(() => {
    let moviename = props.movienam;
    Axios.get("http://localhost:3000/movie/" + moviename).then((res) => {
      setdata(res.data);
    });
  }, []);
  return (
    <div>
      <Head />
      <br />
      <center>
        <img src={moviedata.img} alt="movie.png"></img>
        <br />
        <br />
        <p>
          <strong>Year of Release:</strong> {moviedata.year}
        </p>{" "}
        <p>
          {" "}
          <strong>Director:</strong> {moviedata.dir}
        </p>
        <p>
          <strong>Music Director: </strong>
          {moviedata.musicdir}
        </p>
      </center>
      <br />
      <p>{moviedata.para1}</p>
      <br />
      <p>{moviedata.para2}</p>{" "}
    </div>
  );
}
export default DisplaySingle;
