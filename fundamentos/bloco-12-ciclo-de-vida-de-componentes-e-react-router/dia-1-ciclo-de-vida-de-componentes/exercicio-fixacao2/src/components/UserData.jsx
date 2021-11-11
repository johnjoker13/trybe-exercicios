import React, { Component } from 'react';
import '../styles/UserData.css';

class UserData extends Component {
 
    render() {
        const {
            userName,
            userEmail,
            userPicture,
            userAge,
          } = this.props; 
        return (
            <div className="container">
                <img className="user__pic" src={ userPicture } alt={ userName } />
                <span>{ `Name: ${userName}` }</span>
                <span>{ `Email: ${userEmail}` }</span>
                <span>{ `Age: ${userAge}` }</span>
            </div>
        );
    }
}
 
export default UserData;
