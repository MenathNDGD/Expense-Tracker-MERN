import React from "react";
import { LuDollarSign, LuShoppingCart } from "react-icons/lu";
import moment from "moment";

import TransactionInfoCard from "../Cards/TransactionInfoCard";

const RecentTransactions = ({ transactions, onSeeIncome, onSeeExpense }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Recent Transactions</h5>

        <div className="flex items-center gap-3">
          <button className="card-btn" onClick={onSeeIncome}>
            Income
            <LuDollarSign className="text-base" />
          </button>
          <button className="card-btn" onClick={onSeeExpense}>
            Expense
            <LuShoppingCart className="text-base" />
          </button>
        </div>
      </div>

      <div className="mt-6">
        {transactions?.slice(0, 5)?.map((item) => (
          <TransactionInfoCard
            key={item._id}
            title={item.type === "expense" ? item.category : item.source}
            icon={item.icon}
            date={moment(item.date).format("DD MMM YYYY")}
            amount={item.amount}
            type={item.type}
            hideDeleteBtn
          />
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
