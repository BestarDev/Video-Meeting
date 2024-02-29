import '../assets/styles/dashboard.css'
import '../assets/styles/usersList.css'
import logo from '../assets/images/logo.png'
import ActiveUserList from '../components/ActiveUserList'

const Dashboard = () => {
  return (
    <div className='dashboard_container bg-main-color'>
      <div className='dashboard_left_section'>
        <div className='dashboard_content_container'>
          content
        </div>
        <div className='dashboard_rooms_container bg-secondary-color text-main-color'>
          rooms
        </div>
      </div>
      <div className='dashboard_right_section bg-secondary-color text-main-color'>
        <div className='dashboard_active_users_list'>
          <ActiveUserList />
        </div>
        <div className='dashboard_logo_container'>
          <img className='dashboard_logo_image' src={logo} alt="Video Talker" />
        </div>
      </div>
    </div>
  )
}

export default Dashboard