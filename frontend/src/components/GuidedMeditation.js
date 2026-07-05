
import React, { useState } from 'react';
import '../styles/GuidedMeditation.css';

import audio1 from '../assets/confidence1.mp3';
import audio2 from '../assets/conf2.mp3';
import audio3 from '../assets/conf3.mp3';
import audio4 from '../assets/conf4.mp3';
import audio5 from '../assets/still1.mp3';
import audio6 from '../assets/still2.mp3';
import audio7 from '../assets/still3.mp3';
import audio8 from '../assets/child1.mp3';
import audio9 from '../assets/child2.mp3';
import audio10 from '../assets/child3.mp3';
import audio11 from '../assets/chakra1.mp3';
import audio12 from '../assets/chakra2.mp3';
import audio13 from '../assets/chakra3.mp3';
import audio14 from '../assets/anx1.mp3';
import audio15 from '../assets/anx2.mp3';
import audio16 from '../assets/anx3.mp3';

const meditationSections = [
  {
    title: '💪 Confidence Boost',
    audios: [
      { title: 'Confidence Boost', desc: 'How To Develop your Self-Confidence', src: audio1 },
      { title: 'Power-Lion Mentality', desc: 'Start your day with determination.', src: audio2 },
      {title: 'Life Changing Story', desc: 'Donot Compare Yourself to Anyone ', src: audio3},
      {title: 'Your Strength', desc: ' This will show you how strong you are ', src: audio4},
    ]
  },
  {
    title: '🧘 Stillness Practice',
    audios: [
      
      { title: 'Breathe and Be', desc: 'Path to real peace', src: audio6 },
      { title: 'Stillness', desc: 'How To Be Calm and Peaceful ', src: audio5 },
      { title: 'Path to peace', desc: 'Learn this to Find Peace in Life', src: audio7 },
    ]
  },
  {
    title: '🧒 Embrace Your Inner Child',
    audios: [
      { title: 'Playful Heart', desc: 'How Healing Your Inner Child Can Transform Your Relationships', src: audio8 },
      { title: 'Pure Joy', desc: 'Unlocking passion in life', src: audio9 },
      { title: 'Childlike Wonder', desc: 'How to be happy and free', src: audio10 }

    ]
  },
  {
    title: '🌀 Chakra Tune-In',
    audios: [
      { title: 'All about Chakras', desc: 'Secret of 7 Chakras & Third Eye  Sadhguru', src: audio11 },
      { title: '2-Min per Chakra', desc: 'Quick Chakra Tune Up 2 Mins Per Chakra', src: audio12 },
       { title: '3-Min per Chakra', desc: 'Quick 7 Chakra Cleansing 3 Minutes Per Chakra ', src: audio13 }
    ]
  },
 
  {
    title: '😰 Anxiety SOS',
    audios: [
      { title: 'Morning Affirmations', desc: 'Good Things Are Happening to Me', src: audio14 },
      { title: 'Having an Anxiety Attack?', desc: 'The Calm-Down Method for Stopping Anxiety Attacks', src: audio15 },
      { title: 'Morning Motivation ', desc: 'Affirmations To Overcome Worry And Anxiety', src: audio16 }
    ]
  }
];

