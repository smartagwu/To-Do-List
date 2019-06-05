import React from 'react'
import { Tab } from 'semantic-ui-react'
import img from './founder.jpg'

const aboutDetailsInfo = [
  {label: 'Description', value:'This article is part of our Photography Business Startup Guide—a curated list of articles to help you plan, start, and grow your photography business! If you have some creative photography chops, you might want to open your own business.'},
  {label: 'Type', value:'Sales Task'},
  {label:'Status', value:'Not Started'}
];

const aboutDetailsBottomInfo = [
  {label: 'Account Name', value: 'Chipotle'},
  {label: 'Email', value: 'sharrioc@chipotle.com'}
];

const aboutDetailsInfoList = aboutDetailsInfo.map((value,index) => (
  <li id={"aboutTopDetailsList" + index}>
    <p class="about-top-detail-label">{value.label}</p>
    <p id={value.label === 'Description' ? 'aboutDetailTopDescription' : value.label === 'Type' ? 'aboutDetailTopType' : 'aboutDetailTopStatus'}>{value.value}</p>
  </li>
));

const aboutDetailsBottomInfoList = aboutDetailsBottomInfo.map((value,index) => (
  <li id={"aboutDetailsBottomInfoList" + index}>
    <p class="about-top-detail-label" id='aboutBottomDetailAccountNameId'>{value.label}</p>
    {value.label === 'Email' ? <a href={'mailto:' + value.value}><p id='aboutBottomDetailEmailId'>{value.value}</p></a> : <p id='aboutBottomDetailEmailId'>{value.value}</p>}
  </li>
));

const AboutTaskContainer = (
  <div>
    <div id="aboutDetailsContainer" className="about-details-top">
      <ul id="aboutDetailsTopList">{aboutDetailsInfoList}</ul>
    </div>
    <div className="about-details-bottom">
      <div className="about-details-account-details">
        <div className="about-task-profile-img-container">
          <img id="aboutTaskBottomAccountImgId" src={img}/>
        </div>

        <div className="about-task-profile-details-container">
          <p id="aboutTaskBottomAccountLabelId" className="label-color">Account Executive</p>
          <a id="aTBAProfileNameContId" href="#">
            <p id="aTBAProfileNameId" className="">Sarah Anderson</p>
          </a>
        </div>
      </div>
      <ul id="aboutDetailsBottomList">{aboutDetailsBottomInfoList}</ul>
    </div>
  </div>
);

const FeedTaskContainer = (<p>This is the feeds in the task</p>);

const panes = [
  { menuItem: 'About', render: () => <Tab.Pane attached={false}>{AboutTaskContainer}</Tab.Pane> },
  { menuItem: 'Feed', render: () => <Tab.Pane attached={false}>{FeedTaskContainer}</Tab.Pane> }
]

const ViewTaskDetailTab = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default ViewTaskDetailTab
