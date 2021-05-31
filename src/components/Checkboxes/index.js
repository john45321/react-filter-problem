import {useState} from 'react';
import {handleToggle} from '../../utils';

const Checkboxes = ({list, handleFilters}) => {
    const [checkedArray, setCheckedArray] = useState([]);

    const onChangeHandler = (checkboxId) => {
        const newState = handleToggle(checkboxId, checkedArray);
        setCheckedArray(newState);
        // Update this checked information into Parent Component
        // The end array will be something like this:
        // [2, 3, 4]
        // ['Action', 'Comedy', 'Drama', 'Thriller']
        const mapIdToValueArray = newState.map((id) => {
            return list[id].value;
        });
        handleFilters(mapIdToValueArray);
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
