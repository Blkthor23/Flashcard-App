import React from 'react'
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton"
export default function ListDecks({decks}) {
    let List
    if(decks.length > 0){
    List = decks.map((deck) => {
        return (
          <li className="list-group-item" key={deck.id}>
            <h2>{deck.name}</h2>
            <p>{deck.description}</p>
            <Link to={`/decks/${deck.id}`}><button type="button" className="btn btn-primary">view</button></Link>
            <Link to={`/decks/${deck.id}/study`}><button type="button" className="btn btn-secondary">study</button></Link>
            <DeleteButton deckId={deck.id}/>
          </li>
        );
      });
    }
    return (
    <div className="list-group">
        {List}
    </div>
  )
}