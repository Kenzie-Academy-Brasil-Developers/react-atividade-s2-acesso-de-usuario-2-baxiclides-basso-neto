import { Link } from "react-router-dom";

const Home = ({ members }) => {
  return (
    <div>
      {members.map((member) => (
        <li key={member.id}>
          {member.type === "pj" ? (
            <div>
              <Link to={`/company/${member.id}`}>{member.name}</Link>
            </div>
          ) : (
            <div>
              <Link to={`/customer/${member.id}`}>{member.name}</Link>
            </div>
          )}
        </li>
      ))}
    </div>
  );
};
export default Home;
