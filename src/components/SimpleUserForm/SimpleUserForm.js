function SimpleUserForm({ currentUser, amount, changeAmount, setNewAmount }) {
  return (
    <form className={currentUser !== "" ? "" : "d-none"}>
      <div className="mb-4">
        <h2>
          {currentUser.name} {currentUser.surname}
        </h2>
        <h3>Jest Ci winien: {currentUser.amount} zł.</h3>
      </div>
      <div className="mb-3">
        <label htmlFor="newAmount" className="form-label">
          Wpisz nową kwotę
        </label>
        <input
          type="number"
          className="form-control"
          id="newAmount"
          value={amount}
          onChange={changeAmount}
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={setNewAmount}>
        Zapisz
      </button>
    </form>
  );
}

export default SimpleUserForm;
