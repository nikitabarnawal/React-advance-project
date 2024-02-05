import React, { useState } from "react";

const close = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-x"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </svg>
);

const UserModal = ({
  cardInfo: { id, name, phone, email, website },
  cancel,
  success,
}) => {
  const [userName, setUserName] = useState(name);
  const [userPhone, setUserPhone] = useState(phone);
  const [userEmail, setUserEmail] = useState(email);
  const [userWebsite, setUserWebsite] = useState(website);

  return (
    <div className="card-modal">
      <header className="card-title">
        <div>User Info</div>
        <div className="close-modal" onClick={() => cancel()}>
          {close}
        </div>
      </header>
      <div className="card-info">
        <p>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="phone">Phone: </label>
          <input
            type="text"
            id="phone"
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="website">Website: </label>
          <input
            type="text"
            id="website"
            value={userWebsite}
            onChange={(e) => setUserWebsite(e.target.value)}
          />
        </p>
      </div>
      <footer className="card-close">
        <button className="card-cancel" onClick={() => cancel()}>
          Cancel
        </button>
        <button
          className="card-success"
          onClick={() =>
            success({ id, userName, userEmail, userPhone, userWebsite })
          }
        >
          OK
        </button>
      </footer>
    </div>
  );
};

export default UserModal;
