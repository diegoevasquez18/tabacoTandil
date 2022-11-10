import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import { useAuth } from "../../../context/AuthContext";

export function Login() {
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/internal-error") {
        setError("Correo no valido");
      }
    }
  };
  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <Grid textAlign="center" style={{ height: "60vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <h3>INGRESA CON EMAIL O CON TU CUENTA DE GOOGLE</h3>
          {error && <p>{error}</p>}
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={handleChange}
            />

            <Button color="teal" fluid size="large">
              Login
            </Button>
            <br></br>
            <Button
              color="teal"
              fluid
              size="large"
              onClick={handleGoogleSignin}
            >
              Google
            </Button>
          </Segment>
        </Form>
        <Message>
          Sos nuevo? <Link to={"/register"}>Registrare!</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
}
