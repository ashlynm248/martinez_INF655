import React from 'react';

    class UserInfo extends React.Component {
        constructor(props) {
            super(props);
    
            this.state = {
                user: {
                    name: 'Willy Wonka',
                    profession: 'Candy Maker',
                    luckyNumber: '7',
                }
            };
        }
    
        // Changes lucky number
        changeluckyNumber = () => {
            this.setState({
                user: {
                    ...this.state.user,
                    luckyNumber: Math.floor((Math.random() * 100) + 1)
                }
            });
        }
    
        render() {
            return (
                <div>
                    <h2>User Information</h2>
                    <p>Name: {this.state.user.name}</p>
                    <p>Profession: {this.state.user.profession}</p>
                    <p>Your lucky number is: {this.state.user.luckyNumber}</p>
                    <button onClick={this.changeluckyNumber}>Generate New Lucky Number</button>
                </div>
            );
        }
    }
    
    export default UserInfo;