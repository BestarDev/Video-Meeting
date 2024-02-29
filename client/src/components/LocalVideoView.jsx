import React, { useEffect, useRef } from 'react'

const LocalVideoView = (props) => {
    const {localStream} = props
    const localVideoRef = useRef();

    useEffect(() => {
        if(localStream) {
            const localVideo = localVideoRef.current
            localVideo.srcObject = localStream;

            localVideo.onloadedmetadata = () => {
                localVideo.play();
            }
        }
    }, [localStream])

    return (
        <div className='bg-secondary-color' style={{width: '150px', height: '150px',
            borderRadius: '8px', position: 'absolute', top: '5%', right: '23%'}}>
            <video ref={localVideoRef} autoPlay muted className='w-100 h-100'/>
        </div>
    )
}

export default LocalVideoView