import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserListFunctional = (props) => {
  // const [ userName , setUserName ] = useState('Marina')
  // const [ title , setTitle ] = useState('Frontend Developer');

  const [userData, setUserData] = useState({
    username: "Marina",
    title: "Frontend Developer",
  });

  useEffect(() => {
    console.log("MOUNT");
    return () => {
      console.log("USER LIST : Will unmout");
    };
  }, []);

  useEffect(() => {
    console.log("USER DATA UPDATED");
  }, [userData]);


  console.log("PROPS" , props)
  return (
    <>
      <Link to="/user/list/2">
        <h1>Username : {userData.username}</h1>
      </Link>
      <h3>{userData.title}</h3>
      <button
        onClick={() =>
          setUserData({
            ...userData,
            username: "Ahmed",
          })
        }
      >
        Change Name
      </button>
    </>
  );
};

export default UserListFunctional;
