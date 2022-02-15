import { useState } from "react";
import { BASE_URL, sampleAccount } from "../settings";
import { nftMappers } from "../services";

const useNfts = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [fetchedNfts, setfetchedNfts] = useState([]);

  const getUserNfts = async () => {
    setIsFetching(true);
    const response = await fetch(`${BASE_URL}/?owner=ETHEREUM:${sampleAccount}`)
    const data = await response.json();

    if (data && data?.items) {
      const mappedData = nftMappers.mapApiToNtfs(data?.items);
      setIsFetching(false);
      setfetchedNfts(mappedData);
      return [true];
    } 

    setIsFetching(false);
    return [false];
  };

  return {
    isFetching,
    getUserNfts,
    fetchedNfts,
  };
};

export { useNfts };
