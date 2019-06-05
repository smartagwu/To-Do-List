import React from 'react';
import ReactDOM from 'react-dom';
import ViewTaskTopMenuDropdown from './ViewTaskTopMenuDropdown.js';
import ViewTaskDetailTab from './ViewTaskDetailTab.js';
import { Checkbox } from 'semantic-ui-react'

class BodyMainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Follow up on '15 contract",
      subtitle: "Thomas Schuchter",
      time: "Today"
    }
  }

  //Change the state when main list item is clicked
  callbackFromMainList = (listData) => {
    this.setState({
      title: listData.title,
      subtitle: listData.subtitle,
      time: listData.time
    });
  }


  render(){
    return (
      <div className="body-main-container">
        <BodyRightContainer title={this.state.title}  subtitle={this.state.subtitle}  time={this.state.time}/>
        <BodyLeftContainer itemClicked={this.callbackFromMainList}/>
      </div>
    );
  }
}

class BodyLeftContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeListId : ""
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle(e){
    const clickedLiId = e.currentTarget.id;
    const currentActiveList = this.state.activeListId;
    const index = document.getElementById(clickedLiId).getAttribute('indexValue');
    document.getElementById(clickedLiId).classList.add('task-list-isactive');
    currentActiveList != "" && document.getElementById(currentActiveList).classList.remove('task-list-isactive');

    this.setState({activeListId : clickedLiId});
    //const clickedLiId = document.getElementById(checkBoxId).parentElement.getAttribute('id');
    //window.alert(index);
    const datatitle = document.getElementById("todoTaskTitleid" + index).innerHTML;
    const dataSubtitle = document.getElementById("todoTaskTitleNameid" + index).innerHTML;
    const dataTime = document.getElementById("todoTaskTimeid" + index).innerHTML;

    const listData = {
      title: datatitle,
      subtitle: dataSubtitle,
      time: dataTime
    }

    this.props.itemClicked(listData);
  }

  //componentWillUpdate(newProps, newState){

  //}


  //componentDidUpdate(oldProps, oldState){
    //window.alert('it was componentDidUpdate');
  //}

  render(){
    const mainBodyTasks = [
      {title:'Prepare Needs Analysis Document', subtitle: 'Chipotle', time: 'Today'},
      {title:"Follow up on '15 contract", subtitle: 'Thomas Schuchter', time: 'Today'},
      {title:'Talk about purchase order with Downtown Chipotle', subtitle: 'Chipotle', time: 'Today'},
      {title:'Follow up - Time for Demo', subtitle: 'Kurtis Walker', time: 'Oct 24'},
      {title:'Trial Extension', subtitle: 'Tyler Green', time: 'Oct 24'},
      {title:'Follow Up - Pro Renewal', subtitle: 'Conner Davidson', time: 'Oct 25'},
      {title:'Follow Up - Coca Cola', subtitle: 'John Smithfield', time: 'Oct 25'},
      {title:'Talk about contract at pepsi co', subtitle: 'Will anderson', time: 'Oct 25'},
      {title:'Follow Up - Acme Inc', subtitle: 'Teo Crisp', time: 'Oct 25'}
    ];

    const mainBodyTasksList = mainBodyTasks.map((value,index) => (
      <li id={"mainBodyTask" + index} indexValue={index} onClick={this.toggle}>
        <Checkbox id={"todoTaskCheckboxid" + index} />
        <div className="main-task-details-cont">
          <p id={"todoTaskTitleid" + index} className="main-task-details-title">{value.title}</p>
          <p id={"todoTaskTitleNameid" + index} className="label-color">{value.subtitle}</p>
        </div>
        <p id={"todoTaskTimeid" + index} className="main-task-details-time">{value.time}</p>
      </li>
    ));
    return (
      <div className="left-mainContainer">
        <ul id="leftMainContainerList">{mainBodyTasksList}</ul>
      </div>
    );
  }
}

class BodyRightContainer extends React.Component {
  render(){
    return (
      <div className="right-mainContainer">
        <div className="view-task-top-details">
          <div className="view-task-top-details-left">
            <p id="viewTaskTopTitleId" className="view-task-top-title">{this.props.title}</p>
            <div className="flex">
              <p id="viewTaskTopSubTitleId" className="view-task-top-subtitle">{this.props.subtitle}</p>
              <div className="dot-divider color3"></div>
              <p id="viewTaskTopTimeStampId" className="view-task-top-time">{this.props.time}</p>
            </div>
          </div>

          <div className="view-task-top-details-menu">
            <ViewTaskTopMenuDropdown />
          </div>
        </div>

        <div className="view-task-tab">
          <ViewTaskDetailTab />
        </div>
      </div>
    );
  }
}

export default BodyMainContainer;
