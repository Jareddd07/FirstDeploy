import { Card, ListGroup } from "react-bootstrap";

export default function Contact() {
  return (
    <div className="contact-section d-flex justify-content-center">
      <Card className="p-4 shadow-sm" style={{ maxWidth: "500px", width: "100%" }}>
        <h2 className="text-center mb-4">Contact Me</h2>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Email:</strong> jareddelacruz137@gmail.com
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Phone:</strong> +63 920 587 5297
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Facebook:</strong> Jared Maleniza Dela Cruz
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Instagram:</strong> jaablueee 
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}
