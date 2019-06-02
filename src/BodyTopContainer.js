import React from 'react';
import ReactDOM from 'react-dom';
import { Icon } from 'semantic-ui-react';
import img from './founder.jpg';
import { Button } from 'semantic-ui-react'

class BodyTopContainer extends React.Component {
  render(){
    return (
      <div className="body-top-container">
        <TopSearch />
        <TopTitle />
      </div>
    );
  }
}

class TopSearch extends React.Component {
  render(){
    return (
      <div className="top-search-container">
        <Icon name="search" color="grey" />
        <div className="profile-img-container">
          <img src={img}/>
        </div>
      </div>
    );
  }
}

class TopTitle extends React.Component {
  render(){
    return (
      <div className="top-title-container">
        <h2>My Tasks</h2>
        <div className="new-task-button">
          <Button floated='right' primary>New Task</Button>
        </div>
      </div>
    );
  }
}

export default BodyTopContainer;
