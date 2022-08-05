import './style.css';

const InputField = (props) => {
    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input type="text" placeholder={props.placeholder} required={props.required} />
        </div>
    );
};

export default InputField;

// props = properties received from App or other component