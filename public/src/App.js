import React, { Component } from 'react';
import logo from './logo.svg';
import Article from './Article';
import './App.css';



class App extends Component {
    
    renderArticle() {
        return <Article />;
    }
    
    render() {
        return (
          
            <breaking-news>Breaking News</breaking-news>
            <detailed-break>Insert longer Text here</detailed-break>
            <cnn-banner>
                <cnn-logo></cnn-logo>
                <upper-menu></upper-menu>
                <lower-menu></lower-menu>
            </cnn-banner>
            <Article/>
        );
    }
}

export default App;
