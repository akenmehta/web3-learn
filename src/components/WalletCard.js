import { React, useState, ethers, styled } from "../vendor";
import { useNfts } from "../hooks";
import {  sampleAccount, getAccountMethod, getBalanceMethod } from "../settings";
import { Card } from "./Card";

const WalletCard = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const { getUserNfts, isFetching, fetchedNfts } = useNfts();
  console.log(fetchedNfts);

  const handleClick = async () => {
    if (window.ethereum) {
      const [fetchedAccountNumber] = await window.ethereum.request(getAccountMethod);
      const fetchedBalance = fetchedAccountNumber && await window.ethereum.request(getBalanceMethod(sampleAccount));

      fetchedAccountNumber && setDefaultAccount(fetchedAccountNumber);
      fetchedBalance && setUserBalance(ethers.utils.formatEther(fetchedBalance));
      const [status] = await getUserNfts();
      !status && setErrorMessage('Failed to load Nfts.');
    } else {
      setErrorMessage('Install MetaMask!');
    }
  }

  return (
    <div>
      <h1>Nfts</h1>
      <button onClick={handleClick}>Connect Wallet</button>

     {isFetching ?
     <p>Loading...</p> :
     (<>
      <h3>Account: {defaultAccount || '-'}</h3>
      <h3>User Balance: {userBalance || '-'}</h3>
      <span>{errorMessage}</span>
      <CardContainer>
        {fetchedNfts.map(fetchedNft => <Card {...fetchedNft} />)}
      </CardContainer>
     </>)}
    </div>
  )
};



const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;


export { WalletCard };
