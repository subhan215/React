import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const MemeCard = (props) => {
  const navigate = useNavigate();
  return (
    <Card className="meme-card">
      <Card.Img variant="top" src={props.img} className="meme-card-img" />
      <Card.Body className="meme-card-body">
        <Card.Title className="meme-card-title">{props.title}</Card.Title>
        <Button className="meme-card-button" onClick={() => navigate(`/edit?url=${props.img}`)}>Edit</Button>
      </Card.Body>
    </Card>
  );
};

export default MemeCard;
