import './style.css';

interface CardProps {
    name: string;
    job: string;
    image: string;
    cardColor: string;
}

// DUMB COMPONENT
const Card = ({ name, job, image, cardColor }: CardProps) => {
    return (
        <div className='card'>
            <div className='header' style={{ backgroundColor: cardColor }}>
                <img src={image} alt={name} />
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{job}</h5>
            </div>
        </div>
    );
};

export default Card;