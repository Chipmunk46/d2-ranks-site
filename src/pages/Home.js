import React from 'react';
import Leaderboard from '../components/Leaderboard';
import './Home.css';

function Home() {
  return (
    <>
        <div className="home-page-container">
            <section className='home-opening-container'>
                <div className="flex-container">
                    <div className="row">
                        <div className="col-6">
                            World's First King's Fall
                            <Leaderboard/>
                        </div>
                        <div className="col-6">
                            The King Falls!
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Quisque dapibus elit tristique velit bibendum faucibus. 
                                Vivamus aliquam tellus ut laoreet eleifend. Sed a 
                                vehicula lectus. Morbi pharetra bibendum euismod. 
                                Sed sodales, enim vel facilisis blandit, nibh 
                                risus rutrum turpis, id ullamcorper magna 
                                magna at ex. Aenean condimentum elementum nibh, 
                                id fringilla dolor scelerisque in. Donec at urna 
                                ut erat tempus tempor.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='home-stats-container'>
                <img className='stats-image' src={process.env.PUBLIC_URL + "/images/home/guardianflex.jpg"} alt=""/>
                <div className="stats-text">
                    Check out your stats!
                </div>
                <a className='btn btn-secondary stats-button' href="">Player Stats Page</a>
            </section>
            <section className='home-guides-container'>
                <img className='guides-image' src={process.env.PUBLIC_URL + "/images/home/dscfireteam.jpg"} alt=""/>
                <div className="guides-text">
                    Learn how to raid or clear a dungeon using the best info
                    possible!
                </div>
                <a className='btn btn-secondary guides-button' href="">Raid and Dungeon Guides</a>
            </section>
            <section className='home-news-container'>
                <img className='news-image' src={process.env.PUBLIC_URL + "/images/home/cosmodrome.jpg"} alt=""/>
                <div className="news-text">
                    Keep up with the latest news in Destiny!
                </div>
                <a className='btn btn-secondary news-button' href="">News Page</a>
            </section>
        </div>
    </>
  )
}

export default Home