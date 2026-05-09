function User({ user, chooseUser }) {
  return (
    <a
      href="#"
      className="list-group-item list-group-item-action"
      aria-current="true"
      onClick={() => chooseUser(user.id)}
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">
          {user.name} {user.surname}
        </h5>
        <small>{user.date}</small>
      </div>
      <p className="mb-1">Pożyczka: {user.amount} zł.</p>
      <small>{user.description}</small>
    </a>
  );
}

export default User;
