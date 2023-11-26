import myImage from './images/about/Danny.png';
import aboutImage from './images/about/Danny2.png';
import jsIcon from './images/skills/js.png';
import htmlIcon from './images/skills/html.png';
import springIcon from './images/skills/spring.png';
import javaIcon from './images/skills/java.png';
import cssIcon from './images/skills/css.png';
import mongoDBIcon from './images/skills/mongo-db.png';
import graphQLIcon from './images/skills/graphQL.png';
import visualstudiocodeIcon from './images/skills/visualstudiocode.png';
import mySQLIcon from './images/skills/mysql.png';
import reactIcon from './images/skills/react.png';
import nodejsIcon from './images/skills/nodejs.png';
import intelliJIcon from './images/skills/IntelliJ.png';
import gitIcon from './images/skills/git.png';
import firebaseIcon from './images/skills/firebase.png';
import groovehubremixed from './images/projects/Groovehub-Remixed.png';
import plannedperf from './images/projects/Planned-Perfection.png';
import moviemania from './images/projects/Movie-Mania.png';
import travelnow from './images/projects/Travel-Now.png';
import mytube from './images/projects/MyTube.png';
import musicify from './images/projects/Musicify.png';


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
                    icon: javaIcon,
                    title: "Java",
                },
                {
                    icon: springIcon,
                    title: "Spring Boot",
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
                }
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
        {
            title: "Editors",
            items: [
                {
                    icon: visualstudiocodeIcon,
                    title: "Visual Studio Code",
                },
                {
                    icon: intelliJIcon,
                    title: "IntelliJ IDEA",
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
        img: musicify,
        description: "spotify esque music application that allows users to upload their own music and browse music libraries",
        link: "https://musicify-175f0766b215.herokuapp.com/",
        githubLink: "https://github.com/Dannymak1993/Musicify-v2",
        tags: ["Next.js", "React.js", "Supabase/PostgreSQL", "Stripe", "Tailwind CSS"]
    },
    {
        img: mytube,
        description: "Youtube clone built in React",
        link: "https://dannymak1993.github.io/MyTube/",
        githubLink: "https://github.com/Dannymak1993/MyTube",
        tags: ["React", "JSX", "Material CSS", "Rapid API"]
    },
    {
        img: plannedperf,
        description: "Date planner application that allows the user to generate an itinerary using entered parameters",
        link: "https://date-itinerary.herokuapp.com/",
        githubLink: "https://github.com/willrcline/date-itinerary",
        tags: ["Javascript", "Foundation CSS", "APIs"]
    },
    {
        img: plannedperf,
        description: "Date planner application that allows the user to generate an itinerary using entered parameters",
        link: "https://date-itinerary.herokuapp.com/",
        githubLink: "https://github.com/willrcline/date-itinerary",
        tags: ["Javascript", "Foundation CSS", "APIs"]
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