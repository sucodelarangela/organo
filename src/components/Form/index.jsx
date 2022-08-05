// styles
import './style.css';

// ccomponents
import InputField from '../InputField';

const Form = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar os cards do colaborador</h2>
                <InputField label='Nome' placeholder='Digite seu nome' />
                <InputField label='Cargo' placeholder='Digite seu cargo' />
                <InputField label='Imagem' placeholder='Informe o endereço url da imagem' />
            </form>
        </section>
    );
};

export default Form;