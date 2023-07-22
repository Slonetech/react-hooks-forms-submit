import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]);

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });
  const[errors, setErrors] = useState([]);
function handleSubmit(event) {
    event.preventDefault();
    const formData = {
       firstName: firstName, 
       lastName: lastName
       };
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    props.sendFormDataSomewhere(formData);
    setFirstName("");
    setLastName("");  
    setErrors([]);
    if (firstName.length < 1) {
      setErrors((errors) => [...errors, "First name is required!"]);
    }

    // props.submittedData(firstName, lastName);
  }
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    {errors.map((error , index) => (
      <p key={index} style={{color:"red"}}>{error}
      </p>
    ))
    // errors.map((error) => (
      //   <p style={{color:"red"}}>{error}</p>
      // ))
    }
    <h3>Submissions</h3>
    {listOfSubmissions}
    </div>
  );
}

export default Form;
