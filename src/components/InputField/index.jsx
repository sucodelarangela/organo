// styles
import './style.css';

const InputField = (props) => {
    const handleChange = (e) => {
        props.changed(e.target.value);
    };

    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input value={props.value} onChange={handleChange} type="text" placeholder={props.placeholder} required={props.required} />
        </div>
    );
};

export default InputField;

// props = properties received from App or other component