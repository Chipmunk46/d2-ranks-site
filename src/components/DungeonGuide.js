import React from 'react';
import DungeonCard from './DungeonCard';
import './DungeonGuide.css';

function DungeonGuide() {
  var dungeons = [
    {dungeonName: 'Shattered Throne', dungeonImage: '/images/dungeons/shatteredthrone.jpg'},
    {dungeonName: 'Pit of Heresy', dungeonImage: '/images/dungeons/pitofheresy.jpg'},
    {dungeonName: 'Prophecy', dungeonImage: '/images/dungeons/prophecy.jpg'},
    {dungeonName: 'Grasp of Avarice', dungeonImage: '/images/dungeons/graspofavarice.jpg'},
    {dungeonName: 'Duality', dungeonImage: '/images/dungeons/duality.jpg'},
  ];
  return (
    <>
        <div className="dungeon-guides-container">
            <div className="dungeon-guide-header">
                DUNGEON GUIDES
            </div>
            <hr/>
            <div className="dungeon-cards">
                <ul className='dungeon-list'>
                    {dungeons.map(dungeon =>
                    <li className='dungeon-item'>
                      <DungeonCard src={dungeon.dungeonImage} title={dungeon.dungeonName}/>
                    </li>
                    )}
                </ul>
            </div>
            <hr/>
        </div>
    </>
  )
}

export default DungeonGuide