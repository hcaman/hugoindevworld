import React, {useState} from 'react';
import { UilBracketsCurly, UilAngleDown, UilWebGrid, UilServer, UilCloudDatabaseTree } from '@iconscout/react-unicons';
import '../assets/css/skills.css';

const SkillCard = ({ infoCard }) => (
  <div className="skills__data">
    <div className="skills__title">
      <h3 className="skills__name">{infoCard.name}</h3>
      <span className="skills__number">{infoCard.percent}</span>
    </div>
    <div className="skills__bar">
      <span className="skills__percentage skills__css"></span>
    </div>
  </div>
);

const SkillContent = ({ infoCard, clickerFn }) => {
  const sizeIcons = "32";
  return (
    <div className={`skills__content ${infoCard.isOpen ? 'skills__open' : 'skills__close'}`}>
      <div className="skills__header">
        <UilBracketsCurly size={sizeIcons} className="skills__icon" />
        <div>
          <h1 className="skills__title">{infoCard.title}</h1>
          <span className="section__subtitle">{infoCard.subtitle}</span>
        </div>
        <UilAngleDown onClick={() => clickerFn(infoCard.code)} size={sizeIcons} className="skills__arrow" />
      </div>

      <div className="skills__list grid">
        {infoCard.cardsSkills.map((cardSkill, index) => (
          <SkillCard key={index} infoCard={cardSkill} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [skillsContents, setSkillsContents] = useState([])
  const infoFECards = [
    { name: 'HTML', percent: '85%' },
    { name: 'CSS', percent: '85%' },
    { name: 'Sass', percent: '80%' },
    { name: 'JavaScript', percent: '95%' },
    { name: 'TypeScript', percent: '95%' },
    { name: 'React', percent: '85%' },
    { name: 'Redux', percent: '70%' },
    { name: 'Gulp', percent: '70%' },
    { name: 'Webpack', percent: '70%' },
  ];
  const infoDevOpsCards = [
    { name: 'Azure', percent: '70%' },
    { name: 'Firebase', percent: '70%' },
    { name: 'Docker', percent: '85%' },
    { name: 'Kubernetes', percent: '80%' },
    { name: 'Bash', percent: '60%' },
    { name: 'Heroku', percent: '70%' },
    { name: 'GIT', percent: '95%' },
  ];
  const infoBECards = [
    { name: 'PHP', percent: '75%' },
    { name: 'Node JS', percent: '85%' },
    { name: 'Express JS', percent: '85%' },
    { name: 'Python', percent: '70%' },
    { name: 'Laravel', percent: '75%' },
    { name: 'MongoDB', percent: '65%' },
    { name: 'My SQL', percent: '65%' },
    { name: 'SQL Server', percent: '65%' },
    { name: 'PostgreSQL', percent: '50%' },
    { name: 'MariaSQL', percent: '50%' },
  ];

  const sizeIcons = "32";
  const skills = [
    {
      title: 'Frontend',
      code: 'FE',
      icon: <UilWebGrid size={sizeIcons} className="skills__icon" />,
      isOpen: false,
      subtitle: 'More than 4 years',
      cardsSkills: infoFECards,
    },
    {
      title: 'Backend and DB',
      code: 'BE',
      icon: <UilServer size={sizeIcons} className="skills__icon" />,
      isOpen: false,
      subtitle: 'More than 2 years',
      cardsSkills: infoBECards,
    },
    {
      title: 'DevOps',
      code: 'DO',
      icon: <UilCloudDatabaseTree size={sizeIcons} className="skills__icon" />,
      isOpen: false,
      subtitle: 'More than 1 years',
      cardsSkills: infoDevOpsCards,
    },
  ];

  if (!skillsContents.length) {
    setSkillsContents(skills);
  }

  const handlerOpenClose = (skillCode) => {
    const index = skillsContents.findIndex(skill => skill.code === skillCode);
    const changeState = !skillsContents[index].isOpen;
    setSkillsContents([
         ...skillsContents.slice(0, index),
        { ...skillsContents[index], isOpen: changeState },  
         ...skillsContents.slice(index + 1)
      ]
    );
  }

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <div>
          {skillsContents.map((skillContent, index) => (
            <SkillContent key={index} infoCard={skillContent} clickerFn={handlerOpenClose} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
