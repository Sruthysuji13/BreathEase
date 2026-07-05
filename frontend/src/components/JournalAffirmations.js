import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/JournalAffirmations.css';

const JournalAffirmations = () => {
  const [journalEntry, setJournalEntry] = useState('');
  const [affirmationEntry, setAffirmationEntry] = useState('');
  const [entries, setEntries] = useState([]);
  const [viewAll, setViewAll] = useState(false);

  const token = localStorage.getItem('token');

  // Fetch journal entries from backend
  const fetchEntries = async () => {
    if (!token) return; // no token, no fetch

    try {
      const res = await axios.get('http://localhost:5000/api/journal', {
        headers: { Authorization: `Bearer ${token}` }
      });

      // Show last 5 or all entries based on viewAll flag
      setEntries(viewAll ? res.data : res.data.slice(0, 5));
    } catch (err) {
      console.error("Failed to fetch journal entries", err);
    }
  };

  // Fetch entries on mount and whenever viewAll or token changes
  useEffect(() => {
    fetchEntries();
  }, [viewAll, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!affirmationEntry.trim()) {
      alert("Affirmation is required.");
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/journal',
        { affirmation: affirmationEntry, journal: journalEntry },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Prepend new entry to list
      const updatedEntries = [res.data, ...entries];
      setEntries(viewAll ? updatedEntries : updatedEntries.slice(0, 5));

      setJournalEntry('');
      setAffirmationEntry('');
    } catch (err) {
      console.error("Failed to save journal entry", err);
      alert("Failed to save journal entry. Please try again.");
    }
  };

  const handleViewAll = () => {
    setViewAll(true);
  };

  return (
    <div className="journal-container">
      <h1>📖 Journal & Affirmations</h1>
      <p>Reflect on your day and strengthen your mind with daily affirmations.</p>

      <div className="affirmation-box">
        <h3>🌟 Your Affirmation (Required)</h3>
        <input
          type="text"
          value={affirmationEntry}
          onChange={(e) => setAffirmationEntry(e.target.value)}
          placeholder="I am calm, strong, and in control..."
          className="affirmation-input"
          required
        />
      </div>

      <form className="journal-form" onSubmit={handleSubmit}>
        <label htmlFor="journal-entry">📝 How was your day?</label>
        <textarea
          id="journal-entry"
          rows="5"
          value={journalEntry}
          onChange={(e) => setJournalEntry(e.target.value)}
          placeholder="Share your thoughts, experiences, or gratitude..."
        />
        <button type="submit">Save Entry</button>
      </form>

      {entries.length > 0 && (
        <div className="entry-history">
          <h2>📅 Your Entries</h2>
          {entries.map((entry) => (
            <div className="entry-card" key={entry._id || entry.id}>
              <p><strong>Affirmation:</strong> {entry.affirmation}</p>
              <p><strong>Journal:</strong> {entry.journal || '-'}</p>
              <p className="timestamp">Created: {new Date(entry.createdAt).toLocaleString()}</p>
              <p className="timestamp">Last Modified: {new Date(entry.updatedAt).toLocaleString()}</p>
            </div>
          ))}

          {!viewAll && entries.length >= 5 && (
            <button className="view-all-btn" onClick={handleViewAll}>View All</button>
          )}
        </div>
      )}
    </div>
  );
};

export default JournalAffirmations;
