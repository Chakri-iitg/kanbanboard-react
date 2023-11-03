import React from 'react'

const Card = ({ BiDotsHorizontalRounded, tagline, cam, title, BiRadioCircle, ProfileIcon }) => {
    return (
        <div className='card-section'>

            <div className='head'>
                <div className='card-header'>
                    <p>{cam}</p>
                    <ProfileIcon/>
                </div>
                <div className='card-title'>
                    <p>{title}</p>
                </div>

            </div>
            <div className='bottom'>
                <BiDotsHorizontalRounded />
                <div>
                    <BiRadioCircle />
                    <p>{tagline}</p>
                </div>
            </div>

        </div>
    )
}

export default Card;




