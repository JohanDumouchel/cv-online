import React, { Component } from 'react';
import './Skill.scss';

class SkillItem extends Component {
  render(){
    return (
    <div>
      <p>{this.props.skill.content}</p>
    </div>
    );
  }
}

class SkillSubCategory extends Component {
  render(){
    if(!this.props.skills || !Array.isArray(this.props.skills)){
      return (<p>Pas de Compétences !</p>)
    }

    const skills = this.props.skills.map((skill)=>{
      return <SkillItem key={skill.id} skill={skill}/>
    });

    return (
    <div>
      <h3>{this.props.subCategory.title}</h3>
      {skills}
    </div>);
  }
}

class SkillCategory extends Component {
  constructor(props){
    super(props);
    this.isCategory = this.isCategory.bind(this);
    this.getSkillsBySubCategory = this.getSkillsBySubCategory.bind(this);
    this.renderSkillsBySubCategory = this.renderSkillsBySubCategory.bind(this);
    this.renderSkills = this.renderSkills.bind(this);
  }
  
  isCategory(category){
    return(category && category.id && category.title);
  }

  getSkillsBySubCategory(subCategory){
    if(!this.isCategory(subCategory)
      || !Array.isArray(this.props.skills)){
      return null;
    }
    let skillBySubCategory = [];
    this.props.skills.forEach(skill => {
      if(!skillBySubCategory.includes(skill) && skill.subCategory === subCategory){
        skillBySubCategory.push(skill);
      }
    });
    return skillBySubCategory;
  }

  renderSkillsBySubCategory(){    
    let subCategories = [];
    this.props.skills.forEach(skill => {
      if(!subCategories.includes(skill.subCategory) && skill.subCategory !== null){
        subCategories.push(skill.subCategory);
      }
    });
    
    const subCatRender = subCategories.map((subCat,i)=>{
      let idSubCat = subCat.id;
      return(
        <SkillSubCategory key={idSubCat} subCategory={subCat} skills={this.getSkillsBySubCategory(subCat)}/>
      );
    });
    return subCatRender;
  }

  renderSkills(){
    const skills = this.props.skills.map((skill)=>{
      return (<SkillItem key={skill.id} skill={skill}/>)
    });
    return skills;
  }

  render(){
    if(!this.isCategory(this.props.category)){
      return null;
    }
    let category = this.props.category;
    let skills;

    switch (category.id) {
      case 'dev' :
        skills = this.renderSkillsBySubCategory();
        break;
      case 'managment' :
        skills = this.renderSkills();
        break;
      default : 
        skills = null;
        break;
    }
    
    return(
    <div>
      <h2 id={category.id}> {category.title} </h2>
      <div>
        {skills}
      </div>
    </div>
    
    );
  }
}

class Skill extends Component {
  constructor(props){
    super(props);
    this.state = {
      skills: SkillsData,
    }
    this.getSkillsByCategory = this.getSkillsByCategory.bind(this);
    this.getMainCategories = this.getMainCategories.bind(this);
    this.renderCategories = this.renderCategories.bind(this);
  }

  getSkillsByCategory(category){
    if(!category || !category.id || !category.title 
      || !Array.isArray(this.state.skills)){
      return null;
    }
    let skillsByCat = [];
    this.state.skills.forEach(skill => {
      if(skill.category === category){
        skillsByCat.push(skill);
      }
    });
    return skillsByCat ;
  }

  getMainCategories(){
    if(!this.state.skills || !Array.isArray(this.state.skills)){
      return null;
    }
    let categories = [];
    this.state.skills.forEach(skill => {
      if(!skill || !skill.category 
        || !skill.category.id
        || !skill.category.title){
        return;
      }
      if(!categories.includes(skill.category)){
        categories.push(skill.category);
      }
    });    
    return categories;
  }

