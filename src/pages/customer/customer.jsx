import { useParams } from "react-router-dom";
import { members } from "../../data/data";

const Customers = () => {
  const { id } = useParams();
  console.log(id);

  const member = members.find((member) => member.id === id);

  return (
    <div>
      {member ? (
        <>
          <h2>{member.name}</h2>
          <h3>{member.type}</h3>
        </>
      ) : (
        <>
          <p>Esse membro não existe</p>
        </>
      )}
    </div>
  );
};

export default Customers;
