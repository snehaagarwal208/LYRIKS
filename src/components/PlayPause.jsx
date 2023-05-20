import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
const PlayPause = ({ activeSong, isPlaying, song, handlePause, handleplay }) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} className="text-gray-300" onClick={handleplay} />
  );

export default PlayPause;
