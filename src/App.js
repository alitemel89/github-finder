import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import Users from './components/users/Users';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" />
        <Users />
      </div>
    );

  }
  
}

export default App;
