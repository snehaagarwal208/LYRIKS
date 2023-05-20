import SongBar from "./SongBar";

const RelatedSongs = ({
  handlePauseClick,
  handleplayClick,
  data,
  isPlaying,
  activeSong,
  artistId,
}) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white ">Related Songs:</h1>
    <div className="mt-6 w-full flex flex-col">
      {data?.map((song, i) => (
        <SongBar
          key={`${song.key}-${artistId}`}
          song={song}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handleplayClick={handleplayClick}
          i={i}
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;