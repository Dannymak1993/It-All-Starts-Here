import myImage from './images/about/Danny.png';
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
import groovehub from './images/projects/Groovehub.png';
import plannedperf from './images/projects/Planned-Perfection.png';
import weatherapp from './images/projects/Weather-App.png';

const logotext = "Danny Mak";
const meta = {
    title: "Danny Mak"
};

const introdata = {
    title: "My name is Danny Mak",
    animated: {
        first: "I love learning new tech",
        second: "I make cool applications"
    },
    description: "I am full stack developer versed in the MERN stack.",
    your_img_url: myImage,
};

const dataabout = {
    title: "About Me",
    aboutme: "I'm Danny Mak, a former pre-medical student turned developer. I hold a bachelor of science degree in biology and a master's degree in bioscience, but my most recent passion has been in software development! I love learning how things work and using my imagination to develop and improve apps that I myself would use. In my free time, I enjoy traveling around the world and discovering new types of food. I also love the sport of rock climbing. Join me on my journey through the life of a software engineer.",
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


const dataportfolio = [{
    img: groovehub,
    description: "Music application allowing users to listen to music genres while chatting with others",
    link: "https://groovehub-2023.herokuapp.com/",
    tags: ["Handlebars", "JavaScript", "Google Firebase"]
},
{
    img: plannedperf,
    description: "Date planner application that allows the user to generate an itinerary using entered parameters",
    link: "https://date-itinerary.herokuapp.com/",
    tags: ["Javascript", "Foundation CSS", "APIs"]
},
{
    img: weatherapp,
    description: "Simple weather app to help research current and future weather forecasts for any location",
    link: "https://dannymak1993.github.io/Whats-the-weather-like-in-BLANK/",
    tags: ["Javascript", "CSS", "APIs"]
},
];

const contactConfig = {
    YOUR_EMAIL: "Danny.mak2@gmail.com",
    YOUR_FONE: "(214)-499-4903",
    description: "If you have any questions or concerns please don't hesitate to reach out!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Dannymak1993",
    facebook: "https://www.facebook.com/DannyMak1993",
    linkedin: "https://www.linkedin.com/in/danny-mak-53b6b9102/"
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