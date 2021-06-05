import { BASE_URL, TEAMS_ENDPOINT } from "../../../constants/api";
import { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styles from "./DetailsPage.module.css";
import { useHistory } from "react-router-dom";

export default function DetailsPage() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrormsg] = useState(null);
  let history = useHistory();
  const { id } = useParams();

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(`${BASE_URL}${TEAMS_ENDPOINT}/${id}`);
          if (response.ok) {
            const json = await response.json();
            setTeam(json);
          }
        } catch (error) {
          setErrormsg(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    },
    [id]
  );

  if (loading) {
    return <div>Loading...</div>;
  }
  if (errorMsg) {
    return <div>You have an error: {errorMsg}</div>;
  }

  return (
    <>
      <button className={styles.button} onClick={() => history.goBack()}>
        Back
      </button>
      <Card key={team.id}>
        <Container>
          <div className="top-images">
            <div className="logo">
              <Card.Img variant="top" src={team.image} />
            </div>
            <div className="car">
              <Card.Img src={team.car_image} />
            </div>
          </div>
          <Card.Body>
            <Card.Title>{team.name}</Card.Title>
            <Card.Text>Nationality: {team.nationality}</Card.Text>
            <Card.Text>{team.description}</Card.Text>
            <Card.Text>Championships: {team.championships}</Card.Text>
            <Card.Text>First time entry: {team.joined}</Card.Text>
          </Card.Body>
        </Container>
      </Card>
    </>
  );
}
