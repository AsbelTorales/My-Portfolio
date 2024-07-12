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
    year: '02/2024 - 05/2024',
    title: 'FullStack Developer <span> Ecommerce Manos a la obra </span>',
    desc: 'I developed an e-commerce platform for artisans and independent artists, using technologies such as Figma, JavaScript, CSS, Bootstrap, HTML, Java, and MySQL, managing the project with Jira and the SCRUM methodology.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '08/2029 - 02/2022',
    title: 'Project Assistant <span> Water Center for Latin America and the Caribbean </span>',
    desc: 'I analyzed historical water sector data in northern Mexico, assessing water security risks and managing the project in a team using Jira.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '02/2019 - 08/2019',
    title: 'Project Developer <span> Mexican Academy of Sciences | Tecnológico de Monterrey </span>',
    desc: 'I developed flood risk maps in Monterrey using GIS and QGIS, analyzing meteorological databases and generating key information.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2024',
    title: 'Certification Degree <span> Google Career </span>',
    desc: 'Professional User Experience (UX) Design Certification',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2024',
    title: 'Bootcamp <span> Generation México </span>',
    desc: 'FullStack Java Developer',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Certification Degree <span> Platzi | Agencia Digital de Innovación Pública </span>',
    desc: 'Python Programming',
  },

  {
    id: 7,
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
    percentage: '45',
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
    title: 'Webside Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Webside',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: '',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, Css',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '',
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
        desc: 'E-commerce',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Manos a la Obra',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, Css, Java Script, Java',
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
    title: 'App Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'App',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: '',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Figma',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Notes Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: '',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: '',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: '',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Notes Page',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: '',
      },
      {
        title: 'Language : ',
        desc: 'Html, Css, React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: '',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Graphic identity design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Graphic identity design',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'DRAFF',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '',
      },
    ],
  },
];

