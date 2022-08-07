import Card from '../Card';
import './style.css';

const Team = (props) => {
    return (
        <section
            className='team'
            style={{
                backgroundColor: props.secondaryColor
            }}
        >
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>

            <div className='professionals'>
                {
                    props.professionals.map(professional => <Card name={professional.name} cardType={professional.cardType} image={professional.image} />)
                }
            </div>
        </section>
    );
};

export default Team;

// when we have components that only receives data, we usually call it DUMB COMPONENT