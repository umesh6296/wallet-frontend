import React, { useEffect, useState } from "react";
import api from "../services/api";

function TransactionHistory() {
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get("/transactions/history?userId=1")
      .then(res => setList(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {list.map(t => (
          <li key={t.id}>
            {t.type} - ₹{t.amount} - {t.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionHistory;
