import './style.css';

interface InputFieldProps {
    changed: (value: string) => void;
    label: string;
    value: string;
    placeholder: string;
    required: boolean;
}

const InputField = ({ changed, label, placeholder, required, value }: InputFieldProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changed(e.target.value);
    };

    return (
        <div className='campo-texto'>
            <label>{label}</label>
            <input
                value={value}
                onChange={handleChange}
                type="text"
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
};

export default InputField;