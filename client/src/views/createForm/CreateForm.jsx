import { useState } from "react";
import styles from "./CreateForm.module.css";

const CreateForm = () => {
  const [createForm, setCreateForm] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    weight: "",
    height: "",
    image: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    weight: "",
    height: "",
    image: "",
  });

  const handleInputChange = (event) => {
    setCreateForm({
      ...createForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {};
  return (
    <div className={styles.formContainer}>
      <h5>CREATE POKEMON</h5>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={createForm.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          className={styles.input}
          type="text"
          name="hp"
          value={createForm.hp}
          onChange={handleInputChange}
          placeholder="Hp"
        />
        <input
          className={styles.input}
          type="text"
          name="attack"
          value={createForm.attack}
          onChange={handleInputChange}
          placeholder="Attack"
        />
        <input
          className={styles.input}
          type="text"
          name="defense"
          value={createForm.defense}
          onChange={handleInputChange}
          placeholder="Defense"
        />
        <input
          className={styles.input}
          type="text"
          name="speed"
          value={createForm.speed}
          onChange={handleInputChange}
          placeholder="Speed"
        />
        <input
          className={styles.input}
          type="text"
          name="weight"
          value={createForm.weight}
          onChange={handleInputChange}
          placeholder="Weight"
        />
        <input
          className={styles.input}
          type="text"
          name="height"
          value={createForm.height}
          onChange={handleInputChange}
          placeholder="Height"
        />
        <input
          className={styles.input}
          type="text"
          name="image"
          value={createForm.image}
          onChange={handleInputChange}
          placeholder="Image"
        />
        <button className={styles.submitButton} onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
