// styles
import './style.css';

// hooks
import { useState } from 'react';

// components
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

    // states
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('O form foi submetido =>', name, job, image, team);
    };

    return (
        <section className='formulario'>
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar os cards do colaborador</h2>
                <InputField
                    label='Nome'
                    placeholder='Digite seu nome'
                    required={true}
                    value={name}
                    changed={value => setName(value)}
                />
                <InputField
                    label='Cargo'
                    placeholder='Digite seu cargo'
                    required={true}
                    value={job}
                    changed={value => setJob(value)}
                />
                <InputField
                    label='Imagem'
                    placeholder='Informe o endereço url da imagem'
                    value={image}
                    changed={value => setImage(value)}
                />
                <DropdownList
                    label='Time'
                    items={teams}
                    value={team}
                    changed={value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    );
};

export default Form;