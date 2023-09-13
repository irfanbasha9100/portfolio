import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/irfanbasha9100',
    title: 'Ecommerce Project',
    text: 'An ECommerce project using React and Redux is a robust and feature-rich web application designed to facilitate online buying and selling',
  },
  {
    id: nanoid(),
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQutWqQeAWCr0IfFSM8YN-F4ibUNdYfD69g&usqp=CAU',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/irfanbasha9100',
    title: 'Youtube Clone',
    text: 'A YouTube project using React involves building a web application that replicates some of the key features and functionalities of the popular video-sharing platform.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/irfanbasha9100',
    title: 'To-do App',
    text: 'A To-Do project using React is a simple yet practical web application designed to help users organize and manage their tasks and daily responsibilities',
  },
];
