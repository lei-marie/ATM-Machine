// this keeps a running total of deposits and withdrawals\
const ATMDeposit = ({ onChange, isDeposit}) => {
  const choice = ["Deposit", "Withdrawal"];
  return (
    <label className="label huge">
      <h3> {choice[Number(!isDeposit)]}</h3>
      <input type="number" onChange={onChange}></input>
      <input type="submit"  value="Submit"></input>
    </label>
  );
};
const Account = () => {
  const [deposit, setDeposit] = React.useState(0);
  const [accountState, setAccountState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [validTransaction, setValidTransaction] = React.useState(false);

  let status = `Account Balance $ ${accountState}`;

  const handleChange = event => {
    if(Number(event.target.value <= 0)) {
      return setValidTransaction(false);
    } 
    if (Number(event.target.value) > accountState) {
      setValidTransaction(false);
    } else {
      setValidTransaction(true);
    };
    setDeposit(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    let newTotal = isDeposit ? accountState + deposit : accountState - deposit;
    setAccountState(newTotal);
    setValidTransaction(false);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} id="form">
      <h2 id="total">{status}</h2>
      <button onClick={()=>setIsDeposit(true)} value="Deposit">Deposit</button>
      <button onClick={()=>setIsDeposit(false)} value="Withdrawal">Withdrawal</button>
      <ATMDeposit onChange={handleChange} isDeposit={isDeposit} isValid={validTransaction}> Deposit</ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
