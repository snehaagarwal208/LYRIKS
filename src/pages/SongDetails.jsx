import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from "../redux/services/shazamCore";
const SongDetails = () => {
  const { songid } = useParams();
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: songData, isFeteching: isFetchingSongDetails } =
    useGetSongDetailsQuery(songid);
  const {
    data,
    isFetching: isFetchingRelatedSongs,
    error,
  } = useGetSongRelatedQuery({ songid });

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handleplayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  if (isFetchingSongDetails || isFetchingRelatedSongs)
    return <Loader title="Searching Song Details" />;
  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={songData} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics: </h2>
        <div className="mt-5">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1].text.map((line, i) => (
              <p className="text-gray-400 textbase my-1">{line}</p>
            ))
          ) : (
            <p className="text-gray-400 textbase my-1">Sorry No Lyrics Found</p>
          )}
        </div>
      </div>
      <RelatedSongs
        handlePauseClick={handlePauseClick}
        handleplayClick={handleplayClick}
        data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default SongDetails;
