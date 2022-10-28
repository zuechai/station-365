import "./PageHeader.scss";
import { Link } from "react-router-dom";

export default function PageHeader() {
    return (
        <header className="header">
            <h1>HEADER TEST</h1>
            <div className="header__nav">
                <Link className="header__nav-link" to='/'>
                    <button className="header__button">Home</button>
                </Link>

                <Link className="header__nav-link" to='/ticket'>
                    <button className="header__button">Ticket Form</button>
                </Link>
            </div>
        </header>
    );
}