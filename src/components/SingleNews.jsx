import { useState } from "react";

const SingleNews = ({news}) => {
   const {title} = news;
    
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

export default SingleNews;