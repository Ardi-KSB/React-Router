import { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Register() {
  let history = useHistory();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    birthdate: "",
    gender: "",
    skills: [],
  });

  const handleChangeUser = (e) => {
    const { name, value } = e.target;
    setUser((preUser) => ({
      ...preUser,
      [name]: value,
    }));
  };

  const handleAlert = (e) => {
    e.preventDefault();
    alert(
      `${user.username}\n${user.email}\n${user.password}\n${user.address}\n${user.birthdate}\n${user.gender}${user.skills}`
    );
    const Storage = JSON.stringify(user);
    localStorage.setItem("user", Storage);
    history.push("/login");
  };

  // console.log(user);

  return (
    <div clasName="register">
      <Container fluid="md-3">
        <Card className="m-md-3" style={{ width: "25rem" }}>
          <Card.Header>Register Pages</Card.Header>
          <p className="m-2 md-1">Nama Lengkap :</p>
          <input
            size="sm"
            className="m-2 md-3"
            type="text"
            value={user.username}
            name="username"
            placeholder="Username"
            onChange={handleChangeUser}
          />
          <p className="m-2 md-1">Email :</p>
          <input
            size="sm"
            className="m-2 md-3"
            type="text"
            value={user.email}
            name="email"
            placeholder="example@email.com"
            onChange={handleChangeUser}
          />
          <p className="m-2 md-1">Password :</p>
          <input
            size="sm"
            className="m-2 md-3"
            type="password"
            value={user.password}
            name="password"
            placeholder="Password"
            onChange={handleChangeUser}
          />
          <p className="m-2 md-1">Alamat :</p>
          <textarea
            size="sm"
            className="m-2 md-3"
            type="textarea"
            value={user.address}
            name="address"
            placeholder="Ketik alamat anda disini"
            onChange={handleChangeUser}
          ></textarea>
          <p className="m-2 md-1">Tanggal Lahir :</p>
          <input
            size="sm"
            className="m-2 md-3"
            name="birthdate"
            type="date"
            value={user.birthdate}
            onChange={handleChangeUser}
            placeholder="YYYY-MM-DD"
            data-date-split-input="true"
          />
          <div className="radio m-2 md-3">
            Jenis Kelamin :
            <div className="radio">
              <label>
                <input
                  name="gender"
                  type="radio"
                  value="Laki-laki"
                  //   checked={this.state.selectedOption === "Male"}
                  onChange={handleChangeUser}
                />
                Laki-laki
              </label>
            </div>
          </div>
          <div className="radio m-2 md-3">
            <label>
              <input
                name="gender"
                type="radio"
                value="Perempuan"
                //   checked={this.state.selectedOption === "Female"}
                onChange={handleChangeUser}
              />
              Perempuan
            </label>
          </div>

          <div className="skills m-2 md-3">
            Skills :
            <div className="coding">
              <input
                size="sm"
                className="m-2 md-3"
                type="checkbox"
                name="skills"
                value="Coding"
                onChange={handleChangeUser}
              />
              Coding
            </div>
            <div className="design">
              <input
                size="sm"
                className="m-2 md-3"
                type="checkbox"
                name="skills"
                value="Grapich Design"
                onChange={handleChangeUser}
              />
              Grapich Design
            </div>
            <div className="gaming">
              <input
                size="sm"
                className="m-2 md-3"
                type="checkbox"
                name="skills"
                value="Gaming"
                onChange={handleChangeUser}
              />
              Gaming
            </div>
          </div>

          <Button
            size="sm"
            className="m-2 md-3"
            variant="primary"
            onClick={handleAlert}
          >
            Submit
          </Button>
        </Card>
      </Container>
    </div>
  );
}

export default Register;
