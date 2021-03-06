import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

function Profile() {
  return (
<Card style={{ width: '50rem' }}>
  <Card.Img variant="top" src="https://wallpapercave.com/wp/wp2426149.jpg" />
  <Card.Body>
    <Card.Title>Profile Juventus FC</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>);
}

export default Profile;
