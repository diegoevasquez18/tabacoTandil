import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Form, Segment } from 'semantic-ui-react'
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
     <Segment inverted>
      <h3>INGRESA CON EMAIL O CON TU CUENTA DE GOOGLE</h3>
     {error && <p>{error}</p>}
    <Form inverted onSubmit={handleSubmit}>
      <Form.Group widths='equal'>
        <Form.Input fluid label='First name' placeholder='E-mail'  onChange={handleChange}/>
        <Form.Input fluid label='Last name' placeholder='Password' onChange={handleChange}/>
      </Form.Group>
      <Form.Checkbox label='I agree to the Terms and Conditions' />
      <Button>Submit</Button>
      <Button onClick={handleGoogleSignin} >Google</Button>
      <h2>NO TENES CUENTA? <NavLink to='/register'>REGISTRATE!</NavLink></h2>
    </Form>
  </Segment>
  );
}
