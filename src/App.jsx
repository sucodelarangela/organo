// components
import { useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Form from './components/Form';
import Team from "./components/Team";

function App() {
  const teams = [
    {
      name: 'Neutros',
      primaryColor: '#614d3a',
      secondaryColor: '#e1d3b7'
    },
    {
      name: 'Nilfgaard',
      primaryColor: '#222222',
      secondaryColor: '#cccccc'
    },
    {
      name: 'Monstros',
      primaryColor: '#931507',
      secondaryColor: '#ffd1cc'
    },
    {
      name: 'Skellige',
      primaryColor: '#5b4e79',
      secondaryColor: '#c7c1d7'
    },
    {
      name: 'Reinos do Norte',
      primaryColor: '#61837',
      secondaryColor: '#d1e0fa'
    },
    {
      name: "Scoia'tael",
      primaryColor: '#505f30',
      secondaryColor: '#d2ddbb'
    },
    {
      name: 'Sindicato',
      primaryColor: '#7e450b',
      secondaryColor: '#fbe6d0'
    }
  ];

  const [professionals, setProfessionals] = useState([]);

  const handleNewProfessional = (professional) => {
    console.log(professional);
    // create a new array with all the previous professionals and add the new one at the end
    setProfessionals([...professionals, professional]);
  };

  return (
    <div className="App">
      <Banner />
      <Form teamNames={teams.map((team) => team.name)} registeredProfessionals={professional => handleNewProfessional(professional)} />
      {
        teams.map((team) => (
          <Team
            key={team.name}
            name={team.name}
            primaryColor={team.primaryColor}
            secondaryColor={team.secondaryColor}
            professionals={professionals.filter(professional => professional.team === team.name)}
          />
        ))
      }
      <Footer />
    </div>
  );
}

export default App;
