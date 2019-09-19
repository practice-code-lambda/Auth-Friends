import React from 'react';
import styled from 'styled-components'

const Card = styled.div`

width: 20%;
margin: 0 auto;
margin-bottom: 20px;
border-radius: 3px;
border: 1px solid black;
    p{
        margin: 4px;
    }
    button{
        margin: 4px;

    }
`
const Friend = (props) => {
    const { aFriend, deleteData, getIdForPut } = props
    const updateBoolean = true;
    console.log('friend props here', props)

    return (
        <Card>
            <p>name: {aFriend.name}</p>
            <p>age: {aFriend.age}</p>
            <p>email: {aFriend.email}</p>
            <button onClick={() => getIdForPut(aFriend, updateBoolean)}>edit</button>
            <button onClick={() => deleteData(aFriend.id)}>delete</button>
        </Card>
    );
}

export default Friend;