import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSongDetails } from "../utils/api";
import { startRecording, stopRecording, playAudio } from "../utils/audio";

const KaraokePlayer = () => {
  const { songId } = useParams();
  const [song, setSong] = useState(null);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    const loadSong = async () => {
      const songData = await fetchSongDetails(songId);
      setSong(songData);
    };

    loadSong();
  }, [songId]);

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
    setIsRecording(!isRecording);
  };

  if (!song) {
    return <p>Loading song...</p>;
  }

  return (
    <div className="karaoke-player">
      <h2>{song.title}</h2>
      <audio controls>
        <source src={song.audioUrl} type="audio/mpeg" />
      </audio>
      <div className="lyrics">
        {song.lyrics.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <button onClick={toggleRecording}>
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
      <button onClick={() => playAudio(song.audioUrl)}>Play</button>
    </div>
  );
};

export default KaraokePlayer;
