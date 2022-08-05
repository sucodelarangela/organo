// components
import { useState } from "react";
import Banner from "./components/Banner";
import Form from './components/Form';

function App() {
  const [professionals, setProfessionals] = useState([]);

  const handleNewProfessional = (professional) => {
    console.log(professional);
    // create a new array with all the previous professionals and add the new one at the end
    setProfessionals([...professionals, professional]);
  };

  return (
    <div className="App">
      <Banner />
      <Form registeredProfessionals={professional => handleNewProfessional(professional)} />
    </div>
  );
}

export default App;
