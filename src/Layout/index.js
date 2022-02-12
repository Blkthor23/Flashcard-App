import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import ViewDecks from "./Decks/ViewDecks";
import { listDecks } from "../utils/api";
import CreateNewDeck from "./Decks/CreateNewDeck"

function Layout() {
  const [decks, setDecks] = useState([])
  useEffect(() => {
    const abortController = new AbortController()
    listDecks(abortController.signal).then(setDecks)

    return () => {
      abortController.abort()
    }
  }, [])

  return (
    <>
      <Header />
      
      <Switch>
        <Route path="/" exact> 
        <ViewDecks decks={decks}/>
        </Route>
        <Route path="/decks/new">
          <h1>New Deck</h1>
          <CreateNewDeck />
        </Route>
        <Route path="/decks/:deckId" exact> 
          <h1>decks</h1>
        </Route>
        <Route path="/decks/:deckId/study">
          <h1>study</h1>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default Layout;
