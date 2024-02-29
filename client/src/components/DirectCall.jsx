import React from 'react'
import LocalVideoView from './LocalVideoView'
import RemoteVideoView from './RemoteVideoView'
import { useSelector } from 'react-redux'

const DirectCall = () => {
    const { localStream, remoteStream } = useSelector(state => state.call)

    return (
        <>
            <LocalVideoView localStream = {localStream} />
            { remoteStream && <RemoteVideoView remoteStream = {remoteStream} /> }
        </>
    )
}

export default DirectCall