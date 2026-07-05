import React, { useState } from "react";
import "../styles/quiz.css";

import { useNavigate } from "react-router-dom";

function Quiz() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleAnswer = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    setStep(step + 1);
  };

  const getRecommendation = () => {
    const emotionalStates = ["Anxious", "Stressed"];
    const meditativePreferences = ["Guided meditation", "Listening to calming voice", "Visualizing peaceful scenes"];
    const prefersMeditation = emotionalStates.includes(answers.q1) || meditativePreferences.includes(answers.q8);
    return prefersMeditation ? "Meditation" : "Breathing";
  };

  const handleSubmitQuiz = async () => {
    const result = getRecommendation();
    const userId = localStorage.getItem("userId"); 

    try {
      const response = await fetch("http://localhost:5000/api/quiz/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId,
          result,
          answers
        })
      });

      const data = await response.json();
      if (!data.success) {
        console.error("Failed to save quiz result.");
      }
    } catch (err) {
      console.error("Error submitting quiz:", err);
    }
  };

  return (
    <div className="quiz-wrapper">
      <div className="quiz-container">
        <h2 className="quiz-title">Mood-Based Personalized Quiz</h2>

        {step === 1 && (
          <div className="quiz-question">
            <p>How are you feeling right now?</p>
            {["Calm", "Anxious", "Tired", "Distracted", "Stressed"].map(option => (
              <button key={option} onClick={() => handleAnswer("q1", option)}>{option}</button>
            ))}
          </div>
        )}

        {step === 2 && (
          <div className="quiz-question">
            <p>What’s the main reason behind your current feeling?</p>
            {answers.q1 === "Anxious" && ["Overthinking", "Deadlines", "Social pressure", "Unknown cause"].map(option => (
              <button key={option} onClick={() => handleAnswer("q2", option)}>{option}</button>
            ))}
            {answers.q1 === "Tired" && ["Poor sleep", "Exhaustion", "Burnout", "Emotional fatigue"].map(option => (
              <button key={option} onClick={() => handleAnswer("q2", option)}>{option}</button>
            ))}
            {answers.q1 === "Distracted" && ["Notifications", "Stress", "Lack of interest", "Mind wandering"].map(option => (
              <button key={option} onClick={() => handleAnswer("q2", option)}>{option}</button>
            ))}
            {answers.q1 === "Calm" && ["Curiosity", "Looking to stay calm", "Interested in mindfulness"].map(option => (
              <button key={option} onClick={() => handleAnswer("q2", option)}>{option}</button>
            ))}
            {answers.q1 === "Stressed" && ["Time pressure", "Unresolved conflict", "Workload", "Personal issues"].map(option => (
              <button key={option} onClick={() => handleAnswer("q2", option)}>{option}</button>
            ))}
          </div>
        )}

        {step === 3 && (
          <div className="quiz-question">
            <p>What’s your energy level like today?</p>
            {["Low", "Moderate", "High"].map(option => (
              <button key={option} onClick={() => handleAnswer("q3", option)}>{option}</button>
            ))}
          </div>
        )}

        {step === 4 && (
          <div className="quiz-question">
            <p>What do you think would help you most right now?</p>
            {["A short breathing reset", "Guided meditation", "Grounding visualization", "Just silence"].map(option => (
              <button key={option} onClick={() => handleAnswer("q4", option)}>{option}</button>
            ))}
          </div>
        )}

        {step === 5 && (
          <div className="quiz-question">
            <p>Do you prefer to work on your emotions or your focus?</p>
            {["Emotions", "Focus", "Both"].map(option => (
              <button key={option} onClick={() => handleAnswer("q5", option)}>{option}</button>
            ))}
          </div>
        )}

        {step === 6 && (
          <div className="quiz-question">
            <p>When you’re overwhelmed, what’s your usual reaction?</p>
            {["Shut down", "Overthink", "Seek distraction", "Try to push through"].map(option => (
              <button key={option} onClick={() => handleAnswer("q6", option)}>{option}</button>
            ))}
          </div>
        )}

        {step === 7 && (
          <div className="quiz-question">
            <p>How well do you manage to slow your thoughts when needed?</p>
            {["Easily", "With effort", "Rarely", "Never"].map(option => (
              <button key={option} onClick={() => handleAnswer("q7", option)}>{option}</button>
            ))}
          </div>
        )}

        {step === 8 && (
          <div className="quiz-question">
            <p>What sounds more appealing right now?</p>
            {["Slow deep breathing", "Listening to calming voice", "Visualizing peaceful scenes", "Not sure"].map(option => (
              <button key={option} onClick={() => handleAnswer("q8", option)}>{option}</button>
            ))}
          </div>
        )}

        {step === 9 && (
          <div className="quiz-question">
            <p>Are you comfortable sitting still with your thoughts for a few minutes?</p>
            {["Yes", "Sometimes", "Not really", "No"].map(option => (
              <button key={option} onClick={() => handleAnswer("q9", option)}>{option}</button>
            ))}
          </div>
        )}

        {step === 10 && (
          <div className="quiz-question">
            <p>What would you like to feel at the end of this session?</p>
            {["Refreshed", "More present", "Emotionally balanced", "Clear-headed"].map(option => (
              <button key={option} onClick={() => handleAnswer("q10", option)}>{option}</button>
            ))}
          </div>
        )}

        {step === 11 && (
          <div className="quiz-result">
            <div className="activity-buttons">
              <button
  className="activity-btn"
  onClick={async () => {
    await handleSubmitQuiz(); // ensure quiz is saved first
    const recommendation = getRecommendation();
    navigate(recommendation === "Meditation" ? "/meditation" : "/breathing");
  }}
>
  Begin Your Recommended Activity
</button>
<p>Based on your answers, we recommend :</p>
<p><strong>{getRecommendation()}</strong></p>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
