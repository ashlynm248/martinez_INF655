import React from 'react';


class UserInfo extends React.Component {
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
                <button onClick={handleAlert}>Show Alert</button>
                <p>Clicking the button shows an alert message</p>
            </div>
        );
    }
}

function handleAlert() {
    alert('Willy Wonka is busy making chocolate!');
}


export default UserInfo;