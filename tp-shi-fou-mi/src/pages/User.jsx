import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function User() {
  const { name } = useParams(); // Récupère le nom d'utilisateur depuis les paramètres de l'URL 
  const userList = useSelector((state) => state.u.userList); // Récupère la liste des utilisateurs depuis le store Redux
  const user = userList.find((user) => user.name == name);// Recherche l'utilisateur dans la liste en fonction du nom extrait des paramètres de l'URL
  
  // Affiche les informations de l'utilisateur
  return (
    <div>
      <div style={{width: '300px', fontSize: '30px'}}>
        <p>{user.name}</p>
      <p>score: {user.score}</p>
      </div>
    </div>
  );
}
export default User;