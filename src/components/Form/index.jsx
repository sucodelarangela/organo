// styles
import './style.css';

// hooks
import { useState } from 'react';

// components
import InputField from '../InputField';
import DropdownList from '../DropdownList';
import Button from '../Button';

const Form = (props) => {
    const teams = [
        'Neutros',
        'Nilfgaard',
        'Monstros',
        'Skellige',
        'Reinos do Norte',
        "Scoia'tael",
        'Sindicato'
    ];

    // states
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // sending professional data to App.js state
        props.registeredProfessionals({
            name,
            job,
            image,
            team
        });
    };

    return (
        <section className='formulario'>
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar os cards</h2>
                <InputField
                    label='Nome da carta'
                    placeholder='Digite seu nome'
                    required={true}
                    value={name}
                    changed={value => setName(value)}
                />
                <InputField
                    label='Tipo de carta'
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
                    label='Facção'
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