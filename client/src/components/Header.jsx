import "./../css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Squash Court Manager</h1>
      <Link to="/">Home</Link>
      <Link to="/matchhistory">Match History</Link>
    </header>
  );
};

export default Header;
