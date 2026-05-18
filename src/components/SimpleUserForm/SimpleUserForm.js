function SimpleUserForm({
  currentUser,
  amount,
  changeAmount,
  setNewAmount,
  name,
  changeName,
  setNewName,
  description,
  changeDescription,
  setNewDescription,
}) {
  return (
    <form className={currentUser !== "" ? "mt-4 mt-md-0" : "d-none"}>
      <div className="mb-4">
        <h2>{currentUser.name}</h2>
        <h3>Jest Ci winien: {currentUser.amount} zł.</h3>
      </div>
      <div className="mb-3">
        <label htmlFor="newName" className="form-label">
          Wpisz nową nazwę użytkownika
        </label>
        <input
          type="text"
          className="form-control"
          id="newName"
          value={name}
          onChange={changeName}
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={setNewName}>
        Zapisz
      </button>

      <div className="mt-4 mb-3">
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

      <div className="mt-4 mb-3">
        <label htmlFor="newDescription" className="form-label">
          Wpisz nowy opis
        </label>
        <input
          type="text"
          className="form-control"
          id="newDescription"
          value={description}
          onChange={changeDescription}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={setNewDescription}
      >
        Zapisz
      </button>
      <div className="d-flex justify-content-end mt-4">
        <button type="button" className="btn btn-danger btn-sm">
          Usuń użytkownika
        </button>
      </div>
    </form>
  );
}

export default SimpleUserForm;