  renderCategories(){
    let categories = this.getMainCategories();
    if(categories !== null && Array.isArray(categories) && categories.length > 0){
      const renderCategories = categories.map((category)=>{
        return <SkillCategory key={category.id} category={category} skills={this.getSkillsByCategory(category)}/>
      });
      return (renderCategories)
    }
    return null;
  }

  render(){
    if(!this.state.skills || !Array.isArray(this.state.skills)){
      return (<div>Compétences en cours de développement ! 
        Ou alors, et je ne l'espère pas, il n'y a aucune compétence à montrer.</div>); 
    }

    let categories = this.renderCategories();

    return (<div>{categories}</div>);
  }
}

const SkillCategoriesData = {
  dev: {id:"dev", title: "Développement"},
  managment: {id:"managment", title: "Gestion de projet"},
  front: {id:"front",title: "Front"},
  back: {id:"back",title: "Back"},
  langages: {id:"langages",title: "Langages"},
  framework: {id:"framework",title: "Framework"},
};

const SkillsData = [
  {
    id:1,
    category: SkillCategoriesData.dev,
    subCategory: SkillCategoriesData.front,
    content: "Conception et développement d’interfaces utilisateurs complexes.",
    grade: null,
    years: null,
    linkTo: [10,12,13,14,22,23,20,],
  },
  {
    id:2,
    category: SkillCategoriesData.dev,
    subCategory: SkillCategoriesData.front,
    content: "Connaissances et mise en pratiques de nombreuses bibliothèques (‘framework’) liées aux interfaces utilisateurs.",
    grade: null,
    years: null,
    linkTo: [22,23,20,21,32,],
  },
  {
    id:3,
    category: SkillCategoriesData.dev,
    subCategory: SkillCategoriesData.front,
    content: "Intégration de ‘templates’ de style.",
    grade: null,
    years: null,
    linkTo: [10,12,13,14,22,23,],
  },
  {
    id:4,
    category: SkillCategoriesData.dev,
    subCategory: SkillCategoriesData.back,
    content: "Conception et réalisation d’API web (REST).",
    grade: null,
    years: null,
    linkTo: [7,8,9,15,16,17,19,21,24,25,],
  },
  {
    id:5,
    category: SkillCategoriesData.dev,
    subCategory: SkillCategoriesData.back,
    content: "Connaissances et mise en pratiques de différentes architectures (‘design patterns’) de développement : SOA, MVC, Microservices.",
    grade: null,
    years: null,
    linkTo: [7,8,9,10,17,18,19,], 
  },
  {
    id:6,
    category: SkillCategoriesData.dev,
    subCategory: SkillCategoriesData.back,
    content: "Compréhension et intégrations de Web services externes.",
    grade: null,
    years: null,
    linkTo: [7,10,21,22,], 
  },
  {
    id:7,
    category: SkillCategoriesData.dev,
    subCategory: SkillCategoriesData.langages,
    content: "C#",
    grade: 8,
    years: null,
  },
  {
    id:8,
    category: SkillCategoriesData.dev,
    subCategory: SkillCategoriesData.langages,
    content: "Java",
    grade: 6,
    years: null, 
  },
  {
    id:9,
    category: SkillCategoriesData.dev,
    subCategory: SkillCategoriesData.langages,
    content: "PHP 7",
    grade: 7,
    years: null, 
  },
  {
    id:10,
    category: SkillCategoriesData.dev,
    subCategory: SkillCategoriesData.langages,
    content: "Javascript",
    grade: 9,
    years: null, 
  },  
  {
    id:11,
    category: SkillCategoriesData.dev,
    subCategory: SkillCategoriesData.langages,
    content: "PowerShell",
    grade: 5,
    years: null,
  },
  {
    id:12,
    category: SkillCategoriesData.dev,
    subCategory: SkillCategoriesData.langages,
    content: "HTML 5",
    grade: 6,
    years: null, 
  },
  {
    id:13,
    category: SkillCategoriesData.dev,
    subCategory: SkillCategoriesData.langages,
    content: "CSS 3",
    grade: 6,
    years: null, 
  },
  {
    id:14,
    category: SkillCategoriesData.dev,
    subCategory: SkillCategoriesData.langages,
    content: "SCSS",
    grade: 6,
    years: null, 
  },
  {
    id:15,
    category: SkillCategoriesData.dev,
    subCategory: SkillCategoriesData.langages,
    content: "SQL",
    grade: 8,
    years: null, 
  },  
  {
    id:16,
    category: SkillCategoriesData.dev,
    subCategory: SkillCategoriesData.langages,
    content: "Transact-SQL",
    grade: 7,
    years: null, 
  },
  {
    id:17,
    category: SkillCategoriesData.dev,
    subCategory: SkillCategoriesData.framework,
    content: "Symfony 4",
    grade: null,
    years: null, 
  },
  {
    id:18,
    category: SkillCategoriesData.dev,
    subCategory: SkillCategoriesData.framework,
    content: "ASP.NET MVC",
    grade: null,
    years: null, 
  },
  {
    id:19,
    category: SkillCategoriesData.dev,
    subCategory: SkillCategoriesData.framework,
    content: "ASP.NET Web API",
    grade: null,
    years: null, 
  },
  {
    id:20,
    category: SkillCategoriesData.dev,
    subCategory: SkillCategoriesData.framework,
    content: "NodeJS",
    grade: null,
    years: null, 
  },
  {
    id:21,
    category: SkillCategoriesData.dev,
    subCategory: SkillCategoriesData.framework,
    content: "SDK Dynamics CRM",
    grade: null,
    years: null, 
  },
  {
    id:22,
    category: SkillCategoriesData.dev,
    subCategory: SkillCategoriesData.framework,
    content: "JQuery",
    grade: null,
    years: null, 
  },{
    id:32,
    category: SkillCategoriesData.dev,
    subCategory: SkillCategoriesData.framework,
    content: "FullCalendar",
    grade: null,
    years: null, 
  },
  {
    id:23,
    category: SkillCategoriesData.dev,
    subCategory: SkillCategoriesData.framework,
    content: "BootStrap",
    grade: null,
    years: null,
  },
  {
    id:24,
    category: SkillCategoriesData.dev,
    subCategory: SkillCategoriesData.framework,
    content: "React",
    grade: null,
    years: null, 
  },
  {
    id:25,
    category: SkillCategoriesData.dev,
    subCategory: SkillCategoriesData.framework,
    content: "Spring",
    grade: null,
    years: null, 
  },
  {
    id:33,
    category: SkillCategoriesData.managment,
    subCategory: null,
    content: "Compréhension et assimilation des processus métier",
    grade: null,
    years: null, 
  },
  {
    id:26,
    category: SkillCategoriesData.managment,
    subCategory: null,
    content: "Rédaction de cahier des charges.",
    grade: null,
    years: 5, 
  },
  {
    id:27,
    category: SkillCategoriesData.managment,
    subCategory: null,
    content: "Gestion de projet sous la méthode agile : SCRUM.",
    grade: null,
    years: 4, 
  },
  {
    id:28,
    category: SkillCategoriesData.managment,
    subCategory: null,
    content: "Présentation d’application.",
    grade: null,
    years: 2, 
  },
  {
    id:29,
    category: SkillCategoriesData.managment,
    subCategory: null,
    content: "Animation de réunion utilisateur.",
    grade: null,
    years: 2, 
  },
  {
    id:30,
    category: SkillCategoriesData.managment,
    subCategory: null,
    content: "Management d’une équipe réduite (2 personnes).",
    grade: null,
    years: 1, 
  },
  {
    id:31,
    category: SkillCategoriesData.managment,
    subCategory: null,
    content: "Réalisation d’entretiens.",
    grade: null,
    years: null, 
  },
];

export default Skill;