import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PersonDetails = () => {
  const [person, setPerson] = useState([]);

  const navigate = useNavigate;
  const { id } = useParams();

  const getperson = async () => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => setPerson(data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getperson();
  }, []);
  return (
    <div className="container text-center mt-4">
      <img src={person.avatar} alt={person.first_name} />
      <h6>
        {person.first_name}
        {person.last_name}
      </h6>
      <p>{person.email}</p>
    </div>
  );
};

export default PersonDetails;
