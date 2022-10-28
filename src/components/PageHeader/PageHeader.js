import "./PageHeader.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";

export default function PageHeader({ username }) {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" className="header__logo-img" />
      </div>
      <ul className="nav">
        <li className="nav__item">
          <Link className="nav__link">Dashboard</Link>
          <Link className="nav__link">Submit a Ticket</Link>
          <Link className="nav__link">{username}</Link>
        </li>
      </ul>
    </header>
  );
}
