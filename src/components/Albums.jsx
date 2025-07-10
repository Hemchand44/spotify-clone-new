import React from "react";
import { useNavigate } from "react-router-dom";

const albums = [
  { id: 1, title: "Top Hits", cover: "img1.jpg" },
  { id: 2, title: "Chill Vibes", cover: "img2.jpg" },
];

const Albums = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 text-white">
      <h2 className="text-2xl font-bold mb-4">Albums</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {albums.map((album) => (
          <div
            key={album.id}
            className="bg-gray-800 p-3 rounded hover:bg-gray-700 cursor-pointer"
            onClick={() => navigate(`/albums/${album.id}`)}
          >
            <img
              src={`/src/assets/${album.cover}`}
              alt={album.title}
              className="rounded mb-2"
            />
            <h3 className="text-lg">{album.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Albums;
