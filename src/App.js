import { useState } from "react";
import "./App.css";
import UsersPanel from "./components/UsersPanel/UsersPanel.js";
import SimpleUserForm from "./components/SimpleUserForm/SimpleUserForm.js";
import AddNewUserForm from "./components/AddNewUserForm/AddNewUserForm.js";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      date: "2026-05-08",
      name: "Jan Kowalski",
      amount: 10,
      description: "Pożyczył na 3 dni",
    },
    {
      id: 2,
      date: "2026-05-02",
      name: "Mariusz Grzyb",
      amount: 20,
      description: "Pożyczył na tydzień",
    },
  ]);
  const [currentUser, setCurrentUser] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  function chooseUser(id) {
    const currentUserObj = users.filter((user) => user.id === id)[0];
    setCurrentUser(currentUserObj);
    setAmount("");
  }

  function changeName(e) {
    setName(e.target.value);
  }

  function changeAmount(e) {
    setAmount(e.target.value);
  }

  function setNewName() {
    if (name !== "") {
      const myUsers = users.map((user) => ({ ...user }));
      const myUser = myUsers.filter((user) => user.id === currentUser.id)[0];
      myUser.name = name;
      currentUser.name = name;
      setUsers(myUsers);
      setName("");
    } else {
      alert("Wpisz jakąś nazwę, aby zapisać!");
    }
  }

  function setNewAmount() {
    if (amount !== "") {
      const myUsers = users.map((user) => ({ ...user }));
      const myUser = myUsers.filter((user) => user.id === currentUser.id)[0];
      myUser.amount = Number(amount);
      currentUser.amount = Number(amount);
      setUsers(myUsers);
      setAmount("");
    } else {
      alert("Wpisz jakąś kwotę, aby zapisać!");
    }
  }

  function changeDescription(e) {
    setDescription(e.target.value);
  }

  function setNewDescription() {
    if (description !== "") {
      const myUsers = users.map((user) => ({ ...user }));
      const myUser = myUsers.filter((user) => user.id === currentUser.id)[0];
      myUser.description = description;
      setUsers(myUsers);
      setDescription("");
    } else {
      alert("Wpisz jakiś opis, aby zapisać!");
    }
  }

  function addNewUserFormSwitcherView() {
    setCurrentUser("");
  }

  function removeUser() {
    const confirmed = window.confirm(
      `Czy na pewno chcesz usunąć użytkownika ${currentUser.name}?`,
    );

    if (confirmed) {
      const myUsers = users.map((user) => ({ ...user }));
      const myUser = myUsers.filter((user) => user.id === currentUser.id)[0];
      const myUsersUpdated = myUsers.filter((user) => user.id !== myUser.id);
      setUsers(myUsersUpdated);
      setCurrentUser("");
    }
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <UsersPanel
            users={users}
            chooseUser={chooseUser}
            currentUser={currentUser}
            addNewUserFormSwitcherView={addNewUserFormSwitcherView}
          />
        </div>
        <div className="col-12 col-md-6">
          <SimpleUserForm
            currentUser={currentUser}
            amount={amount}
            changeAmount={changeAmount}
            setNewAmount={setNewAmount}
            name={name}
            changeName={changeName}
            setNewName={setNewName}
            description={description}
            changeDescription={changeDescription}
            setNewDescription={setNewDescription}
            removeUser={removeUser}
          />
          <AddNewUserForm
            users={users}
            setUsers={setUsers}
            currentUser={currentUser}
          />
        </div>
        {users.length === 0 && (
          <h2 className="text-center">Brak użytkowników</h2>
        )}
      </div>
    </div>
  );
}

export default App;
