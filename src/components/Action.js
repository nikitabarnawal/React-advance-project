const editIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="edit icon icon-tabler icon-tabler-pencil"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="gray"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
    <path d="M13.5 6.5l4 4" />
  </svg>
);

const deleteImg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="delete icon icon-tabler icon-tabler-trash"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="gray"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 7l16 0" />
    <path d="M10 11l0 6" />
    <path d="M14 11l0 6" />
    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
  </svg>
);

const heart = (isLiked) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`icon icon-tabler icon-tabler-heart heartbeat ${
      isLiked ? "liked" : ""
    } `}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="red"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
  </svg>
);

const Action = ({ id, isCardLiked, likeCard, deleteCard, editCard }) => {
  return (
    <div className="action-wrapper">
      <div className="heartBtn" onClick={() => likeCard(id)}>
        {heart(isCardLiked)}
      </div>
      <div className="editBtn" onClick={() => editCard(id)}>
        {editIcon}
      </div>
      <div className="deleteBtn" onClick={() => deleteCard(id)}>
        {deleteImg}
      </div>
    </div>
  );
};

export default Action;
