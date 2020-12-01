import React, { Component } from 'react';
import Job from './Job.js'
// Images
import iconJobGrey from './img/job-grey.png';
import iconJobOrange from './img/job-orange.png';
import iconSkillGrey from './img/skill-grey.png';
import iconSkillOrange from './img/skill-orange.png';
import iconDegreeGrey from './img/degree-grey.png';
import iconDegreeOrange from './img/degree-orange.png';

class CoreCVITem extends Component {
  
  render(){
    const actif = this.props.actif ? 'actif' : '';
    let content = <p className="content"> Dev en cours !</p>;
    let image = null;

    switch(this.props.section){
      case "job":
        content = <Job />;
        image = <img
          className="ico-item" 
          alt={`Icône en rapport avec la section ${this.props.title} du CV`}
          src={this.props.actif?iconJobOrange:iconJobGrey}/>
        break;
      case "skill" :
        image = <img
          className="ico-item" 
          alt={`Icône en rapport avec la section ${this.props.title} du CV`}
          src={this.props.actif?iconSkillOrange:iconSkillGrey}/>
        break;
      case "degree" :
        image =  <img
            className="ico-item" 
            alt={`Icône en rapport avec la section ${this.props.title} du CV`}
            src={this.props.actif?iconDegreeOrange:iconDegreeGrey}/>
        break;
      default :
        image = "";
    }

    return(
      <div className={`core-cv-item ${actif}`}>
        <div className="button-item" onClick={this.props.onClick}>
        {image}
        <h1>
          {this.props.title}
        </h1>
        {(actif)?image:null}
        </div>
        {content}
      </div>
    );
  }
}

class CoreCV extends Component {  
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      activeSection:null,
    }
  }

  handleClick(section){
    let activeSection = this.state.activeSection === section ? null : section;
    this.setState({
      activeSection: activeSection,
    });
  }

  render(){
    return(
      <div className="container core-cv">
        <CoreCVITem 
          actif={(this.state.activeSection === 'job')} 
          section="job"
          title="Expériences Pro."
          onClick={() => {this.handleClick('job')}}/>
        <CoreCVITem 
          actif={(this.state.activeSection === 'skill')}
          section="skill"
          title="Compétences"
          onClick={() => {this.handleClick('skill')}}/>
        <CoreCVITem 
          actif={(this.state.activeSection === 'degree')}
          section="degree"
          title="Diplômes"
          onClick={() => {this.handleClick('degree')}}/>
      </div>
    );
  }
}

export default CoreCV ;