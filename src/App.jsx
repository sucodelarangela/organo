// components
import Banner from "./components/Banner";
import InputField from "./components/InputField";

function App() {
  return (
    <div className="App">
      <Banner />
      <InputField label='Nome' placeholder='Digite seu nome' />
      <InputField label='Cargo' placeholder='Digite seu cargo' />
      <InputField label='Imagem' placeholder='Informe o endereço url da imagem' />
    </div>
  );
}

export default App;
