import React from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";

class AddFriend extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            friends: {
                name: "",
                age: "",
                email: ""
            }
        };

        this.handleChange = e => {
            console.log(this.props)
            this.setState({
                friends: {
                    ...this.state.friends,
                    [e.target.name]: e.target.value
                }
            });
        };

        this.addfriend = e => {
            e.preventDefault();
            // axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
            axiosWithAuth()
                .post("/friends", this.state.friends)
                .then(res => {
                    console.log('clicked', res)
                    // redirect to the apps main page?
                    this.props.history.push("/friends");
                })
                .catch(err => console.log(err));
            ;
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addfriend}>
                    <input
                        type="text"
                        name="name"
                        value={this.state.friends.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="age"
                        value={this.state.friends.age}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="email"
                        value={this.state.friends.email}
                        onChange={this.handleChange}
                    />
                    <button>add friend</button>
                </form>
            </div>
        );
    }
}

export default AddFriend;
