import { Link } from "react-router-dom";
import Admin from "../../dashboard/Admin";
import Heading from "../../layout/Heading";
import TeamList from "./TeamList";

export default function TeamPage() {
  return (
    <Admin>
      <Heading size="3" content="Teams" />
      <Link to="/dashboard/teams/add">ADD NEW team</Link>
      <TeamList />
    </Admin>
  );
}
