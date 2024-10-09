import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);
  const [style, setStyle] = useState({ visibility: "hidden" });
  const [stylePara, setStylePara] = useState({ visibility: "hidden" });
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setData(res.data);
        if (id !== 0 && id !== "") {
          setStyle({ visibility: "visible" });
          setStylePara({ visibility: "hidden" });
        } else {
          setStyle({ visibility: "hidden" });
          setStylePara({ visibility: "visible" });
        }
      })
      .catch((e) => {
        console.log(e.message);
        setStyle({ visibility: "hidden" });
        setStylePara({ visibility: "visible" });
      });
  }, [id]);
  console.log("id = " + id);

  return (
    <div className="App">
      <input type="text" onKeyUp={(e) => setId(e.target.value)} />
      <div className="info" style={style}>
        <h2 style={stylePara}>No data available at the time.</h2>

        <div className="col-1">
          <p>name : {data.name}</p>
          <p>name : {data.username}</p>
          <p>name : {data.email}</p>
        </div>
        <div className="col-2">
          <p>name : {data.address ? data.address.street : <></>}</p>
          <p>name : {data.address ? data.address.city : <></>}</p>
          <p>name : {data.address ? data.address.geo.lng : <></>}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
