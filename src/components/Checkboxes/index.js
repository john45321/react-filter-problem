import {useState} from 'react';
import {handleToggle} from '../../utils';

const Checkboxes = ({list, handleFilters}) => {
    const [checkedArray, setCheckedArray] = useState([]);

    const onChangeHandler = (checkboxId) => {
        const newState = handleToggle(checkboxId, checkedArray);
        setCheckedArray(newState);
        // Update this checked information into Parent Component
        handleFilters(newState);
    };

    return list.map((item, index) => {
        return (
            <div key={index}>
                <input
                    type="checkbox"
                    id={item.name}
                    checked={checkedArray.indexOf(item.id) !== -1}
                    onChange={() => onChangeHandler(item.id)}
                />
                <label htmlFor={item.name}>{item.label}</label>
            </div>
        );
    });
};

export default Checkboxes;
