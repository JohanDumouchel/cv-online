import React, { Component } from 'react';
// Images
import iconJobGrey from './img/job-grey.png';
import iconJobOrange from './img/job-orange.png';
import iconSkillGrey from './img/skill-grey.png';
import iconSkillOrange from './img/skill-orange.png';
import iconDegreeGrey from './img/degree-grey.png';
import iconDegreeOrange from './img/degree-orange.png';
import iconArrowRight from './img/arrow-right-orange-32.png';
import iconArrowBottom from './img/arrow-bottom-orange-32.png';

class JobStack extends Component {
  constructor(props){
    super(props);
    this.renderStack = this.renderStack.bind(this);
  }
  renderStack(){
    let job = this.props.job;
    let env;
    let langage;
    let framework;
    let degree;

    if(!job){
      return(<div className="job-stack-empty"><p>Cliquez sur une expérience professionnelle
        pour en voir plus!</p></div>);
    }
    let classNameList= "list-stack";
    if(job && Array.isArray(job.env)){
      env =<div className={classNameList}>
        <h3>Environnement technique</h3>
        <ul>{ job.env.map((env,i)=>{ return(<li key={i}>{env}</li>)}) }</ul></div>;
    }
    if(job && Array.isArray(job.langage)){
      langage = <div className={classNameList}>
        <h3>Langage informatique</h3>
        <ul>{ job.langage.map((langage,i)=>{ return(<li key={i}>{langage}</li>)}) }</ul></div>;
    }
    if(job && Array.isArray(job.framework)){
      framework = <div className={classNameList}>
        <h3>Framework</h3>
        <ul>{ job.framework.map((framework,i)=>{ return(<li key={i}>{framework}</li>)}) }</ul></div>;
    }
    if(job && job.degree){
      degree = <div className={`${classNameList} degree`}><h3>Diplôme obtenu</h3>
        <p>{job.degree}</p></div>;
    }
        
    return(
    <div className="job-stack">      
        {env}      
        {langage}      
        {framework}
        {degree}
    </div>
    );    
  }
  render(){
    return(
          this.renderStack()
    );
  }
}

class JobListItem extends Component{
  constructor(props){
    super(props);
    this.onClickJob = this.onClickJob.bind(this);
  }
  
  onClickJob(){
    this.props.onClickJob(this.props.job);
  }
  
  render(){
    let job = this.props.job;
    if(!job 
      || !job.title 
      || (!job.skills && Array.isArray(job.skills)))
    {
      return null;
    }
    const skills = job.skills.map((skill,i)=>{
      return( <li key={i}> {skill} </li> );
    });

    let skillsRender;
    let iconArrow;
    if(this.props.isSelected){
      skillsRender = <ul> {skills} </ul>;
      iconArrow = iconArrowBottom;
    }else {
      iconArrow = iconArrowRight;
    }

    return(
      <div className={`job-list-item ${(this.props.isSelected)?"selected":""}`}>
        <div className="title" onClick={this.onClickJob}>
          <h3><img alt="" src={iconArrow}/>{job.title}</h3>
        </div>
        {skillsRender}
      </div>
    );
  }
}

class JobList extends Component {
  constructor(props){
    super(props);
    this.renderJobListItems = this.renderJobListItems.bind(this);
  }

  renderJobListItems (){
    const jobs = this.props.jobs.slice();
    const jobsListItems = jobs.map((job,i) => {
      return ( <JobListItem key={i} job={job} onClickJob={this.props.onClickJob} 
        isSelected={(job === this.props.jobSelected)}/> ) ;
    })
    return (jobsListItems);
  }

  render(){
    return (
      <div className="job-list">
        <div>
          {this.renderJobListItems()}
        </div>
      </div>
    );
  }
}

class Job extends Component {
  constructor(props){
    super(props);
    this.state = {
      jobSelected: null,
    }
    this.handleClickJob = this.handleClickJob.bind(this);
  }

  handleClickJob(job){
    this.setState({jobSelected:(this.state.jobSelected===job)?null:job});
  }

  render (){
    return (
      <div className="job content">
        <JobList  
          jobSelected={this.state.jobSelected} 
          jobs={this.props.jobs} 
          onClickJob={this.handleClickJob}/>
          <JobStack job={this.state.jobSelected}/>
      </div>
    );
  }
}

class CoreCVITem extends Component {
  
  render(){
    const actif = this.props.actif ? 'actif' : '';
    let content = <p className="content"> Dev en cours !</p>;
    let image = null;

    switch(this.props.section){
      case "job":
        content = <Job jobs={this.props.data}/>;
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
          data={Jobs}
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

const Jobs = [
  {
    title : "Développeur Full Stack - IN'LI - 11/17 - 11/19",
    skills : [
      "Conception et développement de solutions applicatives pour de la gestion interne.",
      "Développement d'outils d'administration",
      "Mise en production d'application sous divers environnement.",
      "Maintenance et évolution d'un parc applicatif de gestion interne.",
      "Gestion de projet sous la méthode SCRUM.",
    ],
    env : [
      "Windows","Azure","SLQ Server","Visual Studio","AzureDevOps","CentOS","Git",
    ],
    langage : [
      "C#","Javascript","php 7","Css","Html","PowerShell","Transact-SQL",
    ],
    framework : [
      "ASP.Net MVC","ASP.Net Web Application","Dynamics CRM","JQuery","FullCalendar JS","Bootstrap",
    ],
    degree : null,
  },
  {
    title : "Développeur Full Stack - Paris Habitat - 11/15 - 11/17",
    skills : [
      "Conception et développement d'applications web de gestion interne sous Dynamic CRM.",
      "Création de plugin C# pour ce même progiciel.",
      "Gestion de projet sous la méthode SCRUM.",
    ],
    env : [
      "Windows","Dynamics CRM","Visual Studio","Git",
    ],
    langage : [
      "C#","Javascript","Css","Html","PowerShell","Transact-SQL",
    ],
    framework : [
      "Dynamics CRM","JQuery",
    ],
    degree : "Expert en système d’information - ESMTI Next Formation, Paris - 2017",
  },
  {
    title : "Développeur Back-end - Sotravo - 11/14 - 10/15",
    skills : [
      "Conception d'API",
      "Refonte d’applications internes",
      "Maintenance et évolution d’API REST",
      "Gestion de projet sous la méthode Agile (inspiré de SCRUM)",
    ],
    env : [
      "Windows","CentOS","Debian","Git","MySql","Sublime Text","NetBean",
    ],
    langage : [
      "Php 5","Html","Css","Less","SQL",
    ],
    framework : [
      "Symfony 3","JQuery","Bootstrap",
    ],
    degree : "Concepteur développeur de système d’information - ESMTI Next Formation, Paris - 2015",
  },
  {
    title : "Développeur junior - Le conseil informatique - 10/12 - 10/13",
    skills : [ 
      "Conception et développement d'applications avec WinDev 14.",
      "Rédaction de cahier des charges.",
      "Intégration Web",
    ],
    env : [
      "Windows","WinDev 14","SAGE Compta", "SAGE Bâtigest","Access",
    ],
    langage : [
      "Html","Css","WLangage",
    ],
    framework : [
      "JQuery",
    ],
    degree : "BTS SIO - ISIO, Paris - 2014",
  }
]

export default CoreCV ;