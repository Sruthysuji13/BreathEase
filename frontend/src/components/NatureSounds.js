import React, { useState } from "react";
import "../styles/NatureSounds.css";

const API_KEY = "AIzaSyAB_nS2D3STDM6WN7IQfchu8aVsuHyOKj0"; // Replace with your real YouTube API key

const NatureSounds = () => {
  const [searchTerm, setSearchTerm] = useState("calming music");
  const [videos, setVideos] = useState([]);

  // NEW: Recently played videos state, loaded from localStorage if available
  const [recentlyPlayed, setRecentlyPlayed] = useState(() => {
    const saved = localStorage.getItem("recentlyPlayed");
    return saved ? JSON.parse(saved) : [];
  });

  const fetchVideos = async (query) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=8&q=${encodeURIComponent(
          query
        )}&key=${API_KEY}`
      );
      const data = await response.json();
      setVideos(data.items || []);
    } catch (error) {
      console.error("Failed to fetch videos:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      fetchVideos(searchTerm.trim());
    }
  };

  // Initial fetch when component mounts
  React.useEffect(() => {
    fetchVideos(searchTerm);
  }, []);

  // NEW: Handle when user clicks a video to play
  const handlePlay = (video) => {
    // Add video to recentlyPlayed, keep only latest 5, no duplicates
    const updatedList = [video, ...recentlyPlayed.filter(v => v.id.videoId !== video.id.videoId)].slice(0, 5);
    setRecentlyPlayed(updatedList);
    localStorage.setItem("recentlyPlayed", JSON.stringify(updatedList));
  };

  return (
    <div className="nature-sounds-container">
      <h1>🎵 Soothing Music & Nature Sounds</h1>
      <p>Search and listen to calming songs and nature sounds from YouTube.</p>

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for sounds (e.g., rain, ocean, meditation)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit">Search</button>
      </form>

      <div className="video-list">
        {videos.length === 0 && <p>No results found.</p>}

        {videos.map(({ id, snippet }) => (
  <div key={id.videoId} className="video-card">
    <h4>{snippet.title}</h4>
    <iframe
      width="100%"
      height="180"
      src={`https://www.youtube.com/embed/${id.videoId}`}
      title={snippet.title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <button onClick={() => handlePlay({ id, snippet })}>Play</button>  {/* New Play Button */}
  </div>
))}

      </div>

      {/* NEW: Recently Played Section */}
      {recentlyPlayed.length > 0 && (
        <div className="recently-played">
          <h2>🎧 Recently Played</h2>
          <div className="video-list">
            {recentlyPlayed.map(({ id, snippet }) => (
              <div key={id.videoId} className="video-card">
                <h4>{snippet.title}</h4>
                <iframe
                  width="100%"
                  height="180"
                  src={`https://www.youtube.com/embed/${id.videoId}`}
                  title={snippet.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NatureSounds;
