import React, { useState, useEffect } from "react";
import { fetchSongs } from "../utils/api";
import { Link } from "react-router-dom";

const SongCatalog = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const loadSongs = async () => {
      const songData = await fetchSongs();
      setSongs(songData);
    };

    loadSongs();
  }, []);

  return (
    <div className="song-catalog">
      <h2>Song Catalog</h2>
      <input
        type="text"
        placeholder="Search songs..."
        className="search-bar"
        // Implement search functionality later
      />
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <Link to={`/player/${song.id}`}>{song.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongCatalog;
