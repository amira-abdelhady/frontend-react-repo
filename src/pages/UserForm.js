import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const UserForm = (props) => {
  const history = useHistory();
  const params = useParams();

  const [userForm, setUserForm] = useState({
    username: "Ahmed",
    jobTitle: "",
  });

  const [userFormErrors, setUserFormErrors] = useState({
    usernameErr: null,
    jobTitleErr: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userForm);
    if (userForm.username.length > 0 && !userFormErrors.usernameErr) {
      history.push({
        pathname : "/",
        state : userForm
      });
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUserForm({
        ...userForm,
        username: e.target.value,
      });

      setUserFormErrors({
        ...userFormErrors,
        usernameErr:
          e.target.value.length === 0
            ? "This Field is required"
            : e.target.value.length < 5
            ? "Length must not be less than 5"
            : null,
      });
    } else if (e.target.name === "jobTitle") {
      setUserForm({
        ...userForm,
        jobTitle: e.target.value,
      });
      setUserFormErrors({
        ...userFormErrors,
        jobTitleErr:
          e.target.value.length === 0
            ? "This Field is required"
            : e.target.value.length < 5
            ? "Length must not be less than 5"
            : null,
      });
    }
  };

  useEffect(() => {
    return () => {
      console.log("USER FORM : Will unmout");
    };
  }, []);

  console.log("USER FORM", params);

  return (
    <div className="container">
      <h1>User Form</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={userForm.username}
            onChange={(e) => handleChange(e)}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />

          <div>
            <small className="text-danger">{userFormErrors.usernameErr}</small>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Job Title
          </label>
          <input
            type="text"
            name="jobTitle"
            className={`form-control ${
              userFormErrors.jobTitleErr ? "border-danger" : ""
            }`}
            placeholder="Job title"
            onChange={(e) => handleChange(e)}
            value={userForm.jobTitle}
            id="exampleInputPassword1"
          />
        </div>
        <small className="text-danger">{userFormErrors.jobTitleErr}</small>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
