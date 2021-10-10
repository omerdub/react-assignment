import React, { useState } from "react";
import localStorageService from "../../services/localStorageService";
import * as localStorageKeys from "../../localStorageKeys";
import "../../styles/userInfo.scss"

export default function UserInfo() {
    const user = getUserFromLocalStorage();
    if(!user) {
        return (
            <div>
                USER NOT FOUND
            </div>
        );
    }
    console.log(user)
    return (
        <div>
            <div>
                <img src={user.avatar}/>
                <h2>USER ID: {user.id}</h2>
            </div>
            <div className="user-props">
                FIRST NAME: {user.firstName}
            </div>
            <div className="user-props">
                LAST NAME: {user.lastName}
            </div>
            <div className="user-props">
                MAIL: {user.mail}
            </div>

        </div>
    );
}

const getUserFromLocalStorage = () => {
    return localStorageService.getItem(localStorageKeys.SAVED_USER)[0];
}