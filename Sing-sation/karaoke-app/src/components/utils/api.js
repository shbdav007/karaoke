export const fetchSongs = async () => {
    // Call to API for fetching songs
    const response = await fetch("/api/songs");
    return response.json();
  };
  
  export const fetchSongDetails = async (songId) => {
    const response = await fetch(`/api/songs/${songId}`);
    return response.json();
  };
  