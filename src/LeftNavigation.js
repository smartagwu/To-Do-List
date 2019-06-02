import React from 'react';
import ReactDOM from 'react-dom';
import { Icon } from 'semantic-ui-react';

class LeftNavigation extends React.Component {
  render(){
    return (
      <div className="leftNavContainer nav-color">
        <ul id="leftNavUlID">
          <NavigationItems />
        </ul>
      </div>
    );
  }
}



class NavigationItems extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isExpanded : false,
      activeListId : "leftNavItem1"
    }
    this.leftNavigationItemsClick = this.leftNavigationItemsClick.bind(this);
  }

  leftNavigationItemsClick(e){
    const newActiveListId = e.currentTarget.id;

    if (newActiveListId === 'leftNavItem0') { //This is the hamburger icon
      const isNavExpanded = this.state.isExpanded;
      if (isNavExpanded) {
        this.hideLiName();
      }else {
        this.showLiName();
      }

    }else{
      this.changeItemIndicators(newActiveListId);
      this.hideLiName();
    }

  }

  //Code to change item indicators
  changeItemIndicators(newId){
    let currentActiveListId = this.state.activeListId;
    document.getElementById(currentActiveListId).classList.remove('item-selected');
    document.getElementById(newId).classList.add('item-selected');
    this.setState({
      activeListId : newId
    });
  }

  //Function to show item names
  showLiName() {
    const classArray = document.getElementsByClassName('nav-list-name');
    for(var i = 0; i < classArray.length; i++){
      const item = classArray[i];
      item.classList.remove('hidden');
      item.parentElement.style.margin = '0';
      item.parentElement.style.marginBottom = '10px';
    }
    this.setState({
      isExpanded : true
    });
  }

  //Function to hide item names
  hideLiName() {
    const classArray = document.getElementsByClassName('nav-list-name');
    for(var i = 0; i < classArray.length; i++){
      const item = classArray[i];
      item.classList.add('hidden');
      item.parentElement.style.margin = 'auto';
      item.parentElement.style.marginBottom = '10px';
    }
    this.setState({
      isExpanded : false
    });
  }

  render(){
    const iconNames = [
      {icon:'bars'},
      {icon:'home', name:'Home'},
      {icon:'check', name:'Favourites'},
      {icon:'child', name:'Activity'},
      {icon:'user', name:'User'},
      {icon:'clipboard list', name:'Lists'},
      {icon:'chat', name:'Messages'},
      {icon:'group', name:'Groups'},
      {icon:'calendar alternate outline', name:'Events'}
    ];


    const mappedItems = iconNames.map((liItem, index) => (
      <li id={'leftNavItem'+(index)} className={index === 0 ? "hamburger-style" : index === 1 ? "item-selected nav-item-color" : "nav-item-color"} onClick={this.leftNavigationItemsClick}>
        <Icon inverted color='' name={liItem.icon} />
        <p className="nav-list-name hidden">{liItem.name}</p>
      </li>)
    );
    return mappedItems;
  }
}

export default LeftNavigation;
