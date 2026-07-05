import React from "react";
import { Link } from "react-router-dom";
import "../styles/meditation.css";

function Meditation() {
  return (
    <div className="meditation-wrapper">
    <div className="meditation-container">
      <h2 className="meditation-title">Your Personalized Meditation Space</h2>

      <div className="meditation-grid">
        <div className="meditation-card">
          <h3>🎧 Nature Sounds</h3>
          <p>Relax with sounds of rain, waves, forest, and more.</p>
          <Link to="/nature-sounds">
            <button>Explore Sounds</button>
          </Link>
        </div>

        <div className="meditation-card">
          <h3>📺 Guided Meditation</h3>
          <p>Mindfulness sessions tailored to your mood and time.</p>
          <Link to="/guided-meditation">
            <button>Start Session</button>
          </Link>
        </div>

        <div className="meditation-card">
          <h3>📚 Calming Books</h3>
          <p>Access peaceful reads and PDF guides.</p>
          <Link to="/calming-books">
            <button>Download Books</button>
          </Link>
        </div>

        <div className="meditation-card">
          <h3>🧘‍♀️ Yoga & Stretching</h3>
          <p>Simple poses to calm your mind and body.</p>
          <Link to="/yoga-stretching">
            <button>View Yoga Guide</button>
          </Link>
        </div>

        <div className="meditation-card">
          <h3>🌛 Sleep Stories</h3>
          <p>Drift off with calming bedtime stories and music.</p>
          <Link to="/sleep-stories">
            <button>Play a Story</button>
          </Link>
        </div>

        <div className="meditation-card">
          <h3>📝 Journal & Affirmations</h3>
          <p>Track your mood and reflect with guided prompts.</p>
          <Link to="/journal-affirmations">
            <button>Write Now</button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Meditation;
