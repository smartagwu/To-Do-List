import React from 'react';
import ReactDOM from 'react-dom';
import LeftNavigation from './LeftNavigation.js';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import BodyTopContainer from './BodyTopContainer.js'
import BodyMainContainer from './BodyMainContainer.js'
//import 'semantic-ui-css/semantic.js';

const mainContainer = (
  <div className="todo-mainContainer">
    <LeftNavigation />
    <div className="body-container">
      <BodyTopContainer />
      <BodyMainContainer />
    </div>
  </div>
);

ReactDOM.render(
  mainContainer,
  document.getElementById('root')
);
