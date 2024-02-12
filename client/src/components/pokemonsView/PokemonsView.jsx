import PokemonCard from "../pokemonCard/PokemonCard";
import styles from "./PokemonView.module.css";

const PokemonsView = ({ pokemons }) => {
  return (
    <div className={styles.pokemonView}>
      <div className={styles.pokemonContainer}>
        {pokemons.length &&
          pokemons.map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.id}
                name={pokemon.name}
                image={pokemon.image}
              />
            );
          })}
      </div>
    </div>
  );
};

export default PokemonsView;
