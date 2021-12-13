import { Card } from 'react-bootstrap/';

const CardComponent = (props) => {
  return (
    <Card style={{ width: '20rem' }} className="bg-light p-4 m-2">
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title className="text-primary">{props.title}</Card.Title>
        <Card.Text className="text-secondary">{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
