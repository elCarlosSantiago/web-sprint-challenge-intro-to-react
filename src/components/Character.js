// Write your Character component here
import React from 'react';
import styled from 'styled-components';
import Details from './Details';
const StyledChar = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: justify;
  width: 30%;
  img {
    border-radius: 20%;
  }
`;

export default function Character(props) {
  const { charName, image, species, origin, status, location } = props;

  return (
    <StyledChar>
      <h2>{charName}</h2>
      <img alt="cast of Rick and Morty" src={image} />
      {/* <button onClick={() => open(id)}>See details</button> */}
      <Details
        species={species}
        origin={origin}
        status={status}
        location={location}
      />
    </StyledChar>
  );
}
