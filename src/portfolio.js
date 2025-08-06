/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// ✅ Import your image (place it in: ./assets/images/nouria-profile.png)
import profileImage from "./assets/images/profile.png";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nouria Bellamri",
  title: "Hi, I'm Nouria 👋",
  subTitle: emoji(
    "Master’s student in ICT | Data Analytics | Python • SQL • Power BI • ML. Passionate about turning data into real-world insights."
  ),
  resumeLink: "", // Optional: Google Drive PDF link
  displayGreeting: true,
  
  // ✅ Add this field
  profilePicture: profileImage
};




// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Nouria99",
  linkedin: "https://www.linkedin.com/in/nouria-bellamri-a69a36303/",
  gmail: "bellamri.nouria99@gmail.com",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "DATA ANALYTICS ENTHUSIAST WITH A PASSION FOR TURNING RAW DATA INTO ACTIONABLE INSIGHTS",
  skills: [
    emoji(
      "📊 Design and build insightful dashboards using Power BI for business reporting"
    ),
    emoji(
      "🧠 Perform data cleaning, transformation, and analysis using Python and Pandas"
    ),
    emoji(
      "🗄️ Write efficient SQL queries for data extraction and manipulation"
    ),
    emoji(
      "☁️ Work with NoSQL databases like MongoDB for flexible data modelling"
    ),
    emoji(
      "🧪 Build and test ML models for prediction and classification (Scikit-learn)"
    )
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-leaf"
    },
     {
    skillName: "Excel",
    fontAwesomeClassname: "fas fa-file-excel"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
     {
      skillName: "Scikit-learn",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Matplotlib",
      fontAwesomeClassname: "fas fa-chart-line"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of the Sunshine Coast",
      logo: require("./assets/images/UniSC.png"),
      subHeader: "Master of Information and Communication Technology",
      duration: "Feb 2024 – Oct 2025",
       desc: "Specialising in data analytics, machine learning, and cyber security with hands-on project experience.",
      descBullets: [
        "Developed projects in regression modeling, Power BI, MongoDB, and Python",
        "Created visual dashboards and applied machine learning to real-world datasets"
      ]
    },
    {
      schoolName: "M’HAMED BOUGARA University of Boumerdes, Algeria",
      logo: require("./assets/images/Boumerdes.png"),
      subHeader: "Master & Bachelor in Automation of Industrial Processes",
      duration: "September 2016 - May 2021",
      desc: "Focused on automation, instrumentation, and control systems in industrial environments.",
      descBullets: [
        "Completed two technical internships with Sonatrach in production and instrumentation departments",
        "Worked with PLC-based control systems for automation, calibration, and process optimisation"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Data Analysis (Python, Pandas, Excel)",
      progressPercentage: "90%"
    },
    {
      Stack: "Data Visualization (Power BI, Matplotlib)",
      progressPercentage: "85%"
    },
    {
      Stack: "Databases (SQL, MongoDB)",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Private Mathematics Tutor",
      company: "Self-Employed",
      companylogo: require("./assets/images/tutor.png"), // You can use any suitable icon
      date: "Jan 2022 – Oct 2023",
      desc: "Tutored high school students in mathematics, helping them improve problem-solving skills and academic performance.",
      descBullets: [
        "Designed personalised lesson plans based on curriculum and student needs",
        "Helped students build strong foundations in algebra, calculus, and statistics"
      ]
    },
    {
      role: "Intern – Instrumentation Services",
      company: "Sonatrach, Algeria",
      companylogo: require("./assets/images/sonatrach.png"),
      date: "May – Jun 2021",
      desc: "Supported calibration, maintenance, and testing of industrial instruments in oil and gas operations.",
      descBullets: [
        "Worked with pressure, temperature, and flow instruments in the field",
        "Assisted technicians with troubleshooting and preventative maintenance"
      ],
      color: "#f5a623" 
    },
    {
      role: "Intern – Production Department",
      company: "Sonatrach, Algeria",
      companylogo: require("./assets/images/sonatrach.png"),
      date: "Jan – Feb 2019",
      desc: "Gained hands-on experience in plant operations and process monitoring in an oil production unit.",
      descBullets: [
        "Observed production workflows and control systems",
        "Learned safety procedures and operational standards in industrial environments"
      ], 
      color: "#f5a623" 
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "ACADEMIC AND PERSONAL PROJECTS SHOWCASING MY DATA ANALYTICS SKILLS",
  projects: [
    {
      image: require("./assets/images/machine.png"),
      projectName: "Electricity Consumption Prediction",
      projectDesc: "Regression modeling in Python using Pandas and Scikit-learn to forecast monthly electricity usage based on multiple features.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Nouria99/electricity-consumption-prediction"
      
        }
      ]
    },
    {
      image: require("./assets/images/power.png"),
      projectName: "Sales Dashboard (Power BI)",
      projectDesc: "Interactive Power BI dashboard for sales performance insights, customer segmentation, and regional analysis.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Nouria99/sales-dashboard-PowerBI"
        }
      ]
    },
    {
      image: require("./assets/images/mangodb.png"),
      projectName: "Gamification Leaderboard System",
      projectDesc: "MongoDB-based system to track learners' progress, challenges, and leaderboard rankings using NoSQL and aggregation queries.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Nouria99/Gamification-Leaderboard-System-"
        }
      
      ]
    },
    {
      image: require("./assets/images/pyth.png"),
      projectName: "Expense Tracker System",
      projectDesc: "A Python-based system for managing personal budgets and expenses, featuring user login, real-time budget alerts, and reporting. Includes functions to add, edit, delete expenses, and unit testing support.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Nouria99/expense-tracker-python"
        }
      ]
    },
    {
      image: require("./assets/images/visualisation.png"),
      projectName: "HR Analytics Dashboard",
      projectDesc: "An Excel dashboard designed to analyze employee distribution, salaries, bonuses, and hiring trends by department, gender, ethnicity, and location. Includes interactive slicers and charts for HR decision-making.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Nouria99/-HR-Analytics-Dashboard"
        }
      ]
    }
  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Professional certifications and recognitions in technology and career development.",

  achievementsCards: [
    {
      title: "Microsoft Certified: Power Platform Fundamentals",
      subtitle:
        "Covered Power BI, Power Apps, and Power Automate. Certified in Aug 2024.",
      image: require("./assets/images/powerBI.png"),
      imageAlt: "Power Platform",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.credly.com/badges/a703ef69-9f8b-436b-a5ec-0c4cd593f192/public_url"
       
        }
      ]
    },
    {
      title: "Microsoft Certified: Azure Data Fundamentals",
      subtitle:
        "Core knowledge of database, cloud, and analytics services in Azure. Certified 2025.",
      image: require("./assets/images/azure-data-fundamentals.png"),
      imageAlt: "Azure Data Fundamentals",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.credly.com/badges/413a8a8c-b5f6-4fd4-a420-78d3a5adbacb/public_url"
        }
      ]
    },

    {
      title: "IT Specialist - Python",
      subtitle:"Validated core Python skills including functions, data structures, and scripting.",

      image: require("./assets/images/python.png"),
      imageAlt: "IT Specialist - Python",
      footerLink: [
        
        {
          name: "view certificate",
          url: "https://www.credly.com/badges/d46ff0bf-464b-462c-b895-a8dea1ad7f6e/public_url"
        }
      ]
    },
    
    {
  title: "Microsoft Certified: Security, Compliance & Identity Fundamentals",
  subtitle: "Demonstrated foundational knowledge in cloud security, compliance, identity access, and Microsoft 365 services. Issued March 2024.",
  image: require("./assets/images/security.png"), 
  imageAlt: "Security Compliance Badge",
  footerLink: [
    {
      name: "View Certificate",
      url: "https://www.credly.com/badges/6300b47c-f5e4-484d-9b05-8a2a010a3c53/public_url" 
    }
  ]
},
{
  title: "Microsoft Certified: Azure AI Fundamentals",
  subtitle: "Demonstrated foundational understanding of artificial intelligence and machine learning concepts using Microsoft Azure services. Issued March 2025.",
  image: require("./assets/images/AI.png"), 
  imageAlt: "Azure AI Fundamentals",
  footerLink: [
    {
      name: "View Certificate",
      url: "https://www.credly.com/badges/d8b04419-0464-4364-aad0-38a4be4b7fc9/public_url" 
    }
  ]
},
{
  title: "Cisco MentorMe Graduate",
  subtitle: "Completed the MentorMe career development program with Cisco, focusing on professional growth, networking, and job readiness. Issued 2024.",
  image: require("./assets/images/cisco.png"), 
  imageAlt: "Cisco MentorMe Program",
  footerLink: [
    {
      name: "View Certificate",
      url: "https://drive.google.com/file/d/1qafPNP2EmgMP8hGUCGhtG_lt816ozwS3/view?usp=drive_linkhttps://drive.google.com/file/d/1uCQTF7NQHSPxkMja3eAIEiDUtz6x1lC-/view?usp=sharing" 
    }
  ]
}

  ],
  
  display: true // Set false to hide this section, defaults to true
};


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  link: "https://github.com/Nouria99/developerFolio/blob/master/Resume.pdf", 
  display: true
};


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Actively seeking data-related roles and networking with professionals in tech. Let's start a conversation!",
  number: "+61 494 040 492",
  email_address: "bellamri.nouria99@gmail.com"
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

