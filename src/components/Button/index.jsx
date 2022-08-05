// styles
import './style.css';

const Button = (props) => {
    return (
        <button className='button'>{props.children}</button>
    );
};

export default Button;

// children receives the children elements from other component instead of properties as attributes