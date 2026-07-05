import React, { useState, useEffect, useRef } from 'react';
import { Howl } from 'howler';
import backgroundMusic from '../assets/breath.mp3';
import backgroundVideo from '../assets/sceneary.mp4';
import '../styles/BreathingExercise.css';

const BreathingExercise = () => {
  const [phase, setPhase] = useState('inhale');
  const [scale, setScale] = useState(1);
  const [transitionDuration, setTransitionDuration] = useState('4s');

  const musicRef = useRef(null);

  useEffect(() => {
    musicRef.current = new Howl({
      src: [backgroundMusic],
      volume: 0.5,
    });

    musicRef.current.play();

    return () => {
      musicRef.current.stop();
    };
  }, []);

  useEffect(() => {
    let timeout;

    if (phase === 'inhale') {
      setScale(1.5);
      setTransitionDuration('4s');
      timeout = setTimeout(() => setPhase('hold'), 4000);
    } else if (phase === 'hold') {
      setScale(1.5);
      setTransitionDuration('0s');
      timeout = setTimeout(() => setPhase('exhale'), 7000);
    } else if (phase === 'exhale') {
      setScale(1);
      setTransitionDuration('8s');
      timeout = setTimeout(() => setPhase('inhale'), 8000);
    }

    return () => clearTimeout(timeout);
  }, [phase]);

  return (
    <div className="breathing-container">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="background-video"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Breathing Circle */}
      <div
        className="breathing-circle"
        style={{
          transform: `scale(${scale})`,
          transition: `transform ${transitionDuration} ease-in-out`,
        }}
      />
      
      {/* Breathing Text */}
      <p className="breathing-text">
        {phase === 'inhale' && 'Inhale...'}
        {phase === 'hold' && 'Hold...'}
        {phase === 'exhale' && 'Exhale...'}
      </p>
    </div>
  );
};

export default BreathingExercise;
