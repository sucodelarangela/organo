// styles
import './style.css';

const DropdownList = (props) => {


    return (
        <div className='dropdown-list'>
            <label>{props.label}</label>
            <select onChange={e => props.changed(e.target.value)} value={props.value}>
                {
                    props.items.map((item) => <option key={item}>{item}</option>)
                }
            </select>
        </div>
    );
};

export default DropdownList;