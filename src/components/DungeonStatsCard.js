import React from 'react';
import './DungeonStatsCard.css';

function DungeonStatsCard() {
    var test = [
        { difficulty: 'Normal', name: 'Chipmunk#9594', kills: 1000, deaths: 1000, time: "3:40" },
        { difficulty: 'Normal', name: 'Chipmunk#9594', kills: 1000, deaths: 1000, time: "3:40" },
        { difficulty: 'Normal', name: 'Chipmunk#9594', kills: 1000, deaths: 1000, time: "3:40" }
    ];
    return (
        <>
            <div className="container-fluid dungeon-stats-container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="dungeon-kill-count">
                            <h4>TOTAL KILLS: 5000</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="dungeon-death-count">
                            <h4>TOTAL DEATHS: 5000</h4>
                        </div>
                    </div>
                </div>
                <hr />
                <h4>Most Recent Run</h4>
                <div className="container-fluid dungeon-recent-container">
                    <div className="row">
                        <div className="col-md-2">
                            <h5>Difficulty</h5>
                        </div>
                        <div className="col-md-3">
                            <h5>Fireteam</h5>
                        </div>
                        <div className="col-md-2">
                            <h5>Kills</h5>
                        </div>
                        <div className="col-md-2">
                            <h5>Deaths</h5>
                        </div>
                        <div className="col-md-2">
                            <h5>Time</h5>
                        </div>
                    </div>
                    {test.map(content =>
                        <div className='row'>
                            <div className="col-md-2">
                                <h5>{content.difficulty}</h5>
                            </div>
                            <div className="col-md-3">
                                <h5>{content.name}</h5>
                            </div>
                            <div className="col-md-2">
                                <h5>{content.kills}</h5>
                            </div>
                            <div className="col-md-2">
                                <h5>{content.deaths}</h5>
                            </div>
                            <div className="col-md-2">
                                <h5>{content.time}</h5>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default DungeonStatsCard