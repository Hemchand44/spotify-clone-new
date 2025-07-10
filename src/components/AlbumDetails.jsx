import React from "react";
import { useParams } from "react-router-dom";

const albumData = {
  1: {
    title: "Top Hits",
    songs: [
      { id: 1, title: "Hit Song 1", file: "song1.mp3" },
      { id: 2, title: "Hit Song 2", file: "song2.mp3" },
    ],
  },
  2: {
    title: "Chill Vibes",
    songs: [
      { id: 3, title: "Chill Track 1", file: "song3.mp3" },
      { id: 4, title: "Chill Track 2", file: "song4.mp3" },
    ],
  },
};

const AlbumDetails = () => {
  const { id } = useParams();
  const album = albumData[id];

  if (!album) {
    return <div className="text-white p-4">Album not found</div>;
  }

  return (
    <div className="p-4 text-white">
      <h2 className="text-3xl font-bold mb-6">{album.title}</h2>
      <ul className="space-y-4">
        {album.songs.map((song) => (
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

export default AlbumDetails;
