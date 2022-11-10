import { useState }from 'react'
import { Button, Form, Grid } from 'semantic-ui-react'

import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const { signUp } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    lastName: "",
    direction: "",
    phone: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

   const handleChange = ({target: {name, value}}) =>{
    setUser({ ...user, [name]:value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
 return(  
  <Grid textAlign="center" style={{ height: "60vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 550 }}>
      {error && <p>{error}</p>}
  <Form  onSubmit={handleSubmit}>
    <Form.Group unstackable widths={2}>
      <Form.Input type='email' name='email' label='E-mail' placeholder='E-mail'  onChange={handleChange}/>
      <Form.Input type='password' name='password' label='Contraseña' placeholder='Contraseña' onChange={handleChange}/>
    </Form.Group>
    <Form.Group unstackable widths={2}>
      <Form.Input type='name' name='name' label='Nombre' placeholder='Nombre' onChange={handleChange}/>
      <Form.Input type='lastName' name='lastName' label='Apellido' placeholder='Apellido' onChange={handleChange}/>
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input type='direction' name='direction' label='Direccion' placeholder='Direccion' onChange={handleChange}/>
      <Form.Input type='phone' name='phone' label='Telefono' placeholder='Telefono' onChange={handleChange}/>
    </Form.Group>
    <Form.Checkbox label='I agree to the Terms and Conditions' />
    <Button type='submit'>Submit</Button>
  </Form>
  </Grid.Column>
  </Grid>
)
}
export default Register