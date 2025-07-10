import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Display from "./components/Display";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import { PlayerContext } from "./context/PlayerContext";
import Search from "./components/Search";
import Albums from "./components/Albums";
import Playlists from "./components/Playlists";
import AlbumDetails from "./components/AlbumDetails";
import PlaylistDetails from "./components/PlaylistDetails";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen w-screen bg-black overflow-hidden">
      <div className="h-[90%] w-full flex">
        <Sidebar />
        
        <div className="flex-1 overflow-y-scroll">
          <Routes>
            <Route path="/" element={<Display />} />
            <Route path="/search" element={<Search />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/albums/:id" element={<AlbumDetails />} />
            <Route path="/playlists/:id" element={<PlaylistDetails />} />
          </Routes>
        </div>
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto" />
    </div>
  );
};

export default App;
