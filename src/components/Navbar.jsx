import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Wrapper>
      <Left>
        <Link to='/' className='styledLink'>
          <Logo>Tori</Logo>
        </Link>
      </Left>
      <Right>
        <Link to='/login' className='styledLink'>
          <Text>Login</Text>
        </Link>
        <Link to='signup' className='styledLink'>
          <Text>Signup</Text>
        </Link>

        <Button>Logout</Button>
      </Right>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: aliceblue;
`;

const Left = styled.div``;

const Right = styled.div`
  display: flex;
  align-items: baseline;
  gap: 15px;
`;

const Logo = styled.h2``;

const Text = styled.h4`
  font-weight: 500;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 5px 10px;
`;
