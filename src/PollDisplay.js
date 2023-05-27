import React from "react";

const PollDisplay = () => {
    const choices = [
        { id: 1, label: "JavaScript", votes: 0 },
        { id: 2, label: "Python", votes: 0 },
        { id: 3, label: "Java", votes: 0 },
        { id: 4, label: "C#", votes: 0 },
      ];
      
  return (
    <div>
      <h2>Poll display</h2>
      <ul>
        {choices.map((choice) => (
          <li key={choice.id}>
            {choice.label} - Votes: {choice.votes}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PollDisplay;
