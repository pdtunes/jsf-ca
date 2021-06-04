import PropTypes from "prop-types";
import styles from "./Heading.module.css";

function Heading({ content }) {
  return <h1 className={styles.heading}>{content}</h1>;
}

Heading.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Heading;
