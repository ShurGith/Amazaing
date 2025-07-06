import { useContext } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { UserContext } from "../context/User.Context";

function HomePage() {
  const {user, login, logout} = useContext(UserContext)

  return (
    <>
      <HeaderComponent></HeaderComponent>

      <div>
    <h1>Home Page</h1>
    <p>Hola {user &&  <span>{user.name}</span>}</p>

      <button onClick={() => login()}>Login</button>
      <button onClick={() => logout()}>Logout</button>
      </div>
    </>
  );
}

export default HomePage;