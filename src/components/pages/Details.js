import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Details.css'

const Details = () => {
  return (
        <div className='details'>

                <div className="details-text">

                        <h1 className='details-header'>All you have to do for <span>Travel</span></h1>
                    
                        <p>register online in our website</p>
                        <p>get prepared for the exams</p>
                        <p>take the necessary tests</p>
                        <p>pay all taxes for travel</p>
                        <p>subscribe to the channel</p>
                        <p>like the video</p>

                        <div className="done-btn">
                            <Link to='/'>Done</Link>
                        </div>

                </div>

        </div>);
};

export default Details;
