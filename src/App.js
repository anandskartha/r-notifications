import React from 'react';

import Notification from './components/Notification';
import logo from './logo.svg';
import './App.css';

function App() {
  const data = [
    {
      "message": "Hi, this is my first notification",
      "redirectTo": "http://www.google.com/",
      "timestamp": 1
    },
    {
      "message": "Are you forgetting something?",
      "redirectTo": "http://www.twitter.com/",
      "timestamp": 2
    },
    {
      "message": "Meeting in 1 hour",
      "redirectTo": "http://www.facebook.com/",
      "timestamp": 3
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="top-corner">
          <Notification
            data={data}
            notific_key='timestamp'
            notific_value='message'
            notific_redirect='redirectTo'
            size={32}
            color="#ffffff" 
            bgcolor="#282c34"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
