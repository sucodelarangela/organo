// styles
import './style.css';

// ccomponents
import InputField from '../InputField';
import DropdownList from '../DropdownList';
import Button from '../Button';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('O form foi submetido');
    };

    return (
        <section className='formulario'>
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar os cards do colaborador</h2>
                <InputField label='Nome' placeholder='Digite seu nome' required={true} />
                <InputField label='Cargo' placeholder='Digite seu cargo' required={true} />
                <InputField label='Imagem' placeholder='Informe o endereço url da imagem' />
                <DropdownList label='Time' items={teams} />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    );
};

export default Form;