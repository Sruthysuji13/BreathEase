import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Welcome.css";

function Welcome() {
  const [recommendation, setRecommendation] = useState("");
  const [quizTaken, setQuizTaken] = useState(false);
  const navigate = useNavigate();

 const takeQuiz = () => {
  navigate("/quiz");
};

  const benefitContent = [
    {
      title: "What You’ll Discover Here",
      text:
        "BreathEase offers more than just breathing or meditation. You'll find a sanctuary for reflection, relaxation, and personal growth. With curated exercises, mood-based recommendations, and simple habits, we’ll guide you on your journey to a healthier, calmer you.",
    },
    {
      title: "Why Meditation Matters",
      text:
        "In a fast-moving world, stillness becomes strength. Meditation trains your mind to be more focused, more aware, and less reactive. It’s not about controlling your thoughts — it’s about learning to observe them with compassion and clarity.",
    },
    {
      title: "It's Okay to Start Small",
      text:
        "Even one mindful breath can change your state. You don’t need to be an expert or sit for hours. At ZenFlow, small consistent steps matter. Just showing up today is already an act of self-care.",
    },
    {
      title: "Mindfulness in Everyday Life",
      text:
        "Mindfulness doesn’t stop when you leave your mat. It flows into your conversations, your decisions, your mornings, and your moments of silence. Let ZenFlow help you carry that calm into the rest of your life.",
    },
  ];

  return (
    <div className="welcome-page">
      {/* Main Welcome Card */}
      <div className="welcome-container">
        <div className="welcome-card glass-effect">
          <h1 className="welcome-title">Welcome to BreathEase </h1>
          <p className="welcome-quote">
            "Inhale peace, exhale stress. Begin your mindful journey today."
            You’ve taken the first step toward inner peace. BreathEase is your
            personal space to breathe deeper, live slower, and think clearer.
            Whether you have 2 minutes or 20, we’re here to help you reconnect
            with yourself — one mindful breath at a time.
          </p>
        </div>
      </div>

      {/* Benefit Cards */}
      <div className="benefits-section">
        {benefitContent.map((item, index) => (
          <div
            className="benefit-card fade-in-up"
            key={index}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <h2 className="benefit-heading">{item.title}</h2>
            <p className="benefit-text">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Quiz + Quotes section moved below benefits */}
      <div className="quiz-section glass-effect">
        <div className="calming-texts">
          <h2>Not sure where to start on your journey to calm?</h2>
          <p>Take our quick mood-based quiz — it's designed to gently guide you toward what your mind and body may need right now.

Whether you’re feeling restless, anxious, overwhelmed, or simply curious, this quiz will help you tune in with yourself.
In just a few seconds, you’ll receive a personalized suggestion: a soothing breathing exercise or a grounding meditation session.

No overthinking, no pressure — just follow your breath and let us show you the way forward.
Your path to peace begins right here </p>
          
        </div>

        <button className="quiz-button" onClick={takeQuiz}>
          Take a Quick Mood Quiz
          
        </button>

        {quizTaken && (
          <div className="result-section fade-in">
            <p className="recommendation-text">
              Based on your mood, we recommend:{" "}
              <strong>
                {recommendation === "breathing"
                  ? "Breathing"
                  : "Meditation"}
              </strong>
            </p>

            <div className="activity-buttons">
              <button
                className={`activity-btn ${
                  recommendation === "breathing" ? "highlight" : ""
                }`}
                onClick={() => navigate("/breathing")}
              >
                Breathing
              </button>
              <button
                className={`activity-btn ${
                  recommendation === "meditation" ? "highlight" : ""
                }`}
                onClick={() => navigate("/meditation")}
              >
                Meditation
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Welcome;
