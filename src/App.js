import { useState, useEffect } from "react";
import axios from "axios";
import CatCard from "./Components/CatCard/CatCard";
import Form from "react-bootstrap/Form";
import "./App.css";

function App() {
  const [catData, setcatData] = useState();
  const [selected, setSelected] = useState("");
  const [chosen, setChosen] = useState();

  // call cat API
  const getCatData = async () => {
    const response = await axios.get(`https://api.thecatapi.com/v1/breeds`);
    setcatData(response.data);
    const sol = catData.filter((c) => c.name === selected);
    setChosen(sol[0]);
  };
  // Load Searched cat
  useEffect(() => {
    getCatData();
  }, []);
  // change on selection
  const handleChange = (e) => {
    setSelected(e.target.value);
    const sol = catData.filter((c) => c.name === e.target.value);
    setChosen(sol[0]);
  };
  return (
    <div className="App">
      <div className="selecteur">
        <p>
          Please select a cat name to display all the necessary informations
        </p>
        <Form.Select
          aria-label="Default select example"
          value={selected}
          onChange={(e) => handleChange(e)}
        >
          <option> Choose a type of cat ...</option>

          {catData &&
            catData.map((cat) => <option key={cat.id}>{cat.name}</option>)}
        </Form.Select>
      </div>
      {chosen && <CatCard chosen={chosen} />}
    </div>
  );
}

export default App;
