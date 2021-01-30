import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Martin\'s Portfolio',
  lang: '', 
  description: 'Welcome to my portfolio website', 
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Martin',
  subtitle: 'I am Junior Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'photo.jpg',
  paragraphOne: 'Fourth year university student, aiming for first class honours Computer Science degree ',
  paragraphTwo: 'Great team player, open minded and ambitious. I have a strong passion for learning new technologies and improving myself',
  paragraphThree: 'Excited about working in a dynamic environment along with people with strong passion and drive for development',
  resume: 'https://docs.google.com/uc?export=download&id=14vS97vGj6Hl9HSNRM9jdanWoGTjXDN7e', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'movie.jpg',
    title: 'The Movie Catalog',
    info: 'An app using The Movie Database\'s API to search and browse milions of movies, TV shows and celebrities.',
    info2: 'The app is made with React, Node, Material-UI and hooks. Simply type in the search box and hit Enter',
    url: 'https://move-catalog.netlify.app/',
    repo: 'https://github.com/maleex2/movie-catalog', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weatherr.jpg',
    title: 'What is The Weather',
    info: 'Webpage allowing you to check the weather in every city in the world',
    info2: 'The app is created using React, Node, npm, Material-UI, GSAP animations and the OpenWeatherMap\'s API',
    url: 'https://check-the-weather-now.netlify.app/',
    repo: 'https://github.com/maleex2/Weather-API', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chat.jpg',
    title: 'Realtime Chat',
    info: 'Chat with your friends realtime - quick and easy - No need of account - Just join a room with a nickname',
    info2: 'Made with React on the front end, with NodeJS + Socket.io web socket library on the back end',
    url: 'https://easy-chat.netlify.app',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cycle.jpg',
    title: 'Cyclist\'s Assist',
    info: 'A web application allowing users to track speed, distance and score which can be saved and compared on a leaderboard ',
    info2: 'Made with React on the front end, Firebase and NodeJS on the back end ',
    url: 'https://groupq-cs317-cycle-support-app.netlify.app/',
    repo: 'https://github.com/maleex2/Cycle', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'martin.aleksandrov.mga@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/martin-aleksandrov-322642195/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/maleex2',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
