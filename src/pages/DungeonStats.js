import React from 'react';
import DungeonCard from '../components/DungeonCard.js';
import DungeonStatsCard from '../components/DungeonStatsCard.js';

function DungeonStats() {
  return (
    <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
            <DungeonCard title='PROPHECY'/>
            </div>
            <div className="col-6">
            <DungeonStatsCard/>
            </div>
          </div>
        </div>
        
        
    </>
  )
}

export default DungeonStats