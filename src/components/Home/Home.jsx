import React, { useState, useEffect } from 'react'

import TopHeading from '../../ApiData/TopHeading.json'
import { CardComp } from '../CardComp';
import './Home.scss'


export const HomeComp = () => {
    const [article, setArticle] = useState([]);

    useEffect(() => {
        console.log("TopHeading", TopHeading?.articles)
        if (TopHeading) {
            setArticle(TopHeading?.articles)
        }
    }, [])

    return (
        <div>
            {article && article.map((item, index) => (
                <div key={`article-${index}`} className='home-container'>
                    <CardComp
                        title={item.title} 
                        sourceUrl={item.url} 
                        imageUrl={item.urlToImage} 
                        description={item.description} 
                        content={item.content} 
                        publishedAt={item.publishedAt}
                    />
                </div>
            ))}
        </div>
    )
}