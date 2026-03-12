import React, { useState } from "react";
import "./MoodTracker.css";

function MoodTracker() {

  const moods = {
    Happy: { emoji: "😊", color: "#fde047" },
    Sad: { emoji: "😢", color: "#93c5fd" },
    Excited: { emoji: "🤩", color: "#fca5a5" },
    Calm: { emoji: "😌", color: "#86efac" }
  };

  const [mood, setMood] = useState("Calm");

  return (
    <div
      className="container"
      style={{ backgroundColor: moods[mood].color }}
    >

      <h1>Mood Tracker</h1>

      <div className="moodDisplay">
        <span className="emoji">{moods[mood].emoji}</span>
        <h2>{mood}</h2>
      </div>

      <div className="buttons">
        {Object.keys(moods).map((m) => (
          <button key={m} onClick={() => setMood(m)}>
            {m}
          </button>
        ))}
      </div>

    </div>
  );
}

export default MoodTracker;
