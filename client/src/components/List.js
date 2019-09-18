import React from 'react';
import Friend from '../components/Friend'


import { axiosWithAuth } from '../utils/axiosWithAuth';

class GasPrices extends React.Component {
    state = {
        friends: [],
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
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



    render() {
        console.log('state in List', this.state)

        return (
            <div>
                {
                    this.state.friends && this.state.friends.map((aFriend) => {
                        return <Friend aFriend={aFriend} />
                    })
                }
            </div>
        );
    }
}

export default GasPrices;
