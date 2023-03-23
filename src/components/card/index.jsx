import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Test() {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.thesun.co.uk/wp-content/uploads/2021/10/OFF-PLAT-JD-GIGACHAD.jpg?w=620" />
      <Card.Body>
        <Card.Title>Card Assignment</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default Test;