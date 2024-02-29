import React, { useEffect, useRef } from 'react'

const RemoteVideoView = (props) => {
    const {remoteStream} = props
    const remoteVideoRef = useRef();

    useEffect(() => {
        if(remoteStream) {
            const remoteVideo = remoteVideoRef.current
            remoteVideo.srcObject = remoteStream;

            remoteVideo.onloadedmetadata = () => {
                remoteVideo.play();
            }
        }
    }, [remoteStream])

    return (
        <div className='w-100 h-100'>
            <video ref={remoteVideoRef} autoPlay className='w-100 h-100'/>
        </div>
    )
}

export default RemoteVideoView