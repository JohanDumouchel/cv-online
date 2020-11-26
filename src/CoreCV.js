import React, { Component } from 'react';

class JobListItem extends Component{
  
  render(){
    let job = this.props.job;
    if(!job 
      || !job.title 
      || (!job.skills && Array.isArray(job.skills)))
    {
      return;
    }

    const skills = job.skills.map((skill,i)=>{
      return( <li> {skill} </li> );
    });

    return(
      <div>
        <h3>{job.title}</h3>
        <ul>
          {skills}
        </ul>
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
      return ( <JobListItem key={i} job={job} /> ) ;
    })
    return (jobsListItems);
  }

  render(){
    return (
      <div className>
        <h2>Liste des dernières expériences professionnelles</h2>
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
      jobSlected: null,
    }
    this.handleClickJob = this.handleClickJob.bind(this);
  }

  handleClickJob(){
  }

  render (){    
    return (
      <div className="job content">
        <JobList  jobs={this.props.jobs}/>
      </div>
    );
  }
}

class CoreCVITem extends Component {
  constructor(props){
    super(props);
  }
  
  render(){
    const Txt = this.props.actif ? 'Actif' : 'Pas Actif';
    const actif = this.props.actif ? 'actif' : '';
    let coreCVITemContent=null;
    if(this.props.section === "job"){
      coreCVITemContent = <Job jobs={this.props.data}/>
    } else {
      coreCVITemContent = <p className="content"> Dev en cours !</p>
    }

    return(
      <div className={`core-cv-item ${actif}`}>
        <h1>
          {this.props.title} - {Txt}
          <button onClick={this.props.onClick}>
          TEST
        </button>
        </h1>
        {coreCVITemContent}
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
          title="Compétences"
          onClick={() => {this.handleClick('skill')}}/>
        <CoreCVITem 
          actif={(this.state.activeSection === 'degree')} 
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
      "Windows","CentOS","Debian","Git","Sublime Text","NetBean",
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
      "Windows","WinDev 14","SAGE Compta", "SAGE Bâtigest",
    ],
    langage : [
      "Html","Css","Access","WLangage",
    ],
    framework : [
      "JQuery", "WinDev 14",
    ],
    degree : "BTS SIO - ISIO, Paris - 2014",
  }
]

export default CoreCV ;