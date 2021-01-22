import React from 'react';
import styled from 'styled-components';

const StyledUl = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;

export default function Details(props) {
  const { species, origin, status, location } = props;

  return (
    <StyledUl>
      <li>Origin: {origin}</li>
      <li>Species: {species}</li>
      <li>Status: {status}</li>
      <li>Location: {location}</li>
    </StyledUl>
  );
}
