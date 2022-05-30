// this keeps a running total of deposits and withdrawals\
const ATMDeposit = ({ onChange, isDeposit }) => {
  const choice = ["Deposit", "Withdrawal"];
  return (
    <label className="label huge">
      <h3> {choice[Number(!isDeposit)]}</h3>
      <input type="number" onChange={onChange}></input>
      <input type="submit" value="Submit"></input>
    </label>
  );
};
const Account = () => {
  const [accountState, setAccountState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  let  deposit = 0;

  let status = `Account Balance $ ${accountState}`;

  const handleChange = event => {
    deposit = Number(event.target.value);
  };

  const handleSubmit = () => {
    let newTotal = isDeposit ? accountState + deposit : accountState - deposit;
    setAccountState(newTotal);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} id="form">
      <h2 id="total">{status}</h2>
      <button onClick={()=>setIsDeposit(true)}>Deposit</button>
      <button onClick={()=>setIsDeposit(false)}>Withdrawal</button>
      <ATMDeposit onChange={handleChange} isDeposit={isDeposit}> Deposit</ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
