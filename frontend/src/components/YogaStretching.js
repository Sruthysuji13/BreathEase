import React, { useState, useEffect } from 'react';
import '../styles/YogaStretching.css';

const poses = [
  {
    name: "Child’s Pose (Balasana)",
    description: "This foundational pose can be relaxing and serve as a great reset during class. If you ever need a second during your flow to regroup, you can always come back to child's pose.",
    steps: [
      "Start kneeling on the floor and bring your big toes together. Sit on your heels and separate your knees out wide.",
      "Exhale as you fold forward and rest your torso down between your thighs.",
      "Extend your arms forward with palms down or place them beside your body, palms up."
    ],
    image: "/balasana.jpg"
  },
  {
    name: "Mountain Pose (Tadasana)",
    description: "A grounding pose that helps improve posture and balance. It is often used to start and end a standing yoga sequence.",
    steps: [
      "Stand with your feet together, arms at your sides.",
      "Distribute your weight evenly across both feet.",
      "Engage your thighs, lift your chest, and reach your arms overhead with palms facing inward."
    ],
    image: "/tadasana.jpg"
  },
  {
    name: "Downward Dog (Adho Mukha Svanasana)",
    description: "An energizing pose that stretches your entire body and helps relieve tension.",
    steps: [
      "Start on all fours, hands under shoulders and knees under hips.",
      "Tuck your toes and lift your hips up and back to form an inverted V shape.",
      "Press your heels towards the ground and keep your head between your arms."
    ],
    image: "/downdog.webp"
  },
  {
    name: "Low Lunge (Anjaneyasana)",
    description: "TAnother favorite pose of Rayburn's, this one is great for stretching the lower body and opening up the chest.",
    steps: [
      "Begin in downward facing dog. Exhale as you step your right foot forward in between your hands with the right knee over the right heel.",
      "Lower your left knee to the mat and slide that left leg back until you feel a gentle stretch through the front of the left thigh.",
      "Inhale as you sweep your arms out to the sides and lift your torso up, reaching your fingers towards the ceiling and drawing the tailbone down to the floor. Be sure to repeat on the opposite side."
    ],
    image: "/lowlunge.png"
  },
  {
    name: "Cobra Pose (Bhujangasana)",
    description: "This pose, also common in sun salutations, is ideal for improving posture as backbends are great for counteracting prolonged sitting.",
    steps: [
      "Begin by lying face down flat on the mat with your palms flat on the mat near your shoulders.",
      "Inhale as you lift your head and chest off the floor, rolling your shoulders back and down. Keep your elbows slightly bent and close to your sides.",
    ],
    image: "/cobra.png"
  },
  {
    name: "Chair Pose (Utkatasana)",
    description: "This powerful pose is great for strengthening the legs, arms and core.",
    steps: [
      "Stand tall and inhale as you raise your arms straight overhead. Your biceps should be slightly in front of your ears and palms should face inward.",
      "Bend your knees as you exhale, aiming for thighs to be parallel to the floor.",
      "Hold the pose for 30 seconds up to a minute."
    ],
    image: "/chair.webp"
  },
  {
    name: "Extended Side Angle Pose (Utthita Parsvakonasana)",
    description: "This empowering pose increases balance and strength. If you can't reach your fingertips all the way to the ground, consider utilizing a yoga block.",
    steps: [
      "Begin standing tall with feet about four feet apart. Turn the left foot out 90º and angle the right foot in slightly. Place arms in a 'T' position with palms facing down.",
      "Bend your left knee so that your left thigh becomes parallel with the floor. Hinge at the hips to bring your left arm towards the floor and place your left fingertips on the ground or on a block.",
      "Extend the right arm up over the right ear with your palm facing down and turn your chest towards that raised arm. Hold the pose for 30 seconds to a minute, then perform on the opposite side."
    ],
    image: "/side.jpg"
  },
  {
    name: " Pigeon Pose (Eka Pada Rajakapotasana)",
    description: "Great for opening the hips, this popular yoga pose targets the lower body and can provide a fantastic stretch. Ease into the movement and only fold forward if you feel stable once in position.",
    steps: [
      "Begin on your hands and knees. Gently slide your right knee forward to just outside your right hand. Angle your right shin towards the front of the mat.",
      "Square the hips towards the front of the mat. You can add a folded blanket under your right side for support.",
      "Stay upright and breath into the pose, or bring your torso down to the ground as you bend forward over the right leg. Repeat on the opposite side."
    ],
    image: "/pigeon.jpg"
  },
  {
    name: "Bridge Pose (Setu Bandha Sarvangasana)",
    description: "Another popular backbend, this pose can help improve posture and also relieve lower back pain.",
    steps: [
      "Begin lying on your back on the mat. Bend your knees and keep your feet hip width apart. Inch your feet a bit closer to your glutes. Arms should be flat along your sides on the mat.",
      "Press through your feet as you raise your hips, focusing on lifting from the pelvis. You can progress the pose by clasping your hands under your back on the floor.",
    ],
    image: "/bridge.jpg"
  },
  {
    name: "Tree Pose (Vrksasana)",
    description: "Not only does this standing yoga pose help improve your balance and coordination, but it also focuses on posture and alignment. Engage your core to help steady yourself.",
    steps: [
      "Begin standing tall with toes and feet pressed into the floor. Place your hands on your hips and find a steady gaze in front of you.",
      "Slowly raise your left foot onto your right shin or thigh while maintaining your gaze forward. Press the foot into the leg and breathe. Once you feel steady, consider bringing your hands to your heart or stretching them out overhead like branches.",
      "Hold for a few breaths, then step your foot back down and repeat on the other side."
    ],
    image: "/tree.png"
  },
  {
    name: "Corpse Pose (Savasana)",
    description: "This grounding pose is all about relaxation and quieting the mind. If you feel any tension under your lower back, consider placing a rolled-up blanket beneath your knees.",
    steps: [
      "Lay flat on your back on the mat. You can support your head and neck with a folded blanket if needed.",
      "Keep your shoulders down and away from your ears and breathe into the pose.",
    ],
    image: "/corpse.webp"
  }
];

