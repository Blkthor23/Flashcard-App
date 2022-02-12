import React from "react";
import { Link } from "react-router-dom";

const CreateDeck = () => {
    return (
      <div className="container">
        <Link to="/decks/new"><button className="btn btn-secondary oi oi-check"> Create Deck</button></Link>
      </div>
    )
  }



export default CreateDeck