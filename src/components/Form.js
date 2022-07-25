import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";

const styles = {
  button: {
    display: "flex",
    background: "#9a74db",
    fontSize: "1.2rem",
    color: "white",
    alignItems: "center",
    borderRadius: 8,
    margin: 4,
  },
  input: {
    padding: 10,
    borderRadius: 8,
    margin: 4,
  },
};


function Form() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    return name === 'Name' ? setName(value) : setEmail(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(`Hello Return Visitor: ${Name} ${Email}`);
    setName('');
    setEmail('');
  };

  return (
    <div>
      <p>
        Hello Return Visitor {Name}
      </p>
      <form className="form">
        <input
          style={styles.input}
          value={Name}
          name="Name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
      
        <p>
        <input
              style={styles.input}
          value={Email}
          name="Email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        </p>
        <button 
        style={styles.button}
        onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
