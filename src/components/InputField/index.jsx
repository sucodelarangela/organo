import './style.css';

const InputField = (props) => {
    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input type="text" placeholder={props.placeholder} />
        </div>
    );
};

export default InputField;

// props = properties received from App or other component