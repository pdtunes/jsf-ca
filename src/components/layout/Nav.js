import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function Nav() {
  return (
    <Container>
      <nav>
        <Link to="/">Teams</Link> | <Link to="/tracks">Tracks</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
      </nav>
    </Container>
  );
}

export default Nav;
