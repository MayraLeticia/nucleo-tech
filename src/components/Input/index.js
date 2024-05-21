import "./style.scss"
import { useState } from "react";


const Input = ({id, placeholder, type, onChange, value}) => {

  const [isPassword, setIsPassword] = useState(false);
  const handlePassword = () => { type==='password' && setIsPassword(true) }

  return (
    <div className={isPassword && "input-password-container"}>
      <input
        className={`input ${type}`}
        placeholder={placeholder}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        // onChange={(e) => setPassword(e.target.value)} //como q faz pra esse onChange funcionar com o outro

        //fazer InputPassword, pra acabar essa p***aria
      />

    
      {isPassword && <img src="#" alt="icon" />}
    </div>
  );
};

export default Input;
