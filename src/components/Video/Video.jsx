import React, { useRef, useState } from 'react';

import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import "./Video.css";
import { images } from "../../constants";


const Video = () => {

    const vidRef = useRef();
    const [playVideo, setPlayVideo] = useState(false);
    const handleVideo = () => {
        setPlayVideo((prevPlayVideo) => !prevPlayVideo)

        if (playVideo) {
            vidRef.current.pause();
        } else (
            vidRef.current.play()
        )
    };

    return (
        <div className='app__video'>
            <video
            type="video/mp4"
            loop
            muted
            controls={false}
            ref={vidRef}
            src={images.Video}
            />
            <div className='app__video-overlay'>
                <div className='app__video-overlay-circle' onClick={handleVideo}>
                    {playVideo ? (
                        <BsPauseFill color='#fff' fontSize={30} />
                    ) : <BsFillPlayFill color='#fff' fontSize={30} />}
                </div>
            </div>
        </div>
    )
}

export default Video