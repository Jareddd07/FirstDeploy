import { Row, Col, Card } from "react-bootstrap";

function About() {
  return (
    <div>
      <h2 className="text-center mb-4">About Me</h2>
      <Row>
        <Col lg={4} md={6} sm={12}>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Skills</Card.Title>
              <Card.Text>HTML, CSS, JavaScript, React, Bootstrap</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} sm={12}>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Interests</Card.Title>
              <Card.Text>Web development, UI/UX design, and gaming 🎮</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} sm={12}>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Goals</Card.Title>
              <Card.Text>To become a full-stack developer and build creative apps!</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default About;