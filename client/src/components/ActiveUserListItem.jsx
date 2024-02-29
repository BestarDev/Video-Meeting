import userAvatar from '../assets/images/userAvatar.png'

const ActiveUserListItem = ({activeUser}) => {
    const clickHandler =() => {

    }
    return (
        <div className='active_user_list_item' onClick={clickHandler}>
            <div className='active_user_list_image_container'>
                <img className='active_user_list_image' src={userAvatar} alt={activeUser.username}/>
            </div>
            <span className='active_user_list_text'>{activeUser.username}</span>
        </div>
    )
}

export default ActiveUserListItem