import Card from '../Card';
import './style.css';

const Team = (props) => {
    return (
        // returning the section only if we have professionals on the section
        (props.professionals.length > 0) && <section
            className='team'
            style={{
                backgroundColor: props.secondaryColor
            }}
        >
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>

            <div className='professionals'>
                {
                    props.professionals.map(professional => <Card key={professional.name} name={professional.name} job={professional.job} image={professional.image} />)
                }
            </div>
        </section>
    );
};

export default Team;

// when we have components that only receives data, we usually call it DUMB COMPONENT