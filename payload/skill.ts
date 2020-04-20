import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'TypeScript',
      level: 2,
    },
    {
      title: 'Node.js',
      level: 2,
    },
    {
      title: 'C/C++',
      level: 2,
    },
    {
      title: 'PHP',
      level: 1,
    },
    {
      title: 'Java',
      level: 1,
    },
    {
      title: 'Python',
      level: 1,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      level: 2,
    },
    {
      title: 'Redis',
      level: 1,
    },
    {
      title: 'ElasticSearch',
      level: 1,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'Javascript',
      level: 2,
    },
    {
      title: 'jQuery',
      level: 2,
    },
    {
      title: 'HTML/CSS',
      level: 1,
    },
    {
      title: 'Nuxt.js',
      level: 1,
    },
    {
      title: 'Vue.js',
      level: 1,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Ubuntu',
    },
    {
      title: 'Selenium',
    },
    {
      title: 'Vim',
    },
    {
      title: 'DevOps',
    },
    {
      title: 'Docker',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'Git',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
