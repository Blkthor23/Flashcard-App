import React from "react";
import { Switch, Route } from "react-router-dom";
import CreateDeck from "./CreateDeckOnClick";
import ListDecks from "./ListDecks";


const ViewDecks = ({ decks }) => {
  return (
    <>
        <CreateDeck />
        <ListDecks decks={decks}/>
    </>
  );
};

export default ViewDecks;
