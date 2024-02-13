import CreateForm from "./views/createForm/CreateForm";
import Home from "./views/home/Home";
import Landing from "./views/landing/Landing";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<CreateForm />} />
      </Routes>
    </>
  );
}

export default App;
