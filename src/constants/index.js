import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  oracle,
  statwig,
  techniche,
  coding
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Development Head',
    company_name: 'Coding Club, IIT Guwahati',
    icon: coding,
    iconBg: '#333333',
    date: 'May 2021 - April 2022',
  },
  {
    title: 'Web Ops Team Member',
    company_name: 'Techniche, IIT Guwahati',
    icon: techniche,
    iconBg: '#333333',
    date: 'June 2022 - May 2023',
  },
  {
    title: 'Applicaton Development Intern',
    company_name: 'Oracle Corporation Bangalore',
    icon: oracle,
    iconBg: '#333333',
    date: 'May 2022 - July 2023',
  },
  {
    title: 'Full Stack Web Developer',
    company_name: 'Statwig',
    icon: statwig,
    iconBg: '#333333',
    date: 'March 2021 - Dec 2022',
  },
  {
    title: 'Aplication Developer',
    company_name: 'Oracle Corporation Hyderabad',
    icon: oracle,
    iconBg: '#333333',
    date: 'June 2023 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Vector Routing',
    description: 'A web based application for tracking riders and displaying all the orders to be delivered.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'django',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/bajajtushar094/Grow-Simplee-Tech-Meet-11.0',
    // demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Phinance',
    description:
      'A React-Django based web-app that analyzes SEC filings and generate insights in context of US based SAAS companies',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'django',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/bajajtushar094/Digital-Alpha-Inter-IIT-TechMeet-10.0',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Traffic Sign Recognizer',
    description: 'An Artificial Intelligence tool that predicts Traffic signs based on various pre-trained models and allows user to manipulate datasets.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'flask',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/bajajtushar094/Bosch-Traffic-Sign-Recoginition',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Campus La Vie',
    description: `Campus La Vie is a replica of a students life at IIT Guwahati. In this replica, students was asked about the vital decisions, a student needs to take during his/her stay at IIT Guwahati.A student needs to pass through four examinations - Kenken, Mastermind, Crypto Puzzle and Mystery Room.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Techniche Android App',
    description:
      'React Native based Android App for Techniche, Techfest of IIT Guwahati, the largest techno-management fest of Northeast India',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://play.google.com/store/apps/details?id=com.techniche&hl=en_IN&gl=US',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
