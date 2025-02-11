import React, { useState } from "react";
import axios from "axios";
import "./CoinData.css";

const CoinData = ({ data, coinId }) => {
  const [quantity, setQuantity] = useState(0);
  const [transactionStatus, setTransactionStatus] = useState(null);

  // Handle Buy action
  const handleBuy = async () => {
    try {
      if (quantity <= 0) {
        alert("Please enter a valid quantity.");
        return;
      }
  
      const coinId = data.name;
      const coinPrice = data.current_price;
  
      const response = await axios.post("http://localhost:5000/wallet/buy", {
        coinId,
        quantity,
        coinPrice,
        transactionType: "buy",
      });
  
      setTransactionStatus(`Successfully bought ${quantity} ${data.name}!`);
      console.log("Buy response:", response.data);
    } catch (error) {
      console.error("Error buying crypto:", error);
  
      // Check for insufficient balance error
      if (error.response && error.response.data.error === "Insufficient balance.") {
        setTransactionStatus("Insufficient balance in wallet.");
      } else {
        setTransactionStatus("Error in buying crypto.");
      }
    }
  };
  

  // Handle Sell action
  const handleSell = async () => {
    try {
      if (quantity <= 0) {
        alert("Please enter a valid quantity.");
        return;
      }
      
      const coinId=data.name
      const coinPrice=data.current_price
      const response = await axios.post("http://localhost:5000/wallet/sell", {
        coinId,
        quantity,
        coinPrice,
        transactionType: "sell",
      });
      setTransactionStatus(`Successfully sold ${quantity} ${data.name}!`);
      console.log("Sell response:", response.data);
    } catch (error) {
      console.error("Error selling crypto:", error);
      setTransactionStatus("Error in selling crypto.");
    }
  };

  const renderData = () => {
    if (data) {
      return (
        <div className="bg-white mt-3 p-2 rounded border row cd">
          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Market Cap</span>
              <span>{data.market_cap}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Total Supply</span>
              <span>{data.total_supply}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Volume(24H)</span>
              <span>{data.total_volume}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">High 24h</span>
              <span>{data.high_24h}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Circulating Supply</span>
              <span>{data.circulating_supply}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Low 24h</span>
              <span>{data.low_24h}</span>
            </div>
          </div>

          {/* Buy and Sell Section */}
          <div className="col-sm-12 mt-3">
            <div className="d-flex flex-column">
              <span className="text-muted">Quantity to Buy/Sell</span>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter quantity"
                className="amount-input"
              />
            </div>
            <div className="d-flex justify-content-between mt-3">
              <button className="btn btn-success" onClick={handleBuy}>
                Buy
              </button>
              <button className="btn btn-danger" onClick={handleSell}>
                Sell
              </button>
            </div>
            {transactionStatus && <div className="transaction-status">{transactionStatus}</div>}
          </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;
