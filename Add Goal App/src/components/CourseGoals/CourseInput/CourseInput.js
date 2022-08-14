import React, { useState } from "react";
//import styled from "styled-components";

import Button from "../../UI/Button/Button"; 
import styles from "./CourseInput.module.css"; // with css modules (second way)


// with using form control, from styled-components (first way)
// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => props.invalid ? "red" : "black"}
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props=> props.invalid ? "red" : "#ccc"};
//     background: ${props=> props.invalid ? "rgb(228, 147, 147)" : "transparent"};

//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValidInput, setIsValidInput] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValidInput(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      // checking if the user entered an epmty string (notning)
      //trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.
      setIsValidInput(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles["form-control"]} ${!isValidInput && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

//Template literals{``} are literals delimited with backtick (`) characters, allowing for multi-line strings,
// for string interpolation with embedded expressions, and for special constructs called tagged templates.
// `string text ${expression} string text`
// ADDING STYLES DYNAMICALLY:
// {`form-control ${!isValidInput? "invalid" : ""}`}> returns a: form-control or form-control invalid
