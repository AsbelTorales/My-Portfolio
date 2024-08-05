import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.png';
import Work4 from './assets/project-4.png';
import Work5 from './assets/project-5.png';
import Work6 from './assets/project-6.png';


export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Asbel',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Torales',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '27 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Mexican',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Mexico City',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+52 2969613706',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'toralesasbel@gmail.com',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Spanish, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '4+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '5+',
    title: 'Completed <br /> Projects',
  },

];

export const resume = [

  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '08/2029 - 02/2022',
    title: 'Full-stack Developer <span> Notes Pages Project </span>',
    desc: 'I developed a notes system on the main page of a website.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '02/2024 - 08/2024',
    title: 'FullStack Developer <span> Ecommerce Manos a la obra </span>',
    desc: 'I developed an e-commerce platform for artisans and independent artists, using technologies such as Figma, JavaScript, CSS, Bootstrap, HTML, Java, and MySQL, managing the project with Jira and the SCRUM methodology.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '11/2023 - 01/2024',
    title: 'Front-end Developer <span> Webside Design CDMX </span>',
    desc: 'I developed the main page of a website dedicated to promoting tourist destinations in Mexico City, improving the user experience.',
  },
  
  {
    id: 4,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '07/2023 - 12/2023',
    title: 'Front-end Developer <span> VigíaVial Project </span>',
    desc: 'I developed the front-end of an intuitive and functional mobile application that allows cyclists and pedestrians to report violations quickly, improving safety and order on the roads.',
  },

  {
    id: 5,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '04/2023 - 06/2023',
    title: 'Front-end Developer <span> Astral Chart Consultation Project </span>',
    desc: 'I developed the main page of a website specialized in astrological chart consultations.',
  },

  {
    id: 6,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '01/2023 - 03/2023',
    title: 'Front-end Developer <span> Intuitive Interface Project for Quick Queries </span>',
    desc: 'I developed the main page of a website that interacts with an external API to provide dynamic responses to user queries.',
  },


  {
    id: 7,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '08/2019 - 02/2022',
    title: 'Project Assistant <span> Water Center for Latin America and the Caribbean </span>',
    desc: 'I analyzed historical water sector data in northern Mexico, assessing water security risks and managing the project in a team using Jira.',
  },

  {
    id: 8,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '02/2019 - 08/2019',
    title: 'Project Developer <span> Mexican Academy of Sciences | Tecnológico de Monterrey </span>',
    desc: 'I developed flood risk maps in Monterrey using GIS and QGIS, analyzing meteorological databases and generating key information.',
  },

  {
    id: 9,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2024',
    title: 'Java FullStack Developer <span> AIFYC Institute Texas </span>',
    desc: 'FullStack Java Developer',
  },

  {
    id: 10,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2024',
    title: 'Essential React <span> LinkenIn Learning </span>',
    desc: 'Create web applications with react',
  },

  {
    id: 11,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2024',
    title: 'React JS <span> Udemy </span>',
    desc: 'Create web applications with react',
  },

  {
    id: 12,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2024',
    title: 'Certification Degree <span> Google Career </span>',
    desc: 'Professional User Experience (UX) Design Certification',
  },

  {
    id: 13,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2024',
    title: 'Bootcamp <span> Generation México </span>',
    desc: 'FullStack Java Developer',
  },

  {
    id: 14,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Certification Degree <span> Platzi | Agencia Digital de Innovación Pública </span>',
    desc: 'Python Programming',
  },

  {
    id: 15,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'AWS Discovery Day: Introducción a la nube y servicios de AWS <span> Agencia Digital de Innovación Pública </span>',
    desc: 'Nube y servicios AWS',
  },

  {
    id: 16,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020',
    title: 'Bachelor Degree <span> Universidad Juárez Autonoma de Tabasco </span>',
    desc: 'Geophysical Engineering',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '95',
  },

  {
    id: 2,
    title: 'Css',
    percentage: '90',
  },

  {
    id: 3,
    title: 'Javascript',
    percentage: '90',
  },

  {
    id: 4,
    title: 'Python',
    percentage: '80',
  },

  {
    id: 5,
    title: 'Wordpress',
    percentage: '95',
  },

  {
    id: 6,
    title: 'Jquery',
    percentage: '50',
  },

  {
    id: 7,
    title: 'Java',
    percentage: '50',
  },

  {
    id: 8,
    title: 'React',
    percentage: '55',
  },

  {
    id: 9,
    title: 'SQL',
    percentage: '45',
  },

  {
    id: 10,
    title: 'Gitlab',
    percentage: '95',
  },

  {
    id: 11,
    title: 'Bootstrap',
    percentage: '80',
  },

  {
    id: 12,
    title: 'Material UI',
    percentage: '80',
  },


];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Webside Design CDMX',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Main page of a website dedicated to promoting tourist destinations in CDMX.',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Freelance',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, Css, JavaScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'Portfolio',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'E-commerce Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'E-commerce platform.',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Manos a la Obra',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, Css, Bootstrap, Java Script, Java, Spring Boot, MySql',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://manos-a-la-obra.onrender.com/',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Front-end App' ,
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'App is intended for cyclists and pedestrians, allowing them to report civic violations.',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Team VigíaVial',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Figma, HTML, CSS, Java Script, React, Material UI',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'Portfolio',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Notes Pages',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Note system for the home page of a website.',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Freelance',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, React Js, Node Js, WordPress, Material UI, API',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'Portfolio',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Astral Chart Consultation Project ',
    details: [
      {
        title: 'Project : ',
        desc: 'Home page of a website specialized in astrological chart consultations.',
      },
      {
        title: 'Client : ',
        desc: 'Freelance',
      },
      {
        title: 'Language : ',
        desc: 'Html, Css, React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'Portfolio',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Intuitive Interface',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'The page of a website that interacts with an external API to provide dynamic responses to user queries.',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Freelance',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, Java Script, API',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'Portfolio',
      },
    ],
  },
];

