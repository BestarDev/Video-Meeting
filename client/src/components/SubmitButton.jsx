const SubmitButton = ({onClick}) => {
  return (
    <div className="login-page_button_container">
        <button className="login-page_button bg-main-color text-main-color"
            onClick={onClick} >
                Start Video Talking
        </button>
    </div>
  )
}

export default SubmitButton