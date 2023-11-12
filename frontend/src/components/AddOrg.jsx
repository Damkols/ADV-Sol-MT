import React from "react";
import myAbi from "../../abi.json";
import {
 ConnectWallet,
 useContract,
 useContractRead,
 useContractWrite,
} from "@thirdweb-dev/react";
import { useState } from "react";

const AddOrg = () => {
 const contractAddress = myAbi.address;
 const abi = myAbi.abi;
 const { contract } = useContract(contractAddress, abi);
 const [orgName, setOrgName] = useState("");
 const [tokenName, setTokenName] = useState("");
 const [tokenSymbol, setTokenSymbol] = useState("");
 const { data } = useContractRead(contract, "getStoredValue", []);

 const { mutateAsync, isLoading, error } = useContractWrite(
  contract,
  "addOrganization"
 );

 const handleInput = (e) => {
  e.preventDefault();
  const value = e.target.value;
  setOrgName(value);
 };
 const handleInput1 = (e) => {
  e.preventDefault();
  const value = e.target.value;
  setTokenName(value);
 };
 const handleInput2 = (e) => {
  e.preventDefault();
  const value = e.target.value;
  setTokenSymbol(value);
 };

 return (
  <div className="container">
   <h1>Welcome to My Dapp</h1>
   <div>
    <div className="connect-wallet">
     <ConnectWallet
      switchToActiveChain={true}
      dropdownPosition={{
       side: "bottom",
       align: "center",
      }}
     />
    </div>

    <div className="value-section">
     <span>Value: {Number(data)}</span>
    </div>

    <div className="value-section">
     <div className="orgname">
      <label htmlFor="orgName">Organization Name: </label>
      <input type="text" id="orgName" value={orgName} onChange={handleInput} />
     </div>
     <div className="orgToken">
      <label htmlFor="tokenName">Organization Token Name: </label>
      <input
       type="text"
       id="tokenName"
       value={tokenName}
       onChange={handleInput1}
      />
     </div>
     <div className="tokenSymbol">
      <label htmlFor="tokenSymbol">Organization Token Symbol: </label>

      <input
       type="text"
       id="tokenSymbol"
       value={tokenSymbol}
       onChange={handleInput2}
      />
     </div>

     <button
      onClick={async () => {
       try {
        console.log(String(orgName), String(tokenName), String(tokenSymbol));
        await mutateAsync({
         args: [String(orgName), String(tokenName), String(tokenSymbol)],
        });
       } catch (error) {
        console.error(error);
       }
      }}
     >
      Set Value
     </button>
    </div>
   </div>
  </div>
 );
};

export default AddOrg;
