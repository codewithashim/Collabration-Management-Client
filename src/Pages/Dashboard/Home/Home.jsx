import { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";
import Login from "../../Auth/Login/Login";

const Home = () => {
  const { user } = useContext(AuthContext);
  return <section>
    {user ? <h1>Home</h1> : <Login />}
  </section>;
};

export default Home;
