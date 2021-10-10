import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { fetchUsers } from "../../redux/actions";
import UsersListItem from "./userListItem";
import { useHistory } from "react-router-dom";
import localStorageService from "../../services/localStorageService";
import * as localStorageKeys from "../../localStorageKeys";
import Pagination from "../pagination/pagination";
import '../../styles/usersList.scss';

function UsersList({ userData, fetchUsers }) {

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(3);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  let history = useHistory();

  const handleClick = (userId) => {
    const user = getUserById(userId);
    saveUserOnLocalStorage(user);
    redirect('userInfo');
  }

  const saveUserOnLocalStorage = (user) => {
    localStorageService.setItem(localStorageKeys.SAVED_USER, user);
  }

  const redirect = (dest) => {
    history.push(`/${dest}`);
  }

  const getUserById = (userId) => {
    return userData.users.filter((user) => user.id === userId);
  }

  if (userData.loading) {
    return (
      <h2>Loading</h2>
    )
  } else if (userData.error) {
    return (
      <h2>{userData.error}</h2>
    )
  } else {
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = userData.users.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (number) => {
      setCurrentPage(number);
    }

    return (
      <div>
        <h2>User List</h2>
        <div >
          {
            userData && userData.users && currentUsers.map(user =>
              <UsersListItem key={user.id} user={user} onClick={handleClick}/>)
          }
          <Pagination usersPerPage={usersPerPage} totalUsers={userData.users.length} paginate={paginate} currentPage={currentPage}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userData: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);