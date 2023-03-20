// components
import { useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Form from './components/Form';
import Team from "./components/Team";
import { IProfessional } from "./shared/interfaces/IProfessional";

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
      primaryColor: '#061837',
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

  const [professionals, setProfessionals] = useState<IProfessional[]>([
    {
      name: 'Yennefer: Ilusionista',
      job: 'Humano, Mago',
      image: 'https://www.playgwent.com/uploads/media/assets_preview/0001/40/thumb_39337_assets_preview_small_f155d916a7eae79732375c8f07c8079a3531a23c.jpg',
      team: 'Neutros'
    },
    {
      name: 'Geralt: Profissional',
      job: 'Bruxo',
      image: 'https://www.playgwent.com/uploads/media/assets_preview/0001/29/thumb_28255_assets_preview_small.jpg',
      team: 'Neutros'
    },
    {
      name: 'Ciri',
      job: 'Bruxo',
      image: 'https://www.playgwent.com/uploads/media/assets_preview/0001/26/thumb_25099_assets_preview_small.jpg',
      team: 'Neutros'
    },
    {
      name: 'Eredin Bréacc Glas',
      job: 'Elfo, Caçada Selvagem',
      image: 'https://www.playgwent.com/uploads/media/assets_preview/0001/26/thumb_25648_assets_preview_small.jpg',
      team: 'Monstros'
    },
    {
      name: 'Rainha da Noite',
      job: 'Vampiro',
      image: 'https://www.playgwent.com/uploads/media/assets_preview/0001/29/thumb_28912_assets_preview_big.jpg',
      team: 'Monstros'
    },
    {
      name: 'Miruna',
      job: 'Relicto',
      image: 'https://www.playgwent.com/uploads/media/assets_preview/0001/26/thumb_25708_assets_preview_big.jpg',
      team: 'Monstros'
    },
    {
      name: 'Emhyr var Emreis',
      job: 'Humano, Aristocrata',
      image: 'https://www.playgwent.com/uploads/media/assets_preview/0001/28/thumb_27430_assets_preview_big.jpg',
      team: 'Nilfgaard'
    },
    {
      name: 'Fringilla Vigo',
      job: 'Humano, Mago',
      image: 'https://www.playgwent.com/uploads/media/assets_preview/0001/27/thumb_26557_assets_preview_big.jpg',
      team: 'Nilfgaard'
    },
    {
      name: 'Suborno',
      job: 'Tática',
      image: 'https://www.playgwent.com/uploads/media/assets_preview/0001/27/thumb_26767_assets_preview_big.jpg',
      team: 'Nilfgaard'
    },
    {
      name: 'Philippa: Fúria Cega',
      job: 'Humano, Mago',
      image: 'https://www.playgwent.com/uploads/media/assets_preview/0001/32/thumb_31195_assets_preview_big.jpg',
      team: 'Reinos do Norte'
    },
    {
      name: 'Dandelion',
      job: 'Humano, Agente, Bardo',
      image: 'https://www.playgwent.com/uploads/media/assets_preview/0001/26/thumb_25471_assets_preview_big.jpg',
      team: 'Reinos do Norte'
    },
    {
      name: 'Feiticeira Condenada',
      job: 'Espectro, Mago, Amaldiçoado',
      image: 'https://www.playgwent.com/uploads/media/assets_preview/0001/29/thumb_28042_assets_preview_big.jpg',
      team: 'Reinos do Norte'
    },
    {
      name: 'Zoltan: Guerreiro',
      job: 'Anão, Guerreiro',
      image: 'https://www.playgwent.com/uploads/media/assets_preview/0001/32/thumb_31423_assets_preview_big.jpg',
      team: "Scoia'tael"
    },
    {
      name: 'Francesca Findabair',
      job: 'Elgo, Mago',
      image: 'https://www.playgwent.com/uploads/media/assets_preview/0001/28/thumb_27457_assets_preview_big.jpg',
      team: "Scoia'tael"
    },
    {
      name: 'Natureza Elaboradora',
      job: 'Natureza',
      image: 'https://www.playgwent.com/uploads/media/assets_preview/0001/33/thumb_32521_assets_preview_big_d94daa6855e26d857d67b7eb32d1bd6dd661d11c.jpg',
      team: "Scoia'tael"
    },
    {
      name: 'Cerys an Craite',
      job: 'Humano, Guerreiro',
      image: 'https://www.playgwent.com/uploads/media/assets_preview/0001/28/thumb_27514_assets_preview_big.jpg',
      team: "Skellige"
    },
    {
      name: 'Crach an Craite',
      job: 'Humano, Pirata',
      image: 'https://www.playgwent.com/uploads/media/assets_preview/0001/30/thumb_29473_assets_preview_big.jpg',
      team: "Skellige"
    },
    {
      name: 'Mãe dos Corvos',
      job: 'Humano, Druida',
      image: 'https://www.playgwent.com/uploads/media/assets_preview/0001/32/thumb_31936_assets_preview_big.jpg',
      team: "Skellige"
    },
    {
      name: 'Sigi Reuven',
      job: 'Humano',
      image: 'https://www.playgwent.com/uploads/media/assets_preview/0001/30/thumb_29533_assets_preview_big.jpg',
      team: "Sindicato"
    },
    {
      name: 'Caleb Menge',
      job: 'Humano, Caçador de Bruxas',
      image: 'https://www.playgwent.com/uploads/media/assets_preview/0001/30/thumb_29512_assets_preview_big.jpg',
      team: "Sindicato"
    },
    {
      name: 'Boris',
      job: 'Fera, Biltres',
      image: 'https://www.playgwent.com/uploads/media/assets_preview/0001/30/thumb_29908_assets_preview_big.jpg',
      team: "Sindicato"
    }
  ]);

  const handleNewProfessional = (professional: IProfessional) => {
    // create a new array with all the previous professionals and add the new one at the end
    setProfessionals([...professionals, professional]);
  };

  return (
    <div className="App">
      <Banner imgSrc="/images/gwent.png" altText="banner principal da página do Organo" />
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
