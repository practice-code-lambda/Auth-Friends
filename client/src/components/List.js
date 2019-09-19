import React from 'react';
import Friend from '../components/Friend'


import { axiosWithAuth } from '../utils/axiosWithAuth';


class List extends React.Component {


    componentDidMount() {
        this.getData();
    };



    constructor(props) {
        super(props)

        this.state = {
            friends: [],
        };

        console.log('props in list', props)

        this.deleteData = (id) => {
            axiosWithAuth()
                .delete(`/friends/${id}`)
                .then(res => {
                    console.log(res)
                    this.setState({ ...this.state, friends: [...this.state.friends.filter((aFriend) => id === aFriend.id ? false : true)] })
                })
                .catch(err => console.log(err));
        };

        this.getData = () => {
            axiosWithAuth()
                .get('/friends')
                .then(res => {
                    console.log('res', res)
                    this.setState({
                        friends: res.data
                    });
                })
                .catch(err => console.log(err));
        };

    }

    render() {
        console.log('state in List', this.state)

        return (
            <div>
                {
                    this.state.friends && this.state.friends.map((aFriend) => {
                        return <Friend
                            getIdForPut={this.props.getIdForPut}
                            deleteData={this.deleteData}
                            aFriend={aFriend}
                        />
                    })
                }
            </div>
        );
    }


}
export default List;
