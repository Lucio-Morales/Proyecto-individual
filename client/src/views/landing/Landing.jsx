import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h2>Componente landing</h2>
      <Link to="/home">
        <button>Ir al home</button>
      </Link>
    </div>
  );
};

export default Landing;
