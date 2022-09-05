import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Stack } from "react-bootstrap";
import axios from "axios";

export default function Person() {
  const [name, setName] = useState("Your Name Here");
  const [age, setAge] = useState("Your Age Here");
  const [gender, setGender] = useState("Your Gender Here");
  const [newAge, setNewAge] = useState("Your Age + 5 Years");

  function handleSubmit(e) {
    e.preventDefault();
    // setName(e.target.formName.value)
    // setAge(e.target.formAge.value)
    // setGender(e.target.formGender.value)
    getNewAge()
    // console.log(e.target.formName.value)
  }


  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleAgeChange(e) {
    setAge(e.target.value)
  }

  function handleGenderChange(e) {
    setGender(e.target.value)
  }


  async function getNewAge() {
    
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/person?name=${name}&age=${age}&gender=${gender}`)
    .then(res => {
        setNewAge(res.data)
        console.log(res.data)
    })
    .catch(err => {
      console.log(err);
    })
    
  }

  return (
    <div data-testid="person">
      <h2> Enter Your Information Here!</h2>

      <Form onSubmit={handleSubmit}>
      <Stack gap={2} className="col-md-4 mx-auto">
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" id="formName" data-testid="name-input" onChange={handleNameChange}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" placeholder="Enter Age" id="formAge" data-testid="age-input" onChange={handleAgeChange}/>
        </Form.Group>

     
        <Form.Select id="formGender" data-testid="gender-input" onChange={handleGenderChange}>
          <option>Select Gender</option>
          <option value="Male" >Male</option>
          <option value="Female" >Female</option>
        </Form.Select>

        <Button variant="outline-dark" type="submit" data-testid="submit">
          Submit
        </Button>
        </Stack>
      </Form>

        <div className="info">
        <h2> Your Information</h2>
        <br></br>
        <p data-testid="name-output" >Name: {name}</p>
        <p data-testid="age-output" >Age: {age}</p>
        <p data-testid="gender-output" >Gender: {gender}</p>
        { newAge && <p data-testid="new-age-output" >New Age: {newAge}</p> }

        </div>

    </div>
  );
}
