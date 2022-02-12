import React from "react";
import { deleteDeck } from "../../utils/api";
import { Link, useHistory } from "react-router-dom";

export default function DeleteButton({deckId}) {
  const history = useHistory()
  const handleDelete = (event) => {
    if (window.confirm("Are you sure you want to delete")) {
      deleteDeck(deckId);
      history.push("/")
    }
  };

  return (
    <Link to=""><button type="button" className="btn btn-primary" onClick={handleDelete}>trash</button></Link>
    )
}
