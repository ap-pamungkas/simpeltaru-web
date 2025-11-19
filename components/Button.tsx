import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
interface ButtonProps {
    open: boolean;
    handleToggle: () => void;
    icon1?: IconDefinition;
    icon2?: IconDefinition;
}
function Button({ open, handleToggle, icon1, icon2  }: ButtonProps){
    const icon = open ? icon1 : icon2;
    return(
        <button
          onClick={handleToggle}
          className="text-white text-2xl focus:outline-none md:hidden"
          aria-label="Toggle menu"
        >
          {icon ? <FontAwesomeIcon icon={icon} /> : null}
        </button>
    );
}

export default Button;