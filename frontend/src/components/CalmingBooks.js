import React, { useState, useEffect } from 'react';
import '../styles/CalmingBooks.css';

const books = [
  {
    title: "You become what you think",
    description: "'You Become What You Think'by Shubham Kumar Singh is a self-help book that emphasizes the importance of positive thinking for personal growth and well-being.",
    link: "https://drive.google.com/file/d/1aGhvbQbF4wxpU0Z2TelQ2YOJTO3lyA-f/view",
    totalChapters: 6,
  },
  {
    title: "Change Your Day, Not Your Life",
    description: "A realistic guide to sustained motivation, more productivity, and the art of working well.It helps you build lasting habits and focus on what truly matters.",
    link: "https://nibmehub.com/opac-service/pdf/read/Change%20Your%20Day-%20Not%20Your%20Life%20_%20a%20realistic%20guide%20to%20sustained%20motivation-%20more%20productivity%20and%20the%20art%20of%20working%20well.pdf",
    totalChapters: 18,
  },
  {
    title: "Power of the Subconscious Mind",
    description: "By using the powers of your subconscious mind correctly, you free your mind of all sense of competition and anxiety.- Joseph Murphy",
    link: "https://drive.google.com/file/d/1ZGic7WpTf33cjIg35WgoWuGwxu4-8A6D/view",
    totalChapters: 20,
  },
  {
    title: "Ikigai - The Japanese Secret to a Long and Happy Life",
    description: "This document contains a table of contents for a book about ikigai, or having a sense of purpose, and the secrets to longevity found in Japanese cultures.",
    link: "https://drive.google.com/file/d/1Z8tTr8ZQ_rQZ-MHh65UE1paL0AT0V-aE/view",
    totalChapters: 9,
  },
  {
    title: "The Power of Positive Thinking",
    description: "The Power of Positive Thinking by Norman Vincent Peale, published in 1952, promotes the idea that optimism and self-belief can transform lives.",
    link: "https://drive.google.com/file/d/19pQkJ8NDG2CDP5XISWdOxwQkyMzqg1tp/view",
    totalChapters: 17,
  }, 
  {
    title: "The Alchemist",
    description: "'The Alchemist' is a novel by Paulo Coelho, narrating the journey of Santiago,  who is driven by recurring dreams to find a hidden treasure in the Egyptian pyramids.",
    link: "https://drive.google.com/file/d/1aVFyz1PofDMF0q2C_orQnwcD12ZLRZdJ/view",
    totalChapters: 6,
  },
  {
    title: "Don't Believe Everything You Think",
    description: "Don't Believe Everything You Think - by Joseph Nguyen is a self-help book that aims to help readers overcome anxiety, self-doubt, and self-sabotage. ",
    link: "https://drive.google.com/file/d/1XcJRqQYLmgAh_iUt0769T_PNhMhrIEo_/view",
    totalChapters: 17,
  },
   {
    title: "The Art of Laziness",
    description: "The Art of Laziness by Library Mindset promotes strategic laziness to enhance creativity and productivity.It encourages intelligent idleness, meaningful work, and effective time management. ",
    link: "https://drive.google.com/file/d/1YQtwquYcwNEFIgtMdFTJ6S5ROdK9sAkw/view",
    totalChapters: 26,
  }
];

const CalmingBooks = ({ userId }) => {
  // Use userId-based key in localStorage
  const storageKey = `userBooks_${userId}`;

  // Initialize userBooks from localStorage for this user
  const [userBooks, setUserBooks] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : [];
  });

  // Save userBooks on change
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(userBooks));
  }, [userBooks, storageKey]);

  const handleDownload = (book) => {
    const exists = userBooks.find(b => b.title === book.title);
    if (!exists) {
      setUserBooks([...userBooks, { ...book, chaptersRead: 0 }]);
    }
    window.open(book.link, "_blank");
  };

  const updateProgress = (title, chaptersRead) => {
    setUserBooks(prev =>
      prev.map(b => (b.title === title ? { ...b, chaptersRead: Number(chaptersRead) } : b))
    );
  };

  const handleDelete = (title) => {
    setUserBooks(prev => prev.filter(b => b.title !== title));
  };

  return (
    <div className="calming-books-container">
      <h1>📘 Calming Books & Guides</h1>
      <p>Explore empowering reads that promote mental clarity, peace, and self-improvement.</p>

      <div className="book-grid">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            <div className="book-icon">📖</div>
            <div className="book-details">
              <h3>{book.title}</h3>
              <p>{book.description}</p>
              <button
                className="download-btn"
                onClick={() => handleDownload(book)}
              >
                📥 Download PDF
              </button>
            </div>
          </div>
        ))}
      </div>

      {userBooks.length > 0 && (
        <>
          <h2>Your Reading List & Progress</h2>
          <div className="user-books-list">
            {userBooks.map((book, idx) => {
              const progressPercent = Math.round((book.chaptersRead / book.totalChapters) * 100);
              const isCompleted = book.chaptersRead >= book.totalChapters;

              return (
                <div key={idx} className="user-book-card">
                  <h3>{book.title}</h3>
                  <p>
                    Chapters read:{" "}
                    <input
                      type="number"
                      min={0}
                      max={book.totalChapters}
                      value={book.chaptersRead}
                      onChange={(e) => updateProgress(book.title, e.target.value)}
                    />{" "}
                    / {book.totalChapters}
                  </p>

                  <div className="progress-bar-background">
                    <div
                      className="progress-bar-foreground"
                      style={{ width: `${progressPercent}%` }}
                    ></div>
                  </div>
                  <p>{progressPercent}% completed</p>

                  {isCompleted && (
                    <>
                      <p className="completed-message">
                        Well done on completing the book! Every page you finished is a step toward a calmer mind and stronger well-being.
                      </p>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(book.title)}
                      >
                        Delete from list
                      </button>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default CalmingBooks;
