import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Results() {
  const userList = useSelector((state) => state.u.userList);// Récupère la liste des utilisateurs depuis le store Redux
  const sortedUserList = userList.slice().sort((a, b) => b.score - a.score);// Trie la liste des utilisateurs par score décroissant

  // Affiche la liste des utilisateurs avec leurs scores sous forme de liens cliquables
  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ol>
        {sortedUserList.map((user, i) => {
          return (
            <li key={i}>
              <Link to={`/user/${user.name}`} >
                {user.name}, score : {user.score}
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Results;
