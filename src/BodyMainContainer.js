import React from 'react';
import ReactDOM from 'react-dom';

class BodyMainContainer extends React.Component {
  render(){
    return (
      <div className="body-main-container">
        <BodyRightContainer />
        <BodyLeftContainer />
      </div>
    );
  }
}

class BodyLeftContainer extends React.Component {
  render(){
    return (
      <div className="left-mainContainer">
      </div>
    );
  }
}

class BodyRightContainer extends React.Component {
  render(){
    return (
      <div className="right-mainContainer">
      </div>
    );
  }
}

export default BodyMainContainer;
