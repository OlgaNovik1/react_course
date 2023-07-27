import React, { useRef } from 'react'

const Player = ({ src, ...props }) => {
    const ref = useRef();
    console.log(ref)

    const handlePlay = () => {
        ref.current.play();
    }

    const handlePause = () => {
        ref.current.pause();
    }

    return (
        <div>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
            <video src={src} ref={ref} {...props} />
        </div>
    )
}

export default Player