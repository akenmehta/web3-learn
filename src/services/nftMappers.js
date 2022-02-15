const mapApiToNft = (apiValue) => ({
  type: apiValue?.meta?.content?.[0]?.['@type'] || '',
  url: apiValue?.meta?.content?.[0]?.url || '',
  name: apiValue?.meta?.name || '-',
  description: apiValue?.meta?.description || '-',
  mintedAt: apiValue?.mintedAt || '',
});

const mapApiToNtfs = (apiValues) => {
  return apiValues?.map((apiValue) => mapApiToNft(apiValue)) || []
}

const nftMappers = {
  mapApiToNft,
  mapApiToNtfs,
};

export {nftMappers };
