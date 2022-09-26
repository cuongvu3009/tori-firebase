import React, { useState } from 'react';
import styled from 'styled-components';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <h4>Signup</h4>
        <label>Name</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type='submit'>Signup</Button>
      </form>
    </Wrapper>
  );
};

export default Signup;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    border: 1px solid #000;
    padding: 25px;
  }
`;

const Button = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 10px;
`;
