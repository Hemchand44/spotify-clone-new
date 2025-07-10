import React from "react";
import { useNavigate } from "react-router-dom";

const playlists = [
  { id: 1, name: "My Favorites", songCount: 2 },
  { id: 2, name: "Study Mode", songCount: 2 },
];

const Playlists = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 text-white">
      <h2 className="text-2xl font-bold mb-4">Playlists</h2>
      <ul>
        {playlists.map((pl) => (
          <li
            key={pl.id}
            onClick={() => navigate(`/playlists/${pl.id}`)}
            className="mb-2 p-3 bg-gray-800 rounded hover:bg-gray-700 cursor-pointer"
          >
            <div className="text-lg font-semibold">{pl.name}</div>
            <div className="text-sm text-gray-400">{pl.songCount} songs</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlists;
