import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

export default function Home() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning ");
    else if (hour < 18) setGreeting("Good Afternoon ");
    else setGreeting("Good Evening ");
  }, []);

  const handleLearnMore = () => {
    window.open("https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer", "_blank");
  };

  return (
    <div className="text-center home-section">
      <h1>{greeting}, I'm Jared!</h1>
      <p>Welcome to my personal portfolio website.</p>
      <Card className="shadow-sm mx-auto mt-4 p-4" style={{ maxWidth: "500px" }}>
        <Card.Body>
          <Card.Title>Frontend Developer</Card.Title>
          <Card.Text>
            I build responsive, modern web applications using React and Bootstrap.
          </Card.Text>
          <Button variant="primary" onClick={handleLearnMore}>
            Learn More
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
