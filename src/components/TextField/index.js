import { Input, InputPassword } from "../../components";
import './style.scss';


const TextField = ({ id, name, type, placeholder, onChange, value }) => {
    return (
        <div className='textfield'>
            <label htmlFor={id}>{name}</label>
            { type==='password' ?  
            <InputPassword 
                icon = "fa-solid fa-unlock-keyhole"
                placeholder={placeholder}     
                onChange={onChange}
                value={value}
            /> :
            <Input 
                placeholder={placeholder} 
                type={type} 
                id={id} 
                onChange={onChange} 
                value={value}
            />}
        </div>
    );
};

export default TextField;