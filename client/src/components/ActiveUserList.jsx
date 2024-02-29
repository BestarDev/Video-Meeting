import React from 'react'
import ActiveUserListItem from './ActiveUserListItem'

const ActiveUserList = ({activeUsers}) => {
  return (
    <div className='active_user_list_container'>
        {activeUsers.map(activeUser => (
            <ActiveUserListItem
                key={activeUser.socketId}
                activeUser={activeUser}
            />
        ))}
    </div>
  )
}

export default ActiveUserList