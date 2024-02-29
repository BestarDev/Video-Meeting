import { store } from "../../store"
import { setLocalstream } from "../../store/slices/callSlice"

export const getLocalStream = () => {
    navigator.mediaDevices.getUserMedia({
        video: true, audio: true
    })
    .then(stream => store.dispatch(setLocalstream(stream)))
    .catch(err => {
        console.log('Error occured when trying to get an access to get local stream')
        console.log(err);
    })
}