import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let history = useHistory();

  const handleChangeUser = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((preUser) => ({
      ...preUser,
      [name]: value,
    }));
  };

  const handleChangeLogin = (e) => {
    e.preventDefault();
    const getUser = localStorage.getItem("user");
    const dataUser = JSON.parse(getUser);
    setUser(dataUser);

    console.log(user);
    console.log(dataUser);

    if (user.email === dataUser.email && user.password === dataUser.password) {
      localStorage.setItem("isLogin", "true");
      history.push("/profile");
    } else {
      alert("email dan password salah");
    }
  };

  return (
    <div className="login">
      <Container>
        <h2 className="shadow-sm text-info mt-5 p-3 text-center rounded">
          Halaman Login
        </h2>
        <Row className="mt-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={user.email}
                  placeholder="Enter email"
                  onChange={handleChangeUser}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={user.password}
                  placeholder="Password"
                  onChange={handleChangeUser}
                />
              </Form.Group>

              <Button
                variant="dark btn-block"
                type="submit"
                onClick={handleChangeLogin}
              >
                Login
              </Button>
            </Form>
          </Col>
        </Row>
        <h6 className="mt-5 p-5 text-center text-secondary ">
          copyright_©mohammad sunardi_2021
        </h6>
      </Container>
    </div>
  );
}

export default Login;
