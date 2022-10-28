import "./PageHeader.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";

export default function PageHeader({ username }) {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" className="header__logo-img" />
      </div>
      <h1 className="header__h1">Find & Fix</h1>
      <ul className="nav">
        <li className="nav__item">
          <Link to={"/"} className="nav__link">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to={"/tickets"} className="nav__link">
            Submit a Ticket
          </Link>
        </li>
        <li>
          <Link to={"/user"} className="nav__link">
            {username}
          </Link>
        </li>
      </ul>
    </header>
  );
}
