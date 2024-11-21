import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleNews from '../components/singleNews';

const CategoriesNews = () => {
    
    const {data} = useLoaderData();
  
    
    return (
        <div>
            {
                data.map(news=><SingleNews news={news} key={news._id}></SingleNews>)
            }
        </div>
    );
};

export default CategoriesNews;