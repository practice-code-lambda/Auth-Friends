import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Friend = (props) => {
    const { aFriend } = props
    // `/api/friends/123`

    const deleteData = () => {
        axiosWithAuth()
            //have to keep track of this in state or cause a rerender somehow.
            .delete(`/friends/${aFriend.id}`)
            .then(res => {
                console.log('res', res)
                // this.setState({
                //     friends: res.data
                // });
            })
            .catch(err => console.log(err));
    };



    return (
        <div>
            <p onClick={deleteData}>{aFriend.name}</p>
        </div>
    );
}

export default Friend;