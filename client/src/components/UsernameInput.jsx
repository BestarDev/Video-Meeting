import React from 'react'

const UsernameInput = (props) => {
    const {username, setUsername} = props
    return (
        <div className='login-page_input_container'>
            <input placeholder='Enter Your Name'
                type='text' value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='login-page_input bg-main-color text-main-color py-4' />
        </div>
    )
}

export default UsernameInput