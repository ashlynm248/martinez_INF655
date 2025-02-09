import React from 'react';

const rando = Math.floor((Math.random() * 999) +1);

class UserInfos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: 'Willy Wonka',
                profession: 'Candy Maker',
            }
        };
    }

    render() {
        return (
            <div>
                <h2>User Information</h2>
                <p>Name: {this.state.user.name}</p>
                <p>Profession: {this.state.user.profession}</p>
                <p>Your lucky number (from 1-999) is: {rando}</p>
            </div>
        );
    }
}

 export default UserInfos;