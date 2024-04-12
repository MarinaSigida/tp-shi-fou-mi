import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function User() {
  const { name } = useParams(); 
  const userList = useSelector((state) => state.u.userList); 
    const utilisateur = userList.map((user, index) => {
        <li key={index}>{user}</li>
    })
  const user = userList.find((user) => user.name == name);

  return (
    <>
      <h1>{user.name}</h1>
      <p>Score : {user.score}</p>
    </>
  );
}

export default User;