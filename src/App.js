import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charData, setCharData] = useState([]);

  //For details function

  // const [charDetailsId, setCharDetailsId] = useState(null);

  // const openDetails = (id) => {
  //   setCharDetailsId(id);
  // };

  // const closeDetails = () => {
  //   setCharDetailsId(null);
  // };

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const StyledApp = styled.div`
    display: flex;
    max-width: 100%;
    flex-flow: row wrap;
    justify-content: space-around;

    h1 {
      width: 100%;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  `;

  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://rickandmortyapi.com/api/character')
        .then((res) => {
          setCharData(res.data.results);
        })
        .catch((err) => {
          debugger;
        });
    };
    fetchData();
  }, []);

  return (
    <StyledApp>
      <h1 className="Header">Rick and Morty Characters</h1>
      {charData.map((char) => {
        return (
          <Character
            key={char.id}
            id={char.id}
            charName={char.name}
            species={char.species}
            image={char.image}
            origin={char.origin.name}
            status={char.status}
            location={char.location.name}
            // open={openDetails}
            // close={closeDetails}
            // charId={charDetailsId}
          />
        );
      })}
    </StyledApp>
  );
};

export default App;
