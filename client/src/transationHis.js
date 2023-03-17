import React, { useState, useEffect } from "react";
import "./TransactionHistory.css";

const TransactionHistory = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch("https://api.example.com/transactions")
            .then((response) => response.json())
            .then((data) => setTransactions(data));
    }, []);

    return (
        <div className="TransactionHistoryContainer">
            <a className="Wallet">Back to Wallet (or wherever)</a>
            <div className="titleTH">Transaction History</div>
            <div className="bodyTH">
                <div className="leftboxTH">
                    <b className="lboxtitle" href="#">
                        Sort By:{" "}
                    </b>
                    <a className="lboxitem" href="#">
                        Most recent{" "}
                    </a>
                    <a className="lboxitem" href="#">
                        Highest first{" "}
                    </a>
                    <a className="lboxitem" href="#">
                        Lowest first{" "}
                    </a>
                    <a className="lboxitem" href="#">
                        Placeholder{" "}
                    </a>
                    <a className="lboxitem" href="#">
                        Placeholder{" "}
                    </a>
                </div>

                <div className="rightboxTH">
                    <div className="rboxtitleTH">Pending</div>
                    <div className="rboxtitleTH">Completed</div>
                    <div className="rboxbodyTH">
                        {transactions.map((transaction) => (
                            <div key={transaction.id}>
                                <p>{transaction.date}</p>
                                <p>{transaction.amount}</p>
                                <p>{transaction.description}</p>
                                <p>{transaction.status}</p>
                            </div>
                        ))}
                    </div>
                    <a className="rboxshowallTH">Show All</a>
                </div>
            </div>
        </div>
    );
};

export default TransactionHistory;
