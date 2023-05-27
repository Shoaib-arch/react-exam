import React from 'react'
import { useState } from 'react';

function UserParticipation() {
    const [choices, setChoices] = useState([
        { id: 1, label: 'JavaScript', votes: 0 },
        { id: 2, label: 'Python', votes: 0 },
        { id: 3, label: 'Java', votes: 0 },
        { id: 4, label: 'C#', votes: 0 },
      ]);
  return (
    <div>{UserParticipation1(choices)}</div>
  )
}

export default UserParticipation


const UserParticipation1 = ({ choices }) => {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [choiceCounts, setChoiceCounts] = useState(
    choices.reduce((acc, choice) => {
      acc[choice.id] = 0;
      return acc;
    }, {})
  );
  const [hasVoted, setHasVoted] = useState(false);

  const handleChoiceSelection = (choiceId) => {
    if (hasVoted) {
      // Prevent multiple selections from the same user
      return;
    }

    setSelectedChoice(choiceId);
  };

  const handleVoteSubmission = () => {
    if (!selectedChoice || hasVoted) {
      return;
    }

    setChoiceCounts((prevChoiceCounts) => {
      const updatedChoiceCounts = { ...prevChoiceCounts };
      updatedChoiceCounts[selectedChoice]++;

      return updatedChoiceCounts;
    });

    setHasVoted(true);
  };

  return (
    <div>
      <h3>Choose your preferred answer:</h3>
      <ul>
        {choices.map((choice) => (
          <li key={choice.id}>
            <label>
              <input
                type="radio"
                name="choice"
                value={choice.id}
                checked={selectedChoice === choice.id}
                onChange={() => handleChoiceSelection(choice.id)}
              />
              {choice.text}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleVoteSubmission} disabled={hasVoted}>
        Submit Vote
      </button>
      {hasVoted && (
        <p>
          Thank you for voting! The current vote counts are as follows:
          <ul>
            {choices.map((choice) => (
              <li key={choice.id}>
                {choice.text}: {choiceCounts[choice.id]}
              </li>
            ))}
          </ul>
        </p>
      )}
    </div>
  );
};


