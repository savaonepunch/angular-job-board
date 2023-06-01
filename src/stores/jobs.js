import { defineStore } from "pinia";
import { ref } from "vue";

export const useJobsStore = defineStore('jobs', () => {
    const jobs = ref([
        {
            company: "Trooptravel",
            job_title: "Senior Front-End Engineer",
            job_description: `What is TROOP, and why should I care?
            
            It all starts with the question, “Where do we meet?”:
            
            https://www.youtube.com/watch?v=jhfigfihfig
            
            TROOP is a data aggregation and visualization technology that helps corporations identify the best meeting location in minutes using real-time data rather than opinions.
            
            Why TROOP?
            
            TROOP is on a mission to reinvent meeting planning, taking an inefficient, drawn-out, and laborious process today and making it simple and quick for anyone to organize a meeting. Workforces are now distributed and no longer office-based every day, meaning that yesterday's commuter has become tomorrow's business traveler. Having up-to-date data to decide whether to meet in person, virtually or in a hybrid format is a must-have for companies of any size; however, this has been available to access dynamically from a single source just now, the TROOP.
            
            As companies focus on their environmental commitments, they are turning to TROOP to help guide their teams as they aim to keep to carbon targets.
            
            The purpose of a meeting is more important than ever to understand, and when approving a meeting, the costs and time spent traveling are key data to inform this investment decision.
            
            Staff wellness is vital to optimizing performance in today's workforce. Understanding the impact on staff when planning a meeting by understanding the range of time zones people are attending and the time spent traveling to participate in the meeting allows for more thoughtful scheduling and choice of location. We have ambitious goals to be the leading solution in introducing an end-to-end experience, including booking, taking our data to where the conversation is being had, and much more.
            
            TROOP's Culture
            
            Our culture is built on an African philosophy called "Ubuntu," which means "I am because we are." It refers to an environment of interdependence, the state of being dependent upon one another - Trust. We call ourselves TROOPers, and we are people seeking adventure, challenging the status quo, enjoying innovating, and wanting to be part of something special. We are doers who roll up our sleeves and get into the details; we own the problem and only stop once it is solved.
            
            We are looking for Frontend Engineers that will form a crucial part of a growing yet exceptionally talented engineering team. Our engineers are based worldwide and are passionate about software engineering and problem-solving. You will be involved in the entire development lifecycle and take ownership of your deliverables. As a team, we regularly engage with Angular experts to ensure our tech environments are always leading edge.
            
            Requirements
            
            What we are looking for:
            Strong experience in front-end development
            Proven experience in primarily front-end programming: Angular 12, TypeScript, Angular router, Bootstrap, and GraphQL.
            Passion for building robust and scalable solutions
            5+ years of professional experience as a software developer
            Exceptional problem-solving skills
            A proven passion for all things software
            Strong ability to work independently while still being collaborative and inclusive
            Proven ability in taking a feature, task, or product all the way from conception to completion and release
            Ability to build re-usable solutions
            BSc Computer Science or equivalent is preferred
            
            Nice to have:
            Experience with multiple programming languages
            Experience working for tech-startups
            Experience mentoring other engineers
            
            Benefits
            
            At TROOP, you will enjoy the following:
            
            Fair pay based on qualifications, experience, and fit for the role.
            The ability to work from anywhere (WFA within our respective time zones)
            Being part of the initial team of a fast-growing technology company
            An incredible team and value-driven culture...See here: https://youtu.be/utfufuf
            Being part of a fast-growing technology company which is supported by top investors.`,
            job_location: {
                remote: true,
                countries: ['Italy', 'Greece'],
            },
            job_timezone: 'GMT+1 - GMT+4',
            job_permit: 'European Union',
            job_type: 'Full-time',
            job_level: 'Senior',
            job_date_posted: '5 hours ago'
        },
        {
            company: "InnovateTech",
            job_title: "Angular Developer Internship",
            job_description: `InnovateTech is a technology startup focused on developing innovative solutions for the healthcare industry. We are offering an exciting opportunity for an Angular Developer Intern to join our team and gain hands-on experience in building web applications.
          
          As an Angular Developer Intern, you will work closely with our development team, assisting in the design and implementation of user interfaces using Angular 12 and related technologies. This is a remote internship position, allowing you to work from anywhere within the GMT-8 to GMT+3 time zones.
          
          Joining our team will provide you with a unique opportunity to contribute to cutting-edge projects that have a direct impact on the healthcare sector. You will collaborate with experienced developers, learning best practices and gaining practical skills in front-end development.
          
          In this role, you will have the chance to work on various projects and participate in the full software development lifecycle. You will be responsible for translating design concepts into functional user interfaces, ensuring a seamless and intuitive user experience. Additionally, you will have the opportunity to contribute ideas and suggestions to improve the overall application architecture and performance.
          
          We value creativity, critical thinking, and a passion for problem-solving. As an intern, your input will be highly valued, and you will have the opportunity to make a real impact on the projects you work on. You will receive guidance and mentorship from experienced developers who are committed to your professional growth.
          
          Requirements:
          - Strong experience in front-end development
          - Proven experience in primarily front-end programming: Angular 12, TypeScript, Angular router, Bootstrap, and GraphQL.
          - Passion for building robust and scalable solutions
          - 5+ years of professional experience as a software developer
          - Exceptional problem-solving skills
          - A proven passion for all things software
          - Strong ability to work independently while still being collaborative and inclusive
          - Proven ability in taking a feature, task, or product all the way from conception to completion and release
          - Ability to build re-usable solutions
          - BSc Computer Science or equivalent is preferred
          
          Nice to have:
          - Experience with multiple programming languages
          - Experience working for tech-startups
          - Experience mentoring other engineers
          
          Benefits:
          - Fair pay based on qualifications, experience, and fit for the role.
          - The ability to work from anywhere (WFA within our respective time zones)
          - Being part of the initial team of a fast-growing technology company
          - An incredible team and value-driven culture...See here: https://youtu.be/utfufuf
          - Being part of a fast-growing technology company which is supported by top investors.`,

            job_location: {
                remote: true,
                countries: ["United States", "India"]
            },
            job_timezone: "GMT-8 - GMT+3",
            job_permit: "No work permit required",
            job_type: "Internship",
            job_level: "Entry-level",
            job_date_posted: "2 hours ago"
        },
        {
            company: "TechSolutions",
            job_title: "Angular Developer",
            job_description: `TechSolutions is a leading technology company specializing in software development and digital solutions. We are currently looking for an experienced Angular Developer to join our team.
          
            As an Angular Developer at TechSolutions, you will have the opportunity to work on cutting-edge web applications using Angular 12 and related technologies. You will collaborate with a talented team of developers, designers, and product managers to deliver high-quality solutions that meet our clients' needs.
          
            Key Responsibilities:
            - Designing and developing web applications using Angular 12, TypeScript, and Angular router.
            - Implementing responsive designs and ensuring cross-browser compatibility.
            - Integrating RESTful APIs and working with backend developers to deliver end-to-end solutions.
          
            Requirements:
            - Strong proficiency in Angular development with at least 3 years of professional experience.
            - Solid understanding of TypeScript, HTML, CSS, and JavaScript.
            - Experience with version control systems such as Git.
            - Knowledge of UI/UX principles and responsive design.
            - Excellent problem-solving and communication skills.
          
            If you are passionate about Angular and have a proven track record of building scalable and user-friendly web applications, we would love to hear from you. Join us at TechSolutions and be part of a dynamic team that is pushing the boundaries of web development.`,
          
            job_location: {
              remote: true,
              countries: ["US", "Germany", "India"]
            },
            job_timezone: "GMT-8 - GMT+3",
            job_permit: "No work permit required",
            job_type: "Internship",
            job_level: "Entry-level",
            job_date_posted: "2 hours ago"
          },
          {
            company: "TechCompass Solutions",
            job_title: "Senior Frontend Engineer",
            job_description: `TechCompass Solutions is a leading software development company that specializes in building innovative solutions for businesses worldwide. We are currently seeking a highly skilled Senior Frontend Engineer to join our talented team. As a Senior Frontend Engineer, you will play a key role in designing and developing user interfaces for our cutting-edge web applications.
          
              Responsibilities:
              - Collaborate with cross-functional teams to gather requirements and translate them into technical specifications.
              - Design and implement scalable and responsive user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular.
              - Optimize application performance and ensure a seamless user experience.
              - Conduct code reviews, provide feedback, and mentor junior developers.
              - Stay up-to-date with the latest frontend development trends and technologies.
          
              Requirements:
              - Bachelor's degree in Computer Science or a related field.
              - At least 5 years of experience in frontend development.
              - Strong proficiency in HTML, CSS, and JavaScript.
              - Experience with modern frontend frameworks like React, Angular, or Vue.js.
              - Knowledge of UI/UX best practices and responsive design principles.
              - Familiarity with version control systems like Git.
              - Excellent problem-solving and communication skills.
              - Ability to work effectively in a collaborative team environment.
          
              Benefits:
              - Competitive salary and comprehensive benefits package.
              - Opportunity to work on challenging and innovative projects.
              - Professional development and training opportunities.
              - Flexible work schedule and remote work options.
              - Dynamic and inclusive work environment.
          
              If you are passionate about frontend development and want to be part of a team that delivers cutting-edge solutions, apply now and join us at TechCompass Solutions.`,
              job_location: {
                remote: true,
                countries: ["US", "Germany", "India"]
              },
            job_type: "Full-time",
            job_level: "Senior",
            job_date_posted: "1 day ago"
          },
          {
            company: "SwiftTech",
            job_title: "Data Scientist",
            job_level: "Mid-level",
            job_description: `SwiftTech, a leading data analytics company, is seeking a talented Data Scientist to join our team. As a Data Scientist, you will work on exciting projects, analyzing large datasets and extracting valuable insights to drive business decisions.
          
              Responsibilities:
              - Collaborate with cross-functional teams to identify business problems and develop data-driven solutions.
              - Design and implement statistical models and machine learning algorithms.
              - Clean, preprocess, and analyze large datasets to derive meaningful insights.
              - Develop data visualizations and reports to communicate findings effectively.
              - Stay up-to-date with the latest advancements in data science and machine learning techniques.
              - Present findings and recommendations to stakeholders in a clear and concise manner.
          
              Requirements:
              - Master's or Ph.D. degree in a quantitative field (Computer Science, Statistics, Mathematics, etc.).
              - Proven experience in data analysis, statistical modeling, and machine learning.
              - Proficiency in programming languages such as Python or R.
              - Strong knowledge of data visualization tools and techniques.
              - Excellent problem-solving and analytical skills.
              - Effective communication and collaboration abilities.
          
              Benefits:
              - Competitive salary and performance-based bonuses.
              - Comprehensive health benefits package.
              - Professional development opportunities.
              - Flexible work arrangements.
              - Supportive and inclusive work culture.
          
              If you have a passion for data and want to make a significant impact with your analytical skills, apply now and join our dynamic team at SwiftTech.`,
            job_location: {
              remote: true,
              countries: ["US", "Germany", "Australia"]
            },
            job_type: "Full-time",
            job_date_posted: "1 day ago"
          },
          {
            company: "AngularMasters",
            job_title: "Senior Angular Developer",
            job_level: "Senior",
            job_description: `AngularMasters, a leading technology company specializing in Angular development, is seeking a highly skilled and experienced Senior Angular Developer to join our team. As a Senior Angular Developer, you will play a key role in designing and implementing complex web applications using Angular framework.
          
              Responsibilities:
              - Collaborate with cross-functional teams to understand project requirements and translate them into scalable Angular applications.
              - Develop high-quality, reusable, and testable code using best practices and design patterns.
              - Work closely with UI/UX designers to implement pixel-perfect user interfaces.
              - Conduct code reviews and provide constructive feedback to junior developers.
              - Optimize application performance and ensure scalability and security.
              - Stay up-to-date with the latest Angular trends, frameworks, and libraries.
              - Mentor and guide junior developers, fostering a culture of continuous learning and growth.
          
              Requirements:
              - Bachelor's or Master's degree in Computer Science or a related field.
              - Minimum 5 years of professional experience in Angular development.
              - Strong proficiency in TypeScript, HTML, CSS, and JavaScript.
              - Experience with Angular frameworks and libraries such as Angular Material and NgRx.
              - Solid understanding of software development principles and design patterns.
              - Familiarity with RESTful APIs and integration with backend systems.
              - Knowledge of version control systems (Git) and agile development methodologies.
              - Excellent problem-solving and debugging skills.
              - Strong communication and teamwork abilities.
          
              Benefits:
              - Competitive salary and comprehensive benefits package.
              - Flexible work hours and remote work options.
              - Opportunities for professional growth and skill development.
              - Collaborative and inclusive work environment.
              - Exciting projects and cutting-edge technologies.
          
              If you are a passionate Angular Developer with a strong track record of delivering high-quality applications, join our team at AngularMasters and be part of our innovative projects.`,
          
            job_location: {
              remote: false,
              countries: ["United States", "Canada"]
            },
            job_type: "Full-time",
            job_date_posted: "2 days ago"
          }
          
                
    ])

    return { jobs };
})