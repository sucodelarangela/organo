import './style.css';

// DUMB COMPONENT
const Card = () => {
    return (
        <div className='card'>
            <div className='header'>
                <img src="https://github.com/sucodelarangela.png" alt="Angela Caldas" />
            </div>
            <div className='footer'>
                <h4>Angela Caldas</h4>
                <h5>Desenvolvedora</h5>
            </div>
        </div>
    );
};

export default Card;