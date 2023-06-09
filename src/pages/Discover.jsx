import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useDispatch, useSelector } from "react-redux";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();
  const genereTit = "Pop";
  if (isFetching) return <Loader title="Loading Songs......" />;

  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <div className="w-full justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genereTit}
        </h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-4">
        {data?.map((song, i) => (
          <SongCard
            data={data}
            isPlaying={isPlaying}
            activeSong={activeSong}
            key={song}
            i={i}
            song={song}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
