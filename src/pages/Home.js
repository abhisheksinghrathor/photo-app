import React from 'react';
import HomePage from "../components/HomePage/HomePage";

const Home = () => {
    return (
        <React.Fragment>
            <div className="container">               
                  <div id="topContainer">
                      <div className="background-container">
                  <picture class="__web-inspector-hide-shortcut__">
                    <source srcset="https://cdn.pixabay.com/index/2020/12/30/11-19-46-456_1920x430.jpg" media="(min-width: 1440px)"/>
                    <source srcset="https://cdn.pixabay.com/photo/2020/11/29/15/06/gift-5788021_640.jpg" media="(max-width: 640px)"/>
                    <img src="https://cdn.pixabay.com/index/2020/12/30/11-19-46-456_1440x480.jpg" class="hero-background"/>
                </picture>
                </div>
               <div id="top" bis_skin_checked="1">
                <h1>Stunning free images &amp; royalty free stock</h1>
                <h2>Over 1.9 million+ high quality stock images, videos and music shared by tour talented community.</h2>
                </div>
                  </div>
                    <HomePage/>
                </div>
        </React.Fragment>
    );
};


export default Home;
