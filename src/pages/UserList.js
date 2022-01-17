import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserName from "../components/UserName";
import axios from "axios";
import { axiosInstance } from './../network/index';

const UserListAPI = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("users", {
        params: {
          limit: 5,
        },
        headers : {
          Authorization : "dasd5s4da56sd45asd4a56sd4a5sd4"
        }
      })
      .then((res) => setUserList(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ul>
        {userList.map((user) => {
          return (
            <Link to={`/user/${user.id}`} key={user.id}>
              <li>{user.email}</li>
            </Link>
          );
        })}
        {/* <img src={`https://image.tmdb.org/t/p/w500/${}`}/> */}
      </ul>
    </>
  );
};

export default UserListAPI;
