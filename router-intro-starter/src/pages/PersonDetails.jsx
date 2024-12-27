// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// const PersonDetails = () => {
//   const [person, setPerson] = useState([]);

//   const navigate = useNavigate();
//   const { id } = useParams();

//   const getPerson = () => {
//     fetch(`https://reqres.in/api/users/${id}`)
//       .then((res) => res.json())
//       .then((data) => setPerson(data.data))
//       .catch((err) => console.log(err));
//   };
//   useEffect(() => {
//     getPerson();
//   }, []);
//   return (
//     <div className="container text-center mt-4">
//       <img className="rounded" src={person?.avatar} alt="img" />
//       <h6>
//         {" "}
//         {person?.first_name} {person?.last_name}{" "}
//       </h6>
//       <p>{person?.email}</p>
//       <button className="btn btn-danger" onClick={() => navigate(-1)} >Back</button> <br/>
//       <button className="btn btn-success" onClick={() => navigate("/")} >Home</button>
//     </div>
//   );
// };

// export default PersonDetails;

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PersonDetails = () => {
  const [person, setPerson] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const getPerson = () => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched Data:', data); // Veriyi kontrol etmek için
        setPerson(data.data);
      })
      .catch((err) => console.error('Fetch Error:', err));
  };

  useEffect(() => {
    getPerson();
  }, [id]);

  return (
    <div className="container text-center mt-4">
      <img className="rounded" src={person?.avatar} alt="Avatar" />
      <h6>
        {person?.first_name} {person?.last_name}
      </h6>
      <p>{person?.email}</p>
      <button className="btn btn-danger" onClick={() => navigate(-1)}>Back</button>
      <button className="btn btn-success" onClick={() => navigate("/")}>Home</button>
    </div>
  );
};

export default PersonDetails;
