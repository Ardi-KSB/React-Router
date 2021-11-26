import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

function Header() {
  let getIsLogin = localStorage.getItem("isLogin");
  let dataIsLogin = JSON.parse(getIsLogin);
  console.log(dataIsLogin);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Router</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link>
              <Link to="/" style={{ textDecoration: "none" }}>
                Home{" "}
              </Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              {dataIsLogin ? <></> : <Link to="/Login">Login</Link>}
            </Nav.Link>
            <Nav.Link>
              <Link to="/register" style={{ textDecoration: "none" }}>
                Register
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/profile" style={{ textDecoration: "none" }}>
                Profile
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/product" style={{ textDecoration: "none" }}>
                Product
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
