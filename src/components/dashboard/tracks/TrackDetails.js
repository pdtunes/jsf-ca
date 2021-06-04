import { BASE_URL, TRACKS_ENDPOINT } from "../../../constants/api";
import { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styles from "./TrackDetails.module.css";

export default function TrackDetails() {
  const [track, setTrack] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrormsg] = useState(null);

  const { id } = useParams();

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(`${BASE_URL}${TRACKS_ENDPOINT}/${id}`);
          if (response.ok) {
            const json = await response.json();
            setTrack(json);
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
      <Card key={track.id}>
        <Container className={styles.container}>
          <Card.Img className={styles.img} variant="top" src={track.image} />
          <Card.Body>
            <Card.Title>{track.name}</Card.Title>
            <Card.Text>
              Country: <b>{track.country}</b>
            </Card.Text>
            <Card.Text>
              Fastest Lap: <b>{track.record}</b>{" "}
            </Card.Text>
            <Card.Text>
              Race date:{" "}
              <b>
                {track.from} - {track.to}
              </b>{" "}
            </Card.Text>{" "}
            <div className={styles.textbox}>
              <Card.Text>
                Info about <b>{track.name}:</b> <br />
                {track.info}
              </Card.Text>
              <Card.Text>{track.info2}</Card.Text>
              <Card.Text>{track.info3}</Card.Text>
              <Card.Text>{track.info4}</Card.Text>
              <Card.Text>{track.info5}</Card.Text>
            </div>
          </Card.Body>
        </Container>
      </Card>
    </>
  );
}
