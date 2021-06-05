import { BASE_URL, TRACKS_ENDPOINT } from "../../../constants/api";
import { useState, useEffect } from "react";
import { Card, CardDeck, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./TrackList.module.css";
import Heading from "../../layout/Heading";
import moment from "moment";

export default function TrackList() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrormsg] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(`${BASE_URL}${TRACKS_ENDPOINT}`);
        if (response.ok) {
          const json = await response.json();
          setTracks(json);
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
      <Heading content="Tracks" />
      <Container className={styles.container}>
        {tracks.map((track) => {
          return (
            <CardDeck className={styles.deck}>
              <Link to={`tracks/details/${track.id}`}>
                <Card className={styles.card} key={track.id}>
                  <Card.Img
                    className={styles.img}
                    variant="top"
                    src={track.image}
                  />
                  <Card.Body className={styles.body}>
                    <Card.Title>{track.name}</Card.Title>
                    <Card.Text>{track.country}</Card.Text>
                    {moment(track.from).format("DD.MM")} -{" "}
                    {moment(track.to).format("DD.MM")}
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
