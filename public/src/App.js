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
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <Article/>
          </div>
        );
    }
}

export default App;
