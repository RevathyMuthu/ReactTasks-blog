import React from 'react'
import './RelatedBlogs.css'
// import { BiCalendarWeek, BiTime } from 'react-icons/bi'
// import { FaRegHeart } from 'react-icons/fa'
// import { BsShare } from 'react-icons/bs'

const RelatedBlogs = () => {

    const imagePath = process.env.PUBLIC_URL + '/images/cauvery-calling-blog-planting-trees-in-the-minds-of-farmers.jpg';
    const imagePath1 = process.env.PUBLIC_URL + '/images/date.png';
    const imagePath2 = process.env.PUBLIC_URL + '/images/time.png';
    const imagePath3 = process.env.PUBLIC_URL + '/images/wishlist.png';
    const imagePath4 = process.env.PUBLIC_URL + '/images/share.png';

    return (
        <div className='display'>
            <div className="container">
                <img src={imagePath} alt="Cauvery Calling" />
                <div class="top-left">Events</div>
                <div className="overlay">
                    <a href="#" class="icon" alt="Wishlist">
                        {/* <FaRegHeart /> */}
                        <img src={imagePath3} alt="wishlist" width="20" height="20" />
                    </a>
                    <a href="#" class="icon2" alt="Share">
                        {/* <BsShare /> */}
                        <img src={imagePath4} alt="share" width="20" height="20" />
                    </a>
                </div>
            </div>


            <div className='pad'>
                <a href="https://www.ishaoutreach.org/en/cauvery-calling/blog/isha-has-nurtured-idea-of-planting-trees-minds-of-farmers" target='_blank' rel="noreferrer">Isha has nurtured the idea of planting trees in the minds of Farmers</a>

            </div>

            <div className='padd'>

                <p> <img src={imagePath1} alt="date" width="15" height="10" /> 27 Oct, 2023 <img src={imagePath2} alt="time" width="15" height="15" /> 08:41 am</p>

                {/* <p> <BiCalendarWeek></BiCalendarWeek> 27 Oct, 2023 <BiTime /> 08:41 am</p> */}

            </div>


            <div className='padd'>
                <p>Isha’s Cauvery Calling movement today conducted a tree-based agriculture seminar titled...</p>
            </div>
            <div className='padd'>
                <a href="https://www.ishaoutreach.org/en/cauvery-calling/blog/isha-has-nurtured-idea-of-planting-trees-minds-of-farmers" target='_blank' rel="noreferrer">
                    <button className='button'> Read More </button>
                </a>
            </div>


        </div >
    )
}

export default RelatedBlogs