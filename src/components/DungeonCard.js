import React from 'react'
import './DungeonCard.css';

function DungeonCard(props) {
    return (
        <>
            <div className="dungeon-title-container">
                <img className='dungeon-image' src={process.env.PUBLIC_URL + '/images/prophecy.jpg'} alt={props.alt} />
                <div className='dungeon-title-text'>{props.title}</div>
            </div>
        </>
    )
}

export default DungeonCard