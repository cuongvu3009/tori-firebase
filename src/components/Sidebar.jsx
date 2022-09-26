import React from 'react';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <Wrapper>
      <ul>
        <li>New product</li>
        <li>Car</li>
        <li>Electronic</li>
        <li>Renting</li>
        <li>Wearing</li>
      </ul>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  flex: 1;
  width: max-content;
  padding: 20px;
  border-right: 1px solid #000;
  height: 80vh;

  li {
    list-style: none;
    font-size: large;
    padding: 10px;
    cursor: pointer;
    font-weight: 500;
  }

  li:hover {
    background-color: blue;
    color: #fff;
  }
`;
