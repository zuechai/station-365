import "./Button.scss";
import { Link } from "react-router-dom";

function Button({ link, content, onClick, disabled }) {
    return (
        <Link to={link} className="button">
            <button
                className="button__button"
                onClick={onClick}
                disabled={disabled}
            >
                {content}
            </button>
        </Link>
    );
}

export default Button;