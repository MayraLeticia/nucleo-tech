import React, { useState } from 'react';
import './style.scss'; 

const InputPassword = ({ variant, icon, placeholder, onChange, value }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={"input-password-container"}>
        
            <input
                type={showPassword ? 'text' : 'password'}
                className={`input-password`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
           
            <i
                onClick={togglePasswordVisibility}
                className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'} icon`}
            ></i>
        </div>
    );
};

export default InputPassword;