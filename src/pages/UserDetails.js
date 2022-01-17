import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstance } from './../network/index';

export default function UserDetails() {
  const params = useParams();
  const [userDetails, setUserDetails] = useState({});

  console.log(params);


  useEffect(() => {
    axiosInstance
      .get(`users/${params.id}`)
      .then((res) => setUserDetails(res.data))
      .catch((err) => console.log(err));
  }, []);

  return <div>
      
      <h1>Details page</h1>
      <h3>Name : {userDetails.username}</h3>
      <h3>Email : {userDetails.email}</h3>
  </div>;
}
