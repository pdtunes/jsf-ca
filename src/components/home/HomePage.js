import TeamsList from "../dashboard/teams/TeamList";
import Heading from "../layout/Heading";

export default function HomePage() {
  return (
    <>
      <Heading content="Teams" />
      <TeamsList />
    </>
  );
}
