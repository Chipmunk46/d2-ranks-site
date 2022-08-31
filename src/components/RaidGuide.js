import React from 'react';
import DungeonCard from './DungeonCard';

function RaidGuide() {
    var raids = [
        {raidName: 'Garden of Salvation', raidImage: '/images/raids/gos.jpg'},
        {raidName: 'Deep Stone Crypt', raidImage: '/images/raids/dsc.jpg'},
        {raidName: 'Vault of Glass', raidImage: '/images/raids/vog.jpg'},
        {raidName: 'Vow of the Disciple', raidImage: '/images/raids/vow.jpg'},
        {raidName: 'Kings Fall', raidImage: '/images/raids/kf.jpg'},
      ];
    return (
        <>
            <div className="dungeon-guides-container">
                <div className="dungeon-guide-header">
                    RAID GUIDES
                </div>
                <hr />
                <div className="dungeon-cards">
                    <ul className='dungeon-list'>
                        {raids.map(raid =>
                            <li className='dungeon-item'>
                                <DungeonCard 
                                src={raid.raidImage} 
                                title={raid.raidName} />
                            </li>
                        )}
                    </ul>
                </div>
                <hr />
            </div>
        </>
    )
}

export default RaidGuide