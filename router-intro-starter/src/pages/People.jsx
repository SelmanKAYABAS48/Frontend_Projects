import { useEffect, useState } from 'react'

const People = () => {
const  [people,setPeople] = useState([])

const getPeople = async()=>{
    fetch("https://reqres.in/api/users")
    .then((res)=>res.json())
    .then((data)=>setPeople(data.data))
    .catch((err)=>console.log(err))
}

useEffect(()=>{
    getPeople()},[])
  return (
    <div className='container text-center mt-4'>
        <h1>People</h1>
        <div className='row justify-content-center g-3'>
            {people?.map((person)=>{
                const {id,email,first_name,last_name,avatar} = person
                return(
                    <div className='col-sm-12 col-md-6 col-lg-4'
                    key={id}
                    type="button">
                        <img className='rounded' src={avatar} alt="" />
                        <h6>{first_name}{last_name}</h6>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default People