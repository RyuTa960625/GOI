import React, { useEffect, useState } from "react";
import styles from "./MyStockDetail.module.css";
import StockExchange from "../mainStock/StockExchange";

export default function MyStockDetail(props) {
  const [stockExchangeModal, setStockExchangeModal] = useState(false);
  const [transactionType, setTransactionType] = useState(""); // 매수 또는 매도 여부 상태

  const stockExchangeModalOpen = (type) => {
    setTransactionType(type);
    // setStockExchangeModal(true);
    props.setMyStocksDetailModal(true);
  };

  return (
    <div className={styles.background}>
      <div className={styles.companyArea}>{props.item}</div>
      <div className={styles.priceArea}>
        {props.nowVal?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/주
      </div>
      <div className={styles.danga}>
        {props.buyVal?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </div>
      <div className={styles.havingArea}>{props?.shares}주 보유</div>
      <div className={styles.roiArea}>{props?.roi}</div>
      {/* <button
        className={styles.sellButtons}
        onClick={() => stockExchangeModalOpen("sell")}
      >
        매도
      </button>
      {props.myStocksDetailModal && (
        <StockExchange
          setStockExchangeModal={setStockExchangeModal}
          item={props.item}
          transactionType={transactionType}
          myStocksDetailModal={props.myStocksDetailModal}
          setMyStocksDetailModal={props.setMyStocksDetailModal}
        />
      )} */}
    </div>
  );
}
