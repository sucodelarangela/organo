// styles
import './style.css';

// ccomponents
import InputField from '../InputField';
import DropdownList from '../DropdownList';

const Form = () => {
    const teams = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ];

    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar os cards do colaborador</h2>
                <InputField label='Nome' placeholder='Digite seu nome' />
                <InputField label='Cargo' placeholder='Digite seu cargo' />
                <InputField label='Imagem' placeholder='Informe o endereço url da imagem' />
                <DropdownList label='Time' items={teams} />
            </form>
        </section>
    );
};

export default Form;