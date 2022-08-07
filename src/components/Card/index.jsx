import './style.css';

// DUMB COMPONENT
const Card = ({ name, cardType, image }) => {
    return (
        <div className='card'>
            <div className='header'>
                <img src={image} alt={name} />
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{cardType}</h5>
            </div>
        </div>
    );
};

export default Card;