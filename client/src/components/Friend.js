import React from 'react';


const Friend = (props) => {
    const { aFriend, deleteData, getIdForPut } = props
    const updateBoolean = true;
    console.log('friend props here', props)

    return (
        <div>
            <p onClick={() => deleteData(aFriend.id)}>name: {aFriend.name}</p>
            <p>age: {aFriend.age}</p>
            <p>email: {aFriend.email}</p>
            <button onClick={() => getIdForPut(aFriend, updateBoolean)}>edit friend</button>
        </div>
    );
}

export default Friend;