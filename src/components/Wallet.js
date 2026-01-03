import React, { useEffect, useState } from "react";
import api from "../services/api";

function Wallet() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    api.get("/wallet/balance?userId=1")
      .then(res => setBalance(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Wallet Balance</h2>
      <h3>₹ {balance}</h3>
    </div>
  );
}

export default Wallet;