const YogaStretching = () => {
  const [goalDays, setGoalDays] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [completedDates, setCompletedDates] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('yogaChallenge'));
    if (data) {
      setGoalDays(data.goalDays);
      setStartDate(data.startDate);
      setCompletedDates(data.completedDates || []);
    }
  }, []);

  useEffect(() => {
    if (goalDays && startDate) {
      localStorage.setItem(
        'yogaChallenge',
        JSON.stringify({ goalDays, startDate, completedDates })
      );
    }
  }, [goalDays, startDate, completedDates]);

  const getToday = () => new Date().toISOString().split('T')[0];

  const startChallenge = (days) => {
    setGoalDays(days);
    setStartDate(getToday());
    setCompletedDates([]);
  };

  const markTodayComplete = () => {
    const today = getToday();
    if (!completedDates.includes(today)) {
      setCompletedDates([...completedDates, today]);
    }
  };

  const daysCompleted = completedDates.length;

  return (
    <div className="yoga-container">
      <h1>🧘 Yoga & Stretching Guide</h1>
      <p>Explore foundational yoga poses with clear instructions and visual guidance - <b>Beginner's Guide</b></p>

      {/* Tracker UI */}
      <div className="tracker-section">
        <h2>📆 15 or 30 Day Yoga Challenge</h2>
        {!goalDays ? (
          <div>
            <p>Select your goal:</p>
            <button onClick={() => startChallenge(15)}>Start 15-Day</button>
            <button onClick={() => startChallenge(30)}>Start 30-Day</button>
          </div>
        ) : (
          <div>
            <p><strong>Goal:</strong> {goalDays} Days</p>
            <p><strong>Start Date:</strong> {startDate}</p>
            <p><strong>Completed:</strong> {daysCompleted} / {goalDays}</p>
            <button onClick={markTodayComplete} disabled={completedDates.includes(getToday())}>
              {completedDates.includes(getToday()) ? '✔ Completed Today' : 'Mark Today Complete'}
            </button>
            <div className="progress-bar">
              {[...Array(goalDays)].map((_, i) => (
                <div key={i} className={`day-box ${i < daysCompleted ? 'done' : ''}`}>{i + 1}</div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Yoga Poses List */}
      {poses.map((pose, index) => (
        <div className={`pose-section ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
          <div className="pose-image-wrapper">
            <img src={pose.image} alt={pose.name} className="pose-image" />
          </div>
          <div className="pose-info">
            <h2>{index + 1}. {pose.name}</h2>
            <p className="pose-desc">{pose.description}</p>
            <h3>How to:</h3>
            <ol>
              {pose.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YogaStretching;
