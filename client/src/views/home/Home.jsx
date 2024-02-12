import PokemonsView from "../../components/pokemonsView/PokemonsView";
import NavBar from "../../components/navBar/NavBar";
import Loading from "../../components/loading/Loading";
import { useEffect, useState } from "react";
import { getPokemons } from "../../utils/getPokemons";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons().then(setPokemons);
  }, []);
  return (
    <div>
      {pokemons.length ? (
        <>
          <NavBar />
          <PokemonsView pokemons={pokemons} />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Home;
