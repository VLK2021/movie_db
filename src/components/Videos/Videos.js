import React from 'react';


import {YOUTUBE_URL} from "../../constants/youtube.url";

import './VideosStyle.css';

const Videos = ({video}) => {

    const {key, name} = video;

    return (
        <div className="videos">
            <iframe
                src={`${YOUTUBE_URL}/${key}`}
                width={350}
                height={175}
                frameBorder={0}
                allow={'autoplay; encrypted-media'}
                allowFullScreen={true}
                title={name}
            />
        </div>
    );
};

export default Videos;
