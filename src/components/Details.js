import React from 'react';
import styled from 'styled-components';

const StyledUl = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  font-family:monospace;
  font-weight:bold;
  text-shadow:1px 1px 1px white;
  font-size:1.25rem;
  margin-bottom:0;
  li{
      &::selection{
          color:#80FE68;
      }
  }
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
