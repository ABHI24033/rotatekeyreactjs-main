import React, { useState } from "react";
import { MdOutlineLocalOffer } from "react-icons/md";
import { isMobile } from "react-device-detect";

import "./Wallet.css";
import { RiWallet2Line } from "react-icons/ri";
import {BiRupee} from "react-icons/bi"

const mobstyle = {
 display:"flex",
 flexDirection:"column",
 margin:"30px auto 10px auto"
};
const deskstyle = {
  display:"flex"

};
function Wallet() {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleAddMoney = (event) => {
    event.preventDefault();
    setBalance(balance + Number(amount));
    setAmount(0);
  };

  return (
    <>
      <div className="wallet-container2" style={isMobile ? mobstyle:deskstyle}>
        <div className="wallet-container">
          <h1 className="wallet-title">
            My Wallet <RiWallet2Line />
          </h1>
          <div className="money rounded-lg" style={{backgroundColor:"white" ,height:"4cm",borderRadius:""}}>
          <p className="wallet-balance">Balance:<br/> <BiRupee/>{balance.toFixed(2)}</p>

          </div>
          <form onSubmit={handleAddMoney}>
          
            <label>
              Amount to add:
              <input
                type="number"
                value={amount}
                onChange={handleAmountChange}
                className="wallet-input"
              />
            </label>
            <button type="submit" className="add-money">
              Add money
            </button>
          </form>
        </div>
        <div className="offer-container">
        <div>
          <h6 className="offer-title">
            Offer Available <MdOutlineLocalOffer />
          </h6></div>
          <div>
          <p className="offer-quote">Buy any plan and pay through your wallet get 10-20% discount</p>
          <center>
          <button className="button-offer">Buynow</button></center>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wallet;
