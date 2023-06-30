import { useState } from "react";
import { Chart } from "react-google-charts";

import "./styles.css";

export default function App() {
  const [data, setData] = useState([
    ["Evénements", "Nombre"],
    ["Tertiaire", 11],
    ["Batiment", 3],
    ["Industrie", 7],
  ]);

  const options = {
    title: "Evénements par secteur",
    is3D: true,
  };

  return (
    <div className="App">
      <h1>Graphiques</h1>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
}
