import { useState } from "react";
import "./App.css";
import UsersPanel from "./components/UsersPanel/UsersPanel.js";
import SimpleUserForm from "./components/SimpleUserForm/SimpleUserForm.js";

function initialUsers() {
  const users = [
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
  ];

  const data = localStorage.getItem("users");

  if (data) {
    return JSON.parse(data);
  } else {
    localStorage.setItem("users", JSON.stringify(users));
    return users;
  }
}

const users = initialUsers();

function App() {
  const [currentUser, setCurrentUser] = useState("");

  function chooseUser(id) {
    const currentUserObj = users.filter((user) => user.id === id)[0];
    setCurrentUser(currentUserObj);
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <UsersPanel users={users} chooseUser={chooseUser} />
        </div>
        <div className="col-12 col-md-6">
          <SimpleUserForm currentUser={currentUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
