import React from 'react'

function Leaderboard() {
  var stats = [
    {rank:1, name:"Chipmunk#9594",stat:999},
    {rank:1, name:"Chipmunk#9594",stat:999},
    {rank:1, name:"Chipmunk#9594",stat:999},
    {rank:1, name:"Chipmunk#9594",stat:999},
    {rank:1, name:"Chipmunk#9594",stat:999},
    {rank:1, name:"Chipmunk#9594",stat:999},
    {rank:1, name:"Chipmunk#9594",stat:999},
    {rank:1, name:"Chipmunk#9594",stat:999},
    {rank:1, name:"Chipmunk#9594",stat:999},
  ]

  return (
    <>
        <div className="container dungeon-leaderboard-container">
            <h3>Leaderboard Title</h3>
            <div className="row">
              <div className="col-4">Rank</div>
              <div className="col-4">Name</div>
              <div className="col-4">Stat</div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-4">Account Rank</div>
                <div className="col-4">Account Name</div>
                <div className="col-4">Account Stat</div>
            </div>
            <hr/>
            {stats.map(content =>
              <div className="row">
                <div className="col-4">{content.rank}</div>
                <div className="col-4">{content.name}</div>
                <div className="col-4">{content.stat}</div>
              </div>
              )}

        </div>
    </>
  )
}

export default Leaderboard