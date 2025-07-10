import React, { useState } from "react";
import { assets } from "../assets/assets";

const songList = [
  { id: 1, title: "Love Story", file: "song1.mp3", cover: "img1.jpg" },
  { id: 2, title: "Calm Nights", file: "song2.mp3", cover: "img2.jpg" },
  { id: 3, title: "Dance Vibes", file: "song3.mp3", cover: "img3.jpg" },
  { id: 4, title: "Heart Beats", file: "song4.mp3", cover: "img4.jpg" },
];

const Search = () => {
  const [query, setQuery] = useState("");

  const filteredSongs = songList.filter((song) =>
    song.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4 text-white">
      <h2 className="text-2xl font-bold mb-4">Search Music</h2>
      <input
        type="text"
        placeholder="Search for songs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
      />

      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredSongs.map((song) => (
          <div key={song.id} className="bg-gray-800 p-4 rounded">
            <img
              src={`/src/assets/${song.cover}`}
              alt={song.title}
              className="rounded mb-2"
            />
            <h3 className="text-lg">{song.title}</h3>
            <audio controls className="w-full mt-2">
              <source src={`/src/assets/${song.file}`} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>

      {filteredSongs.length === 0 && query && (
        <p className="mt-6 text-gray-400">No songs found for "{query}"</p>
      )}
    </div>
  );
};

export default Search;
