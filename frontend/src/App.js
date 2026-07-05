// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your components
import Home from './components/Home';
import BreathingExercise from './components/BreathingExercise';
import Quiz from './components/quiz';
import Meditation from './components/meditation';
import LoginSignup from './components/LoginSignup';
import Welcome from './components/Welcome';

// Import meditation sub-modules
import NatureSounds from './components/NatureSounds';
import GuidedMeditation from './components/GuidedMeditation';
import CalmingBooks from './components/CalmingBooks';
import YogaStretching from './components/YogaStretching';
import SleepStories from './components/SleepStories';
import JournalAffirmations from './components/JournalAffirmations';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breathing" element={<BreathingExercise />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/meditation" element={<Meditation />} />
        <Route path="/auth" element={<LoginSignup />} />
        <Route path="/welcome" element={<Welcome />} />

        {/* Meditation sub-modules routes */}
        <Route path="/nature-sounds" element={<NatureSounds />} />
        <Route path="/guided-meditation" element={<GuidedMeditation />} />
        <Route path="/calming-books" element={<CalmingBooks />} />
        <Route path="/yoga-stretching" element={<YogaStretching />} />
        <Route path="/sleep-stories" element={<SleepStories />} />
        <Route path="/journal-affirmations" element={<JournalAffirmations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
