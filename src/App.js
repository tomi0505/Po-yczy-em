import { useState } from "react";
import "./App.css";
import UsersPanel from "./components/UsersPanel/UsersPanel.js";
import SimpleUserForm from "./components/SimpleUserForm/SimpleUserForm.js";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      date: "2026-05-08",
      name: "Jan",
      surname: "Kowalski",
      amount: 10,
      description: "Pożyczył na 3 dni",
    },
    {
      id: 2,
      date: "2026-05-02",
      name: "Mariusz",
      surname: "Grzyb",
      amount: 20,
      description: "Pożyczył na tydzień",
    },
  ]);
  const [currentUser, setCurrentUser] = useState("");
  const [amount, setAmount] = useState("");

  function chooseUser(id) {
    const currentUserObj = users.filter((user) => user.id === id)[0];
    setCurrentUser(currentUserObj);
    setAmount("");
  }

  function changeAmount(e) {
    setAmount(e.target.value);
  }

  function setNewAmount() {
    const myUsers = users.map((user) => ({ ...user }));
    const myUser = myUsers.filter((user) => user.id === currentUser.id)[0];
    myUser.amount = Number(amount);
    setUsers(myUsers);
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <UsersPanel users={users} chooseUser={chooseUser} />
        </div>
        <div className="col-12 col-md-6">
          <SimpleUserForm
            currentUser={currentUser}
            amount={amount}
            changeAmount={changeAmount}
            setNewAmount={setNewAmount}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
