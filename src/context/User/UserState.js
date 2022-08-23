import React, { useReducer } from 'react'
import UserReducer from "./UserReducer"
import UserContext from "./UserContext"
import axios from 'axios'

const UserState = (props) => {
    const initialState = {
        users: [],
        selectedUser: null
    }
    const [state, dispatch] = useReducer(UserReducer, initialState)

    const getUsers = async() => {
        const res = await axios.get('https://rickandmortyapi.com/api/character');
        console.log(res.data.results)
        dispatch({
            type: 'GET_USERS',
            payload: res.data.results
        })
    }

    const getProfile = async(id) => {
        const res = await axios.get('https://rickandmortyapi.com/api/character/' + id);
        console.log(res.data)
        dispatch({
            type: 'GET_PROFILE',
            payload: res.data
        })
    }

    return (
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile
        }}>
            {props.children}
        </UserContext.Provider>
);
}

export default UserState