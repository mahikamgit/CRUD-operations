import { useEffect, useState } from 'react';
// import { Await } from 'react-router-dom';

function DataAPI() {

   const [userData, setUserData] = useState([]);
   const [error,setError] = useState(null);

//    Fetch user data from API
   useEffect(()=> {

    const fetchData = async () => {
        try {
            const response = await fetch (
               ` https://jsonplaceholder.typicode.com/users  `
            );
            const data = await response.json();
            setUserData(data);
        } catch(error) {
            setError(error.message);
        }
    }
        fetchData();
   }, []);
   
      console.log('apidata' , userData);

  return (
    <div>
        {userData?.map((user)=> {
            return (
                <div>
                     <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p> <br />
                </div>
            )
        })}
    </div>
  )
};

export default DataAPI;