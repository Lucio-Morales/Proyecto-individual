import styles from "./PokemonCard.module.css";

const PokemonCard = ({ name, image }) => {
  return (
    <div className={styles.pokemonCard}>
      <p className={styles.pokemonName}>Name: {name}</p>
      <img className={styles.pokemonImage} src={image} />
    </div>
  );
};

export default PokemonCard;
