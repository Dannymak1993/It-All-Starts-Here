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
import groovehubremixed from './images/projects/Groovehub-Remixed.png';
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
        first: "Tech Nerd",
        second: "Rock Climber",
        third: "Foodie"
    },
    description: "I am a full stack developer based out of Dallas, Texas. I'm passionate about the bleeding edge of technology and incorporating them into my applications. I specialize in the MERN stack.",
    your_img_url: myImage,
};

const dataabout = {
    title: "Here's a bit more about me...",
    aboutme: "I'm Danny Mak, a former pre-medical student turned developer. I hold a bachelor of science degree in Biology from University of Texas at Dallas and a master's degree in Bioscience from Kansas City University, but my most recent passion has been in software development! I love learning how things work and using my imagination to develop and improve apps that I myself would use. In my free time, I enjoy traveling around the world and discovering new types of food. I also love the sport of rock climbing. Join me on my journey through the life of a software engineer.",
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
    description: "Revamped music application with new features including playlist import and community tab",
    link: "https://groovehub-remixed-2f12da1632a2.herokuapp.com/",
    tags: ["React", "GraphQL/Apollo", "Spotify API", "Google Firebase", "MongoDB/Mongoose", "React-Foundation/Material UI"]
},
{
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