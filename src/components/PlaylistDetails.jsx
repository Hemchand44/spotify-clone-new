import React from "react";
import { useParams } from "react-router-dom";

const playlistData = {
  1: {
    name: "My Favorites",
    songs: [
      { id: 1, title: "Love Anthem", file: "song1.mp3" },
      { id: 2, title: "Fire Track", file: "song2.mp3" },
    ],
  },
  2: {
    name: "Study Mode",
    songs: [
      { id: 3, title: "Focus Flow", file: "song3.mp3" },
      { id: 4, title: "Deep Concentration", file: "song4.mp3" },
    ],
  },
};

const PlaylistDetails = () => {
  const { id } = useParams();
  const playlist = playlistData[id];

  if (!playlist) {
    return <div className="text-white p-4">Playlist not found</div>;
  }

  return (
    <div className="p-4 text-white">
      <h2 className="text-3xl font-bold mb-6">{playlist.name}</h2>
      <ul className="space-y-4">
        {playlist.songs.map((song) => (
          <li key={song.id} className="bg-gray-800 p-4 rounded">
            <h4 className="text-lg font-semibold">{song.title}</h4>
            <audio controls className="w-full mt-2">
              <source src={`/src/assets/${song.file}`} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistDetails;
