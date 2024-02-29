import React from 'react'
import {activeUsers} from '../assets/dummy/activeUsers'
import ActiveUserListItem from './ActiveUserListItem'

const ActiveUserList = () => {
  return (
    <div className='active_user_list_container'>
        {activeUsers.map(activeUser => (
            <ActiveUserListItem
                key={activeUser.sockedId}
                activeUser={activeUser}
            />
        ))}
    </div>
  )
}

export default ActiveUserList