import { useState } from "react";

function AddNewUserForm({ users, setUsers, currentUser }) {
  const [userName, setUserName] = useState("");
  const [userAmount, setUserAmount] = useState("");
  const [userDescription, setUserDescription] = useState("");

  function changeUserName(e) {
    setUserName(e.target.value);
  }

  function changeUserAmount(e) {
    setUserAmount(e.target.value);
  }

  function changeUserDescription(e) {
    setUserDescription(e.target.value);
  }

  function addNewUserFormSubmit() {
    if (userName && userAmount && userDescription) {
      const newUser = {
        id: crypto.randomUUID(),
        date: new Date().toISOString().split("T")[0],
        name: userName,
        amount: userAmount,
        description: userDescription,
      };

      const myUsers = users.map((user) => ({ ...user }));
      myUsers.push(newUser);
      setUsers(myUsers);

      setUserName("");
      setUserAmount("");
      setUserDescription("");
    } else {
      alert("Wszystkie pola muszą być wypełnione!");
    }
  }

  return (
    <form className={currentUser === "" ? "mt-4 mt-md-0" : "d-none"}>
      <div className="mb-4">
        <h2>Dodaj nowego użytkownika</h2>
      </div>
      <div className="mb-3">
        <label htmlFor="userName" className="form-label">
          Nazwa
        </label>
        <input
          type="text"
          className="form-control"
          id="userName"
          value={userName}
          onChange={changeUserName}
        />
      </div>
      <div className="mt-4 mb-3">
        <label htmlFor="userAmount" className="form-label">
          Kwota pożyczki
        </label>
        <input
          type="text"
          className="form-control"
          id="userAmount"
          value={userAmount}
          onChange={changeUserAmount}
        />
      </div>
      <div className="mt-4 mb-3">
        <label htmlFor="userDescription" className="form-label">
          Opis
        </label>
        <input
          type="text"
          className="form-control"
          id="userDescription"
          value={userDescription}
          onChange={changeUserDescription}
        />
      </div>
      <button
        type="button"
        className="btn btn-success"
        onClick={addNewUserFormSubmit}
      >
        Dodaj użytkownika
      </button>
    </form>
  );
}

export default AddNewUserForm;
