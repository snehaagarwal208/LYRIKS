import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";
const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: artistData,
    isFeteching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(artistId);
  if (isFetchingArtistDetails)
    return <Loader title="Searching Artists Details" />;
  if (error) return <Error />;
  console.log(artistData);
  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />
      {/* {console.log(Object.values(artistData?.songs))} */}
      <RelatedSongs
        artistId={artistId}
        // data={Object.values(artistData?.songs)}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
