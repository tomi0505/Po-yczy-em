import User from "../User/User.js";

function UsersPanel({
  users,
  chooseUser,
  currentUser,
  addNewUserFormSwitcherView,
}) {
  return (
    <div>
      <div className="list-group">
        {users.map((user) => {
          return <User key={user.id} user={user} chooseUser={chooseUser} />;
        })}
      </div>
      <div
        className={
          currentUser === "" ? "d-none" : "mt-4 d-flex justify-content-end"
        }
      >
        <button
          className="btn btn-success"
          onClick={addNewUserFormSwitcherView}
        >
          Dodaj nowego użytkownika
        </button>
      </div>
    </div>
  );
}

export default UsersPanel;
