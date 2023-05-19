import React from 'react';
import Heading from './Heading';
import Image from './Image';
function Card(Props){
    return (
        <>
            <div className='cards'>
                <div className='card'>
                    {/* <img src={Props.imgsrc} alt='myPic' className='card__img'/> */}
                    <Image imgsrc = {Props.imgsrc}/>
                    <div className='card__info'>
                        <span className='card__category'>{Props.title}</span>
                        {/* <h3 className='card__title'>{Props.sname}</h3> */}
                        <Heading sname = {Props.sname}/>
                        <a href={Props.link} target="_blank">
                            <button className='btn'>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;