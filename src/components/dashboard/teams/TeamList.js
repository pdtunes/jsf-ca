import { BASE_URL, TEAMS_ENDPOINT } from "../../../constants/api";
import { useState, useEffect } from "react";
import { Card, CardDeck, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./TeamList.module.css";

export default function TeamList() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrormsg] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(`${BASE_URL}${TEAMS_ENDPOINT}`);
        if (response.ok) {
          const json = await response.json();
          setTeams(json);
        }
      } catch (error) {
        setErrormsg(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorMsg) {
    return <div>You have an error: {errorMsg}</div>;
  }

  return (
    <>
      <Container className="teamlist">
        {teams.map((team) => {
          return (
            <CardDeck>
              <Link className={styles.link} to={`teams/details/${team.id}`}>
                <Card
                  className={`${styles.card} ${
                    styles[team.name.replace(/\s/g, "")]
                  }`}
                  key={team.id}
                >
                  <div className="logo">
                    <Card.Img
                      className={styles.img}
                      variant="top"
                      src={team.image}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title
                      className={`${styles.text} ${
                        styles[team.name.replace(/\s/g, "")]
                      }`}
                    >
                      {team.name}
                    </Card.Title>

                    <Card.Text>{team.nationality}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </CardDeck>
          );
        })}
      </Container>
    </>
  );
}
