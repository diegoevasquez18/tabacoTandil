import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from "react-bootstrap/Card";
import { useAuth } from '../../../context/AuthContext';
import './item.css'


const Item = ({ id, img, name, description, price }) => {

  const navigate = useNavigate();
  const { user } = useAuth()



    return (
    <div className="cards col-md-4">
      <Card className='card'>
      <Card.Img variant="top" src={img} style={{ width: '100%', objectFit: 'contain'}} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <p className='price'>$19.99</p>
        <Card.Text>
            {description}
        </Card.Text>
        {!user ?
        <p><button onClick={() => navigate("/login")}>Registrate y compra!</button></p>
        :
        <p><button onClick={() => navigate("/")}>Comprar</button></p>
        }
      </Card.Body>
    </Card>
    </div>
  );
}
export default Item