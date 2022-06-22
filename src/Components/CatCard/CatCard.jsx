import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CatCard.css";
function CatCard({ chosen }) {
  return (
    <>
      <div className=""></div>
      <div className="">
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" src={chosen.image.url} />
          <Card.Body>
            <Card.Title>{chosen.name} </Card.Title>
            <Card.Text>{chosen.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <span> Origin :</span> {chosen.origin}
            </ListGroupItem>
            <ListGroupItem>
              <span>characteristic :</span> {chosen.temperament}
            </ListGroupItem>
            <ListGroupItem>
              <span>life span:</span> {chosen.life_span} years
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href={chosen.wikipedia_url}>
              Learn more on wikipedia{" "}
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default CatCard;
