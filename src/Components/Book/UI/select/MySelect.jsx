
import classes from './MySelect.module.css'

const MySelect = ({defaultValue, options, value, onChange}) => {
   
    return (
        <select 
            value={value} 
            onChange={event => onChange(event.target.value)}
            className={classes.mySelect}
        >
            <option disabled value=''>{defaultValue}</option>
            {options.map(item => {
                return  <option 
                            key={item.value} 
                            value={item.value}
                        >
                            {item.name}
                        </option>
                })
            }
        </select>
    );
};

export default MySelect;