import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
// const User = ({match}) =>{
//     return (<h1>User {match.params.name} page</h1>);
// }
const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <h1>
        User {fname} {lname} page
      </h1>
      <p>my current location is {location.pathname}</p>
      {location.pathname === `/user/subrata/biswas` ? (
        <>
        <button onClick={() => navigate(-1)}>goBack</button>
        <br/>
        <button onClick={() => navigate("/")}>push to about</button>
        </>
      ) : null}
    </>
  );
};
export default User;
