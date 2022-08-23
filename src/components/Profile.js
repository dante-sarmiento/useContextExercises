import React, { useContext } from 'react'
import UserContext from '../context/User/UserContext'

const Profile = () => {
  const { selectedUser } = useContext(UserContext)
  console.log(selectedUser);
  return (
    <>
    {
      selectedUser ? (<div className='card text-align-center' >
        <img src={selectedUser.image} className='imgSelected' alt="" width='100%'/>
        <h1>{selectedUser.name}</h1>
        <h3>{selectedUser.species}</h3>

      </div>) : (<h1>No hay personaje seleccionado</h1>)
    }
    </>
  )
}

export default Profile