import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  cancel,
  like,
  deleteCard,
  success,
  edit,
} from "../redux/actionSlice";
import UserProfile from "./UserProfile";
import UserModal from "../modal/UserModal";
import Action from "./Action";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const isEditClicked = useSelector((state) => state.userReducer.isEditClicked);

  const editId = useSelector((state) => state.userReducer.editId);
  const EditCardInfo = users.filter((user) => user.id === editId);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        const userState = users.map(({ id, name, email, phone, website }) => ({
          id,
          email,
          name,
          phone,
          website,
          like: false,
        }));
        dispatch(addUser(userState));
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, []);

  const handleSuccess = ({
    id,
    userName,
    userEmail,
    userPhone,
    userWebsite,
  }) => {
    const index = users.findIndex((user) => user.id === id);
    const updateUsers = [...users];
    const updateUser = {
      ...updateUsers[index],
      name: userName,
      email: userEmail,
      phone: userPhone,
      website: userWebsite,
    };
    updateUsers[index] = updateUser;

    dispatch(success(updateUsers));
  };

  const handleDelete = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    dispatch(deleteCard(filteredUsers));
  };

  const handleEditCard = (id) => {
    dispatch(edit(id));
  };

  const handleLikeCard = (id) => {
    const index = users.findIndex((user) => user.id === id);
    const updateUsers = [...users];
    const updateUser = {
      ...updateUsers[index],
      like: true,
    };
    updateUsers[index] = updateUser;

    dispatch(like(updateUsers));
  };

  return (
    <>
      <div className="user-list">
        {users.map((user) => (
          <div className="user" key={user.name}>
            <UserProfile key={user.id} userData={user} />
            <Action
              id={user.id}
              isCardLiked={user.like}
              deleteCard={handleDelete}
              editCard={handleEditCard}
              likeCard={handleLikeCard}
            />
          </div>
        ))}
      </div>
      {isEditClicked && (
        <div className="modal-mask">
          <UserModal
            cardInfo={EditCardInfo[0]}
            cancel={() => dispatch(cancel())}
            success={handleSuccess}
          />
        </div>
      )}
    </>
  );
};

export default UserList;
