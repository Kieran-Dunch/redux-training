import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Card({ id }) {
  const card = useSelector((state) => state.cards.entities[id]);
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
