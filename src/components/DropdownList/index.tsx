// styles
import './style.css';

interface DropdownListProps {
    changed: (value: string) => void;
    label: string;
    value: string;
    items: string[];
}

const DropdownList = ({ changed, items, label, value }: DropdownListProps) => {
    return (
        <div className='dropdown-list'>
            <label>{label}</label>
            <select
                onChange={e => changed(e.target.value)}
                value={value}
            >
                <option value=""></option>
                {
                    items.map((item) => <option key={item}>{item}</option>)
                }
            </select>
        </div>
    );
};

export default DropdownList;