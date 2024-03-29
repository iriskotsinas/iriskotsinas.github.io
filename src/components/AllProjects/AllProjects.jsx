import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Project from '../Project';

const AllProjects = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const items = [
    {
      title: 'Summer Internship at Upsales Nordic',
      description:
        'Project in the course TNM108 Machine Learning for Social Media. We created a program to classify christmas songs. We used the Spotify Web API and Spotipy to collect playlist data. The test and training data consisted of christmas songs and songs of different genres. Three different machine learning models were used and compared, Decision Tree Classifier, K-Nearest Neighbor Classifier and Random Forest Classifier. We used the Spotify Web API and Spotipy. The project was implemented in Python.',
      image: 'upsales.jpeg',
      slug: '/upsales',
      report: '',
      sourcecode: '',
    },
    {
      title: 'Modelling and Animation',
      description:
        'Project in the course TNM108 Machine Learning for Social Media. We created a program to classify christmas songs. We used the Spotify Web API and Spotipy to collect playlist data. The test and training data consisted of christmas songs and songs of different genres. Three different machine learning models were used and compared, Decision Tree Classifier, K-Nearest Neighbor Classifier and Random Forest Classifier. We used the Spotify Web API and Spotipy. The project was implemented in Python.',
      image: 'fluid1a.png',
      slug: '/modelling-animation',
      report: '',
      sourcecode: '',
    },
    {
      title: 'Cleanpipe website - We Know IT',
      description:
        "As a software engineer at the student run IT-consultancy firm I developed Cleanpipe's new website, which will soon be launched.",
      image: 'cleanpipe.png',
      slug: '/cleanpipe',
      report: '',
      sourcecode: '',
    },
    {
      title: 'Domesday - B.Sc. project Linköping University',
      description:
        'The project, created spring 2020, resulted in a multiplayer game for 50 to 100 players where each player connects to the game through a mobile phone device. Each character is a diver whos mission is to gather plastics in an ocean where the environment is designed to best grasp the format of the dome screen. The game was developed using C++ and OpenGL, and communication was handled with node.js and websockets. The internal projection in the dome theater was handled by the tool SGCT that was provided by Linköping University. The game was designed as entertainment before the actual dome screen showing at Visualiseringscenter C in Norrköping.',
      image: 'diver2.png',
      image2: 'domen.jpg',
      slug: '/domesday',
      report: '',
      sourcecode: '',
    },
    {
      title: 'Boids - Simulation of animal flocking behaviour',
      description:
        'The project, created spring 2020 in the course TNM085 Modeling Project, is a simulation of animal flocking behaviour, also known as Boids. The simulation was first implemented in MATLAB, and thereafter in JavaScript with three.js.',
      image: 'boids-simulation2.png',
      image2: 'boids-sim.png',
      slug: '/boids',
      report: '',
      sourcecode: '',
    },
    {
      title: 'Global Illumination and Rendering project',
      description:
        'In the course TNCG15 - Advanced Global Illumination and Rendering, fall 2020, we created a renderer in C++. The renderer is a Monte Carlo ray tracer and can handle diffuse and specular objects. Two of the objects have Lambertian reflectors which absorbs the light, and the third object has a perfect reflector that reflects all rays hitting the object. The course also discussed caustics and other rendering methods.',
      image: 'GI-project.png',
      slug: '/global-illumination',
      report: '',
      sourcecode: '',
    },
    {
      title: 'Summer internship at Axis Communications',
      description:
        'Summer 2020, I worked as a software engineer intern at Axis Communications and got the opportunity to develop a new software for Axis surveillance cameras. I worked with both back end and front end development, mainly in TypeScript. I got a chance to design a full scale system, write tests for the application as well as design a user interface from scratch. It was an exciting learning experience and made me more eager to pursue my interest for software development. The software was implemented using TypeScript, Next.js, mongoose, Docker, Jest, CircleCI and more.',
      image: 'axis.jpg',
      slug: '/axis',
      report: '',
      sourcecode: '',
    },
    {
      title: 'Machine Learning for Social Media project',
      description:
        'Project in the course TNM108 Machine Learning for Social Media. We created a program to classify christmas songs. We used the Spotify Web API and Spotipy to collect playlist data. The test and training data consisted of christmas songs and songs of different genres. Three different machine learning models were used and compared, Decision Tree Classifier, K-Nearest Neighbor Classifier and Random Forest Classifier. We used the Spotify Web API and Spotipy. The project was implemented in Python.',
      image: 'spotify.png',
      slug: '/spotify-project',
      report: '',
      sourcecode: '',
    },
    {
      title: 'Game of Kåken - 3D Computer Graphics',
      description:
        'Game of Kåken was a group project in the course TNM061 - 3D Computer Graphics, created spring 2019. We made a Game of Thrones inspired intro, depicting the building Kåkenhus at Campus Norrköping emerging from the ground. ground. The blueprints of the building was used to create a scalable model. 3D-modelling was created in 3DsMax.',
      image: 'kaken1.jpg',
      image2: 'kaken2.jpg',
      slug: '/kaken',
      report: '',
      sourcecode: '',
    },
    {
      title: 'Information Visualization project',
      description:
        'Project in the course TNM108 Machine Learning for Social Media. We created a program to classify christmas songs. We used the Spotify Web API and Spotipy to collect playlist data. The test and training data consisted of christmas songs and songs of different genres. Three different machine learning models were used and compared, Decision Tree Classifier, K-Nearest Neighbor Classifier and Random Forest Classifier. We used the Spotify Web API and Spotipy. The project was implemented in Python.',
      image: 'infovis2.png',
      slug: '/infovis',
      report: '',
      sourcecode: '',
    },
    {
      title: 'Structural Methods for User Experience (UX)',
      description:
        'Project in the course TNM108 Machine Learning for Social Media. We created a program to classify christmas songs. We used the Spotify Web API and Spotipy to collect playlist data. The test and training data consisted of christmas songs and songs of different genres. Three different machine learning models were used and compared, Decision Tree Classifier, K-Nearest Neighbor Classifier and Random Forest Classifier. We used the Spotify Web API and Spotipy. The project was implemented in Python.',
      image: 'bla_prick2.png',
      slug: '/ux-project',
      report: '',
      sourcecode: '',
    },
    {
      title: 'Interaction Programming',
      image: 'creditcard.png',
      slug: '/interaction-programming',
      report: '',
      sourcecode: '',
    },
    {
      title: 'Diatot - Communication and User Interfaces',
      description:
        'Group project in the course TNM040 - Communication and User Interfaces created fall 2018. A mobile phone adapted website for diabetics to record the blood sugar and carbohydrate intake to calculate a bolus dose of insulin. Implemented in JavaScript and React.',
      image: 'diatotfull.png',
      slug: '/diatot',
      report: '',
      sourcecode: '',
    },
  ];

  return (
    <section>
      <Fade left={isDesktop} bottom={isMobile} duration={500} delay={250} distance="30px">
        <h2 className="section-title" id="portfolio">
          Portfolio
        </h2>
        <p id="sub">
          A selection of my work can be found below. Press the items to find out more about each
          project.
        </p>
      </Fade>
      <div className="projectItems">
        {items.map((item) => (
          <Project key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
