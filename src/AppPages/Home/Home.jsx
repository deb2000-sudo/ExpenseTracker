import { useState,useEffect } from "react";
import AppCard from "../../components/AppCard/AppCard";
import styles from "./Home.module.css";
const Home = () => {
  const [balance, setBalance] = useState(0);
  const [expense, setExpense] = useState(0);

  //an useEffect require for initial setup for balance
  useEffect(()=>{
    //first check the localStorage
    const localStorageBalance=localStorage.getItem("balance");
    //if there is no balance
    if(localStorageBalance){
        setBalance(Number(localStorageBalance));
    }else{
        setBalance(5000);
        localStorage.setItem("balance",5000);
    }
  },[])
  return (
    <div className={styles.ETcontainer}>
      <h1>Expense Tracker</h1>
      <div className={styles.CardAndChartWrapper}>
        <AppCard
          cardTitle="Wallet Balance"
          money={balance}
          buttonText="+ Add Income"
          buttonType="success"
        />
        <AppCard
          cardTitle="Expenses"
          money={expense}
          success={false}
          buttonText="+ Add Expense"
          buttonType="danger"
        />
      </div>
    </div>
  );
};

export default Home;