const podcastSection = {
  title: '🎙️ Mindful Podcasts & TEDx Talks',
  podcasts: [
    {
      title: 'Overcoming Fear | TEDx Talk',
      desc: '',
      videoEmbed: 'https://www.youtube.com/embed/wnHW6o8WMas',
    },
    {
      title: 'The Power of Vulnerability | TEDx Talk',
      desc: '',
      videoEmbed: 'https://www.youtube.com/embed/iCvmsMzlF7o',
    },

    // NEW TEDx Talks Added Below
    {
      title: 'How to be confident (even if you’re not) | Montana von Fliss | TEDx',
      desc: '',
      videoEmbed: 'https://www.youtube.com/embed/eVFzbxmKNUw',
    },
    {
      title: 'Six behaviors to increase your confidence | Emily Jaenson | TEDx',
      desc: '',
      videoEmbed: 'https://www.youtube.com/embed/IitIl2C3Iy8',
    },
    {
      title: '7 Ways to Make a Conversation With Anyone | Malavika Varadan | TEDx',
      desc: '',
      videoEmbed: 'https://www.youtube.com/embed/F4Zu5ZZAG7I',
    },
    {
      title: 'Reading minds through body language | Lynne Franklin | TEDx',
      desc: '',
      videoEmbed: 'https://www.youtube.com/embed/W3P3rT0j2gQ',
    },
    {
      title: 'The Magic of Pursuing Your Passion | Gabriella Lester | TEDx',
      desc: '',
      videoEmbed: 'https://www.youtube.com/embed/QlE3yJw2G0c',
    },
    {
      title: 'The Luck Formula: The Secret to Being in the Right Place at Right Time | Yin Noe | TEDx',
      desc: '',
      videoEmbed: 'https://www.youtube.com/embed/0YPBVeHWPaw',
    },
    {
      title: 'How to know your life purpose in 5 minutes | Adam Leipzig | TEDx',
      desc: '',
      videoEmbed: 'https://www.youtube.com/embed/vVsXO9brK7M',
    },
    {
      title: 'The power of not thinking too much | Pranjal Priya | TEDx',
      desc: '',
      videoEmbed: 'https://www.youtube.com/embed/SDqB_dhqWdI',
    },
    {
      title: 'How to Get What You Want Without Saying a Word | Luna (Luciana) Stella | TEDx',
      desc: '',
      videoEmbed: 'https://www.youtube.com/embed/RpocQqZxfkM',
    },
    {
      title: 'How Being Bold Will Change Your Life | Gregory Russell Benedikt | TEDx',
      desc: '',
      videoEmbed: 'https://www.youtube.com/embed/ezygvBTXeeQ',
    },
  ],
};

const GuidedMeditation = () => {
  const [openMeditation, setOpenMeditation] = useState(null);
  const [openPodcast, setOpenPodcast] = useState(false);

  const toggleMeditation = (index) => {
    setOpenMeditation(openMeditation === index ? null : index);
  };

  const togglePodcast = () => {
    setOpenPodcast(!openPodcast);
  };

  return (
    <div className="guided-meditation-container">
      <h1>🧘 Guided Meditation & Podcasts</h1>
      <p>Explore guided meditations and mindful podcasts to nurture your mind and soul.</p>

      {/* Meditations Accordion */}
      <div className="accordion-container">
        {meditationSections.map((section, idx) => (
          <div key={idx} className="accordion-section meditation-section">
            <div className="accordion-header" onClick={() => toggleMeditation(idx)}>
              <h2>{section.title}</h2>
              <span>{openMeditation === idx ? '−' : '+'}</span>
            </div>
            {openMeditation === idx && (
              <div className="accordion-content">
                <div className="session-cards">
                  {section.audios.map((audio, i) => (
                    <div key={i} className="session-card">
                      <h3>{audio.title}</h3>
                      <p>{audio.desc}</p>
                      <audio controls src={audio.src}></audio>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Podcasts Accordion */}
      <div className="accordion-section podcast-section">
        <div className="accordion-header" onClick={togglePodcast}>
          <h2>{podcastSection.title}</h2>
          <span>{openPodcast ? '−' : '+'}</span>
        </div>
        {openPodcast && (
          <div className="accordion-content">
            <div className="session-cards">
              {podcastSection.podcasts.map((podcast, i) => (
                <div key={i} className="session-card podcast-card">
                  <h3>{podcast.title}</h3>
                  <p>{podcast.desc}</p>
                  {podcast.videoEmbed ? (
                    <iframe
                      width="100%"
                      height="150"
                      src={podcast.videoEmbed}
                      title={podcast.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <audio controls src={podcast.src}></audio>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GuidedMeditation;

