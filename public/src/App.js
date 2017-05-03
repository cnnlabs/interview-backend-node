import React, { Component } from 'react';
import logo from './logo.png';
import Article from './Article';
import './App.css';



class App extends Component {
    
    renderArticle() {
        return <Article />;
    }
    
    render() {
        return (
            <div >
                <div className="fixed">
                    <breaking-news><p>Breaking News</p></breaking-news>
                    <detailed-news><p>Young developer cannot believe she completed the practical. Tries best to keep it together until Noon.</p></detailed-news>
                    <cnn-banner>
                        <img src={logo}/>
                        <div>
                        <banner-top>
                            <p>U.S. Edition</p>
                            <p>Atlanta, Ga  22&#8457; </p>
                            <p>Log in</p>
                        </banner-top>
                        
                        <banner-middle>
                            <p>News</p>
                            <p>Video</p>
                            <p>TV</p>
                            <p>Opinions</p>
                            <p>More...</p>

                        </banner-middle>
                        <banner-bottom>
                            <p>U.S.</p>
                            <p>World</p>
                            <p>Politics</p>
                            <p>Tech</p>
                            <p>Health</p>
                            <p>Entertainment</p>
                            <p>Living</p>
                            <p>Travel</p>
                            <p>Money</p>
                            <p>Sports</p>
                        </banner-bottom>
                        </div>
                    </cnn-banner>
                </div>
                <Article/>
            
                <footer></footer>
            </div>
        );
    }
}

export default App;
