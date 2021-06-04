import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { Container } from "react-bootstrap";

function Nav() {
  const [auth, setAuth] = useContext(AuthContext);
  const history = useHistory();
  function logout() {
    setAuth(null);
    history.push("/");
  }
  return (
    <Container>
      <nav>
        <Link to="/">Teams</Link> | <Link to="/tracks">Tracks</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        {auth ? (
          <>
            <Link to="/admin">Admin </Link> |{" "}
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </Container>
  );
}

export default Nav;
