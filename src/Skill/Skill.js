import React, { Component } from 'react';
import './Skill.scss';

class Skill extends Component {
  render(){
    return (<div>Compétences en cours de développement !</div>)
  }
}

const SkillCategories = {
  dev: {id:"dev", title: "Développement"},
  managment: {id:"managment", title: "Gestion de projet"},
  front: {id:"front",title: "Front"},
  back: {id:"back",title: "Back"},
  langages: {id:"langages",title: "Langages"},
  framework: {id:"framework",title: "Framework"},
};

const Skills = [
  {
    category: SkillCategories.dev,
    subCategory: SkillCategories.front,
    content: "Conception et développement d’interfaces utilisateurs complexes.",
    grade: null,
    years: null, 
  },
  {
    category: SkillCategories.dev,
    subCategory: SkillCategories.front,
    content: "Connaissances et mise en pratiques de nombreuses bibliothèques (‘framework’) liées aux interfaces utilisateurs.",
    grade: null,
    years: null, 
  },
  {
    category: SkillCategories.dev,
    subCategory: SkillCategories.front,
    content: "Intégration de ‘templates’ de style.",
    grade: null,
    years: null, 
  },
  {
    category: SkillCategories.dev,
    subCategory: SkillCategories.back,
    content: "Conception et réalisation d’API web (REST).",
    grade: null,
    years: null, 
  },
  {
    category: SkillCategories.dev,
    subCategory: SkillCategories.back,
    content: "Connaissances et mise en pratiques de différentes architectures (‘design patterns’) de développement : SOA, MVC, Microservices.",
    grade: null,
    years: null, 
  },
  {
    category: SkillCategories.dev,
    subCategory: SkillCategories.back,
    content: "Compréhension et intégrations de Web services externes.",
    grade: null,
    years: null, 
  },
  {
    category: SkillCategories.dev,
    subCategory: SkillCategories.langages,
    content: "C#",
    grade: 8,
    years: null, 
  },
  {
    category: SkillCategories.dev,
    subCategory: SkillCategories.langages,
    content: "Java",
    grade: 6,
    years: null, 
  },
  {
    category: SkillCategories.dev,
    subCategory: SkillCategories.langages,
    content: "PHP 7",
    grade: 7,
    years: null, 
  },
  {
    category: SkillCategories.dev,
    subCategory: SkillCategories.langages,
    content: "Javascript",
    grade: 9,
    years: null, 
  },  
  {
    category: SkillCategories.dev,
    subCategory: SkillCategories.langages,
    content: "PowerShell",
    grade: 5,
    years: null,
  },
  {
    category: SkillCategories.dev,
    subCategory: SkillCategories.langages,
    content: "HTML 5",
    grade: 6,
    years: null, 
  },
  {
    category: SkillCategories.dev,
    subCategory: SkillCategories.langages,
    content: "CSS 3",
    grade: 6,
    years: null, 
  },
  {
    category: SkillCategories.dev,
    subCategory: SkillCategories.langages,
    content: "SCSS",
    grade: 6,
    years: null, 
  },
  {
    category: SkillCategories.dev,
    subCategory: SkillCategories.langages,
    content: "SQL",
    grade: 8,
    years: null, 
  },  
  {
    category: SkillCategories.dev,
    subCategory: SkillCategories.langages,
    content: "Transact-SQL",
    grade: 7,
    years: null, 
  },
  {
    category: SkillCategories.dev,
    subCategory: SkillCategories.framework,
    content: "Symfony 4",
    grade: null,
    years: null, 
  },
  {
    category: SkillCategories.dev,
    subCategory: SkillCategories.framework,
    content: "ASP.NET MVC",
    grade: null,
    years: null, 
  },
  {
    category: SkillCategories.dev,
    subCategory: SkillCategories.framework,
    content: "ASP.NET Web API",
    grade: null,
    years: null, 
  },
  {
    category: SkillCategories.dev,
    subCategory: SkillCategories.framework,
    content: "NodeJS",
    grade: null,
    years: null, 
  },
  {
    category: SkillCategories.dev,
    subCategory: SkillCategories.framework,
    content: "SDK Dynamics CRM",
    grade: null,
    years: null, 
  },
  {
    category: SkillCategories.dev,
    subCategory: SkillCategories.framework,
    content: "JQuery",
    grade: null,
    years: null, 
  },
  {
    category: SkillCategories.dev,
    subCategory: SkillCategories.framework,
    content: "BootStrap",
    grade: null,
    years: null,
  },
  {
    category: SkillCategories.dev,
    subCategory: SkillCategories.framework,
    content: "React",
    grade: null,
    years: null, 
  },
  {
    category: SkillCategories.dev,
    subCategory: SkillCategories.framework,
    content: "Spring",
    grade: null,
    years: null, 
  },
  {
    category: SkillCategories.managment,
    subCategory: null,
    content: "Rédaction de cahier des charges.",
    grade: null,
    years: null, 
  },
  {
    category: SkillCategories.managment,
    subCategory: null,
    content: "Gestion de projet sous la méthode agile : SCRUM.",
    grade: null,
    years: null, 
  },
  {
    category: SkillCategories.managment,
    subCategory: null,
    content: "Présentation d’application.",
    grade: null,
    years: null, 
  },
  {
    category: SkillCategories.managment,
    subCategory: null,
    content: "Animation de réunion utilisateur.",
    grade: null,
    years: null, 
  },
  {
    category: SkillCategories.managment,
    subCategory: null,
    content: "Management d’une équipe réduite (2 personnes).",
    grade: null,
    years: null, 
  },
  {
    category: SkillCategories.managment,
    subCategory: null,
    content: "Réalisation d’entretiens.",
    grade: null,
    years: null, 
  },
];

export default Skill;