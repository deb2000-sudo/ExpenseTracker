import { useState,useEffect } from "react";
import ModalApp from "../../components/Modal/ModalApp"
import AppCard from "../../components/AppCard/AppCard";
import styles from "./Home.module.css";
import AddIncomeForm from "../../components/AppForms/AddIncomeForm/AddIncomeForm";
import AddExpenseForm from "../../components/AppForms/AddExpenseForm/AddExpenseForm";
const Home = () => {
  const [balance, setBalance] = useState(0);
  const [expense, setExpense] = useState(0);

  //we need state variables to track whether modal are open or close
  //There is a modal for add balance so need a state variable for that
  const [isOpenBalance,setIsOpenBalance]=useState(false);
  //There is a modal for add the expenses so need a state variable to track
  const [isOpenExpense,setIsOpenExpense]=useState(false);
  //an useEffect require for initial setup for balance
  useEffect(()=>{
    //first check the localStorage
    const localStorageBalance=localStorage.getItem("balance");
    //if there is balance
    if(localStorageBalance){
        setBalance(Number(localStorageBalance));
    }else{
        //if there is no balance
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
          handleClick={() => {
            setIsOpenBalance(true);
          }}
        />
        <AppCard
          cardTitle="Expenses"
          money={expense}
          success={false}
          buttonText="+ Add Expense"
          buttonType="danger"
          handleClick={() => {
            setIsOpenExpense(true);
          }}
        />
      </div>
      {/* Modal for adding balance */}
      <ModalApp isModalOpen={isOpenBalance} setIsOpen={setIsOpenBalance}>
        <AddIncomeForm setIsOpen={setIsOpenBalance} setBalance={setBalance}/>
      </ModalApp>
      {/* Modal for adding expense */}
      <ModalApp isModalOpen={isOpenExpense} setIsOpen={setIsOpenExpense}>
        <AddExpenseForm setIsOpen={setIsOpenExpense} setExpense={setExpense} balance={balance} setBalance={setBalance}/>
      </ModalApp>

    </div>
  );
};

export default Home;
