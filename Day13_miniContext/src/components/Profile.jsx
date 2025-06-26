import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

     // conditional return --> if no user exist
    if (!user) return <div>please login</div>

 // if user already exist
    return <div>Welcome {user.username}</div>
}

export default Profile