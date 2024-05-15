import "./style.scss"

// import Eye from "../../assets/icons/Eye.png";
// import EyeOff from "../../assets/icons/EyeOff.png";

// const [password, setPassword] = useState("");
// const [type, setType] = useState('password');
// const [icon, setIcon] = useState(eyeOff);

// const handleToggle = () => {
//   if (type==='password'){
//      setIcon(eyeOff);
//      setType('text')
//   } else {
//      setIcon(eye)
//      setType('password')
//   }
// }

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
      />

      {/* duvida aq: como ajeitar bug visual de password? fiz gambiarra */}
      {isPassword && <img src={icon} alt="icon" />}
    </div>
  );
};

export default Input;
