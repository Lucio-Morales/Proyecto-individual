import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <SearchBar />
      <Link to="/create">
        <button>CREAR POKEMON</button>
      </Link>
    </>
  );
};

export default NavBar;
