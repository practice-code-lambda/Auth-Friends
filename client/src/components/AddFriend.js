import React from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";

class AddFriend extends React.Component {
    constructor(props) {
        super(props)

        if (props.updateFriend) {
            this.state = { friends: props.updateFriend }
        } else {
            this.state = {
                friends: {
                    name: "",
                    age: "",
                    email: ""
                }
            };
        }
        this.handleChange = e => {
            console.log(this.props)
            this.setState({
                friends: {
                    ...this.state.friends,
                    [e.target.name]: e.target.value
                }
            });
        };



        this.addFriend = e => {
            e.preventDefault();
            axiosWithAuth()
                .post("/friends", this.state.friends)
                .then(res => {
                    this.props.history.push("/friends");
                })
                .catch(err => console.log(err));
            ;
        }

        this.updateFriend = () => {
            axiosWithAuth()
                .put(`/friends/${props.updateFriend.id}`, this.state.friends)
                .then(res => {
                    props.hideUpdate()
                    this.props.history.push("/friends");
                })
                .catch(err => console.log(err));
            ;
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addFriend}>
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
                    {
                        !this.props.updateBoolean && <button>add friend</button>
                    }

                </form>
                {
                    this.props.updateBoolean && <button onClick={this.updateFriend}>update</button>
                }

            </div>
        );
    }
}

export default AddFriend;
