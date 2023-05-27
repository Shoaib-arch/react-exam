import React from 'react'
import { useState } from 'react';

function PollDisplay() {



  return (
    <div>
    <div>{Question()}</div>
   </div>
    )
}

export default PollDisplay;



function Question() {
  const [choices, setChoices] = useState([
    { id: 1, label: 'JavaScript', votes: 0 },
    { id: 2, label: 'Python', votes: 0 },
    { id: 3, label: 'Java', votes: 0 },
    { id: 4, label: 'C#', votes: 0 },
  ]);

  const handleVote = (choiceId) => {
    const updatedChoices = choices.map((choice) => {
      if (choice.id === choiceId) {
        return { ...choice, votes: choice.votes + 1 };
      }
      return choice;
    });
    setChoices(updatedChoices);
  };

  return (
    <div>
      <h3>What is your favorite programming language?</h3>
      <ul>
        {choices.map((choice) => (
          <li key={choice.id}>
            <button onClick={() => handleVote(choice.id)}>
              {choice.label}
            </button>
            <span>Votes: {choice.votes}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}








