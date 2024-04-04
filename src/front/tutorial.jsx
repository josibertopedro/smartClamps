import React, { useState } from 'react';
import { FaUser, FaSignOutAlt, FaSearch } from 'react-icons/fa';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function YouTubeVideo({ videoId, title, description }) {
  return (
    <div className="video-card">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Tutoriais() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredVideos, setFilteredVideos] = useState([
    {
      videoId: "dQw4w9WgXcQ",
      title: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
      description: "Rick Astley's official music video for 'Never Gonna Give You Up'. Enjoy!"
    },
    {
      videoId: "VwufGiIFV5Y",
      title: "Charlie Puth - Attention [Official Video]",
      description: "Attention is a song recorded and produced by American singer Charlie Puth. Check it out!"
    },
    {
      videoId: "7MLzql3pP-s",
      title: "Ed Sheeran - Shape of You [Official Video]",
      description: "Shape of You is a song by English singer-songwriter Ed Sheeran. Watch it now!"
    }
  ]);

  const handleSearch = () => {
    const term = searchTerm.trim().toLowerCase();
    if (term === '') {
      setFilteredVideos(filteredVideos);
    } else {
      const filtered = filteredVideos.filter(video =>
        video.title.toLowerCase().includes(term)
      );
      setFilteredVideos(filtered);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {
        console.error('Erro ao fazer logout:', error);
      });
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="/logo" alt="Logo" />
        </div>
        <div className="login-icon">
          <FaUser />
        </div>
      </nav>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <FaSearch onClick={handleSearch} />
      </div>
      <div className="tutorials">
        <h1>Tutoriais</h1>
        <div className="video-grid">
          {filteredVideos.map(video => (
            <YouTubeVideo
              key={video.videoId}
              videoId={video.videoId}
              title={video.title}
              description={video.description}
            />
          ))}
        </div>
      </div>
      <footer className="footer">
        <span className="footer-text">SmartClamps</span>
      </footer>
      <div className="logout-button">
        <button className="button" onClick={handleLogout}>
          <FaSignOutAlt />Sair
        </button>
      </div>
    </>
  );
}
