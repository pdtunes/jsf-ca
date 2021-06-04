import { Card, Container } from "react-bootstrap";
import styles from "./About.module.css";
import { Link } from "react-router-dom";

export default function TrackDetails() {
  return (
    <>
      <Card>
        <Container className={styles.container}>
          <Card.Img
            className={styles.img}
            variant="top"
            src="https://res.cloudinary.com/dgeiq2r6e/image/upload/v1622722729/f1/bcg_ghtpcw.jpg"
          />
          <Card.Body>
            <div className={styles.textbox}>
              <Card.Title>About this page </Card.Title>

              <Card.Text>
                This page is a school project. I do not own any of the
                information or images on this page. Everyhing has been borrowed
                from www.f1.com.
              </Card.Text>
            </div>
          </Card.Body>
        </Container>
      </Card>
    </>
  );
}
