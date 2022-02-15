const sampleAccount = '0xEBfb4E44a5F12E371aAd48ca0263a1373BAd0361';
const BASE_URL = `https://api.rarible.org/v0.1/items/byOwner`;

const getAccountMethod = {
  method: 'eth_requestAccounts',
};

const getBalanceMethod = (account) => ({
  method: 'eth_getBalance',
  params: [account, 'latest']
});

const Constants = {
  IMAGE_TYPE: 'IMAGE',
  VIDEO_TYPE: 'VIDEO',
}

export {
  getAccountMethod,
  getBalanceMethod,
  sampleAccount,
  BASE_URL,
  Constants,
}