import myImage from './images/about/Danny.png';
import aboutImage from './images/about/Danny2.png';
import jsIcon from './images/skills/js.png';
import htmlIcon from './images/skills/html.png';
import cssIcon from './images/skills/css.png';
import mongoDBIcon from './images/skills/mongo-db.png';
import graphQLIcon from './images/skills/graphQL.png';
import mySQLIcon from './images/skills/mysql.png';
import reactIcon from './images/skills/react.png';
import nodejsIcon from './images/skills/nodejs.png';
import gitIcon from './images/skills/git.png';
import firebaseIcon from './images/skills/firebase.png';
import groovehubremixed from './images/projects/Groovehub-Remixed.png';
import groovehub from './images/projects/Groovehub.png';
import plannedperf from './images/projects/Planned-Perfection.png';
import techblog from './images/projects/Tech-Blog.png';
import texteditor from './images/projects/Text-Editor.png';
import expressnotes from './images/projects/Express-Notes.png';
import weatherapp from './images/projects/Weather-App.png';
import calendar from './images/projects/Calendar.png';
import quiz from './images/projects/Quiz.png';
import passwordgenerator from './images/projects/Password-Generator.png';
import calculator from './images/projects/Calculator.png';
import moviemania from './images/projects/Movie-Mania.png';
import todolist from './images/projects/To-Do-List.png';
import travelnow from './images/projects/Travel-Now.png';
import contactlist from './images/projects/Contact-List.png';
import mytube from './images/projects/MyTube.png';


const logotext = "Danny Mak";
const meta = {
    title: "Danny Mak"
};

const introdata = {
    title: "My name is Danny Mak",
    animated: {
        first: "Tech Enthusiast",
        second: "Rock Climber",
        third: "Foodie",
        fourth: "Adventure Seeker",
    },
    description: "I am a full stack developer based out of Dallas, Texas. I'm passionate about the bleeding edge of technology and incorporating them into my applications. I specialize in the MERN stack.",
    your_img_url: myImage,
};

const dataabout = {
    title: "Here's a bit more about me...",
    aboutme: "I'm Danny Mak, a former pre-medical student turned developer. I hold a bachelor of science degree in Biology from University of Texas at Dallas and a master's degree in Bioscience from Kansas City University, but my most recent passion has been in software development! I love learning how things work and using my imagination to develop and improve apps that I myself would use. In my free time, I enjoy traveling around the world and discovering new types of food. I also love the sport of rock climbing. Join me on my journey through the life of a software engineer.",
    aboutimg: aboutImage,
};

const skillsData = {
    intro:
        "As a developer, I love to learn new things and experiment with new technologies.\nThese are some of the major languages, technologies, tools, and platforms I have worked with:",
    skills: [
        {
            title: "Languages & Databases",
            items: [
                {
                    icon: jsIcon,
                    title: "JavaScript",
                },
                {
                    icon: htmlIcon,
                    title: "HTML 5",
                },
                {
                    icon: cssIcon,
                    title: "CSS",
                },
                {
                    icon: mongoDBIcon,
                    title: "Mongo DB",
                },
                {
                    icon: graphQLIcon,
                    title: "GraphQL",
                },
                {
                    icon: mySQLIcon,
                    title: "MySQL",
                },
            ],
        },
        {
            title: "Frameworks & Technologies",
            items: [
                {
                    icon: reactIcon,
                    title: "React",
                },
                {
                    icon: nodejsIcon,
                    title: "Nodejs",
                },
            ],
        },
        {
            title: "Tools & Platforms",
            items: [
                {
                    icon: gitIcon,
                    title: "Git",
                },
                {
                    icon: firebaseIcon,
                    title: "Firebase",
                },
            ],
        },
    ],
};


const dataportfolio = [
    {
        img: groovehubremixed,
        description: "Revamped music application with new features including playlist import and community tab components",
        link: "https://groovehub-remixed-2f12da1632a2.herokuapp.com/",
        githubLink: "https://github.com/Dannymak1993/Groovehub-Remixed",
        tags: ["React", "GraphQL/Apollo", "Spotify API", "Google Firebase", "MongoDB/Mongoose"]
    },
    {
        img: groovehub,
        description: "Music application allowing users to listen to music genres while chatting with others",
        link: "https://groovehub-2023.herokuapp.com/",
        githubLink: "https://github.com/Dannymak1993/Groovehub",
        tags: ["Handlebars", "Express", "MySQL/Sequelize", "Google Firebase", "Foundation CSS"]
    },
    {
        img: plannedperf,
        description: "Date planner application that allows the user to generate an itinerary using entered parameters",
        link: "https://date-itinerary.herokuapp.com/",
        githubLink: "https://github.com/willrcline/date-itinerary",
        tags: ["Javascript", "Foundation CSS", "APIs"]
    },
    {
        img: mytube,
        description: "Youtube clone built in React",
        link: "https://dannymak1993.github.io/MyTube/",
        githubLink: "https://github.com/Dannymak1993/MyTube",
        tags: ["React", "JSX", "Material CSS", "Rapid API"]
    },
    {
        img: travelnow,
        description: "Travel application to plan out your destinations",
        link: "https://dannymak1993.github.io/Travel-Now/",
        githubLink: "https://github.com/Dannymak1993/Travel-Now",
        tags: ["React", "Javascript", "JSX", "CSS"]
    },
    {
        img: moviemania,
        description: "Simple movie searching application",
        link: "https://dannymak1993.github.io/Movie-Mania/",
        githubLink: "https://github.com/Dannymak1993/Movie-Mania",
        tags: ["React", "Javascript", "CSS", "APIs"]
    },
    {
        img: contactlist,
        description: "An application that functions as an address book for your contacts",
        link: "https://dannymak1993.github.io/Contact-List/",
        githubLink: "https://github.com/Dannymak1993/Contact-List",
        tags: ["React", "JSX", "CSS"]
    },
    {
        img: calculator,
        description: "A simple calculator app",
        link: "https://dannymak1993.github.io/Calculator/",
        githubLink: "https://github.com/Dannymak1993/Calculator",
        tags: ["React", "Javascript", "CSS"]
    },
    {
        img: todolist,
        description: "A to do list application",
        link: "https://dannymak1993.github.io/To-Do-List/",
        githubLink: "https://github.com/Dannymak1993/To-Do-List",
        tags: ["React", "JSX", "CSS"]
    },
    {
        img: techblog,
        description: "Basic tech blog that allows you to post/reply/comment",
        link: "https://blog-but-techy.herokuapp.com/",
        githubLink: "https://github.com/Dannymak1993/Blog-But-Techy",
        tags: ["Handlebars", "Bcrpyt", "MySQL", "Sequelize", "Express", "Javascript"]
    },
    {
        img: texteditor,
        description: "Text editor application with offline functionality",
        link: "https://creative-text-editor-name.herokuapp.com/",
        githubLink: "https://github.com/Dannymak1993/Creative-Text-Editor-Name",
        tags: ["Webpack", "Express", "Manifest", "Babel", "Javascript"]
    },
    {
        img: calendar,
        description: "Easy to use calendar app that allows you to manage day to day activities",
        link: "https://dannymak1993.github.io/Organizing-Your-Life/",
        githubLink: "https://github.com/Dannymak1993/Organizing-Your-Life",
        tags: ["JQuery", "DayJS", "Javascript", "CSS"]
    },
];

const contactConfig = {
    YOUR_EMAIL: "Danny.mak2@gmail.com",
    YOUR_FONE: "(214)-499-4903",
    description: "If you have any questions or concerns please don't hesitate to reach out!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_mus1xis",
    YOUR_TEMPLATE_ID: "template_v39b6qq",
    YOUR_USER_ID: "fgmq5RHYsPCddraQY",
};

const socialprofils = {
    instagram: "https://www.instagram.com/dannyrocksit/",
    github: "https://github.com/Dannymak1993",
    facebook: "https://www.facebook.com/DannyMak1993",
    linkedin: "https://www.linkedin.com/in/danny-mak/"
};
export {
    meta,
    dataabout,
    dataportfolio,
    skillsData,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};