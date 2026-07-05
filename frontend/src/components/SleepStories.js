import React from 'react';
import '../styles/SleepStories.css';

const stories = [
  {
    title: "Starry Night Journey",
    description: "Drift into sleep with a magical journey through a peaceful starlit forest.",
    audio: "/assets/breath.mp3",
    type: "Story"
  },
  {
    title: "Ocean Whisper",
    description: "Let the sound of waves lull you into deep relaxation.",
    audio: "/assets/beach1.mp4",
    type: "Story"
  },
  {
    title: "Delta Waves - Deep Sleep",
    description: "Slow delta frequency music to help induce deep, restorative sleep.",
    audio: "/assets/delta1.mp3",
    type: "Delta"
  },
  {
    title: "Delta Healing Frequencies",
    description: "Promotes natural healing and deeper unconscious rest.",
    audio: "/assets/delta2.mp3",
    type: "Delta"
  },
  {
    title: "Theta Brainwaves - Dream Induction",
    description: "Theta frequencies for vivid dreams and deep meditation.",
    audio: "/assets/theta1.mp3",
    type: "Theta"
  }
];

const SleepStories = () => {
  return (
    <div className="sleep-container">
      <h1>🌙 Sleep Stories & Brainwave Music</h1>
      <p>Unwind with calming bedtime narratives and scientifically backed brainwave audio for deep sleep.</p>

      <div className="story-grid">
        {stories.map((story, index) => (
          <div className="story-card" key={index}>
            <div className="story-header">
              <h3>{story.title}</h3>
              <span className={`tag ${story.type.toLowerCase()}`}>{story.type}</span>
            </div>
            <p>{story.description}</p>
            <audio controls>
              <source src={story.audio} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SleepStories;
