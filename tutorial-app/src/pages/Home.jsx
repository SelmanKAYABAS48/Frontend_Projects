import { useEffect, useState } from "react";
import axios from "axios";

import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);
  console.log(tutorials);

  const getTutorials = async () => {
    // const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/"

    try {
      const res = await axios(process.env.REACT_APP_URL);
      console.log(res.data);
      setTutorials(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTutorials()

  }, [])

  // Eğer getTutorials kendi içinde şu şekilde çağrılmaya devam ederse:

  // javascript
  // Kodu kopyala
  // const getTutorials = async () => {
  //   try {
  //     const { data } = await axios(process.env.REACT_APP_URL);
  //     setTutorials(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   getTutorials(); // Kendini çağırıyor, bu sonsuz döngüye yol açar.
  // };
  // Sonsuz bir çağrı zinciri oluşur ve uygulamanız durma noktasına gelir. Bu yüzden, getTutorials yalnızca gerektiği yerlerde çağrılmalı. Genelde bu, useEffect gibi yan etki yönetimi için kullanılan bir hook ile yapılır.

  
  return (
    <>
      <AddTutorial  getTutorials={getTutorials}/>
      <TutorialList tutorials={tutorials} getTutorials={getTutorials}/>
    </>
  );
};

export default Home;
