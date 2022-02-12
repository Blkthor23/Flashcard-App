import React from 'react'

export default function DeckForm() {
  const deckform = (
    <form className="container">
        <p>Name</p>
        <input></input>
        <p>Description</p>
        <textarea></textarea>
        <button>Cancel</button>
        <button type="submit">Submit</button>
    </form>
  )

  return (
    <div>{deckform}</div>
  )
}
