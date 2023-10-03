import {
    rick_vue,
    password_django,
    am,
    karun,
    benvida,
    suelo,
    pharol,
    backend_ecommerce,
    prompt,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mui,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    next,
    django,
    python,
    linux,
    bootstrap,
    sql,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    }
  ];
  
  const technologies = [
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Next JS",
      icon: next,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name:"MUI",
      icon: mui,
    },
   
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "Linux",
      icon: linux,
    },
    {
      name: "Python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "AM University Classes",
      icon: 'https://fabomarche.github.io/am/assets/img/Logo%20AM%20con%20LEYENDA.png',
      iconBg: "#E6DEDD",
      iconSize:"14",
      date: "Dec 2021 - Jan 2022",
      points: [
        "I worked as a freelancer where I was part of the web development team.",
        "I was responsible for developing the front-end of the website using HTML, CSS, and Vanilla JavaScript.",
      ],
    },
    {
      title: "React Developer",
      company_name: "Techo NGO",
      icon: "https://actividades.techo.org/img/techo_logo_big.png",
      iconBg: "#E6DEDD",
      iconSize:"12",
      date: "Jan 2022 - Mar 2022",
      points: [
        "Member of the extensive React development team for an internal management platform within this NGO dedicated to addressing housing issues throughout Latin America.",
      ],
    },
    {
      title: "React Tutor",
      company_name: "Coder House",
      icon: "https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png",
      iconBg: "#000",
      iconSize:"10",
      date: "Jul 2022 - Sept 2022",
      points: [
        "I participated as a member of the student support team in React.js course classes.",
        "Receiving excellent feedback from the students I assisted in their learning process.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "JulaSoft",
      icon: "https://media.licdn.com/dms/image/C4D0BAQEIk041sn7dlg/company-logo_200_200/0/1652200558639?e=2147483647&v=beta&t=J8FIydRWSc_K8qxpYzHPcvC5wyRhuVVhayQ4iaTrbuE",
      iconBg: "#fff",
      iconSize:"12",
      date: "Mar 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "SQL database administration for the AlertaTel project, a citizen security platform.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Development of microservices using Node.js Express for the activation of license plate reader alerts within the AlertaTel platform."
      ],
    },
    {
      title: "React Developer",
      company_name: "Pharol",
      icon: "https://storage.googleapis.com/pharol-images-prod/logo_page/250x81/cf69bdb40e3b73d5b21870a9e1b8481d-1642024890075.png",
      iconBg: "#E6DEDD",
      iconSize:"14",
      date: "Mar 2023 - Present",
      points: [
        "Front-end adaptation for Benvida, the Argentine version of Pharol.",
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Fabricio is an excellent professional, always providing solutions, resolving requirements within the established deadlines, and applying good practices for scalable developments over time. Proactive and resourceful.",
      name: "Laura Nazareth Espósito",
      designation: "UX UI Designer / Industrial Designer",
      company: "Pharol",
      image: "https://media.licdn.com/dms/image/D4D03AQHGDapZmHhbVA/profile-displayphoto-shrink_200_200/0/1630811130188?e=1701907200&v=beta&t=trelQgDpZaiWPUdJa_r72UoVdKbySJ57KrtKEN42QU8",
    }
  
  ];
  
  const projects = [
    {
      name: "Pharol",
      description:
        "A Pharmaceutical Marketplace with a focus on the patient, connecting their needs with the offerings of legally established and recognized pharmacies.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "sass",
          color: "pink-text-gradient",
        },
      ],
      image: pharol,
      web_link: "https://www.pharol.cl/",
      source_code_link: false,
    },
    {
      name: "Ecommerce Backend",
      description:
        "Node.js project encompassing the entire backend logic of an e-commerce platform. This project features user authentication, messaging via Twilio and Nodemailer, database management with MongoDB, sockets and more.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: backend_ecommerce,
      web_link: false,
      source_code_link: "https://github.com/Fabomarche/ecommerce_backend",
    },
    {
      name: "Promp4all",
      description:
        "Next.js 13 project: An open-source AI prompting tool for modern world to discover, create and share creative prompts.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: prompt,
      web_link: "https://prompt4all.vercel.app/",
      source_code_link: "https://github.com/Fabomarche/prompt4all",
    },
    {
      name: "Suelo",
      description:
        "Simulated E-commerce Project for a dietary store. I have developed this project using react-router-dom for route management and Firebase Firestore to handle both product data and user login and registration systems.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "firestore",
          color: "pink-text-gradient",
        },
      ],
      image: suelo,
      web_link: "https://prompt4all.vercel.app/",
      source_code_link: "https://github.com/Fabomarche/prompt4all",
    },
    {
      name: "Benvida",
      description:
        "Integral well-being promoter marketplace, 100% digital, bringing together your trusted pharmacies in one place, making it easier to purchase your health and beauty products and services quickly, safely, and with guaranteed stock.",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "mongodb",
            color: "green-text-gradient",
          },
          {
            name: "sass",
            color: "pink-text-gradient",
          },
        ],
      image: benvida,
      web_link: "https://benvida.com.ar/",
      source_code_link: false,
    },
    {
      name: "Karun",
      description:
        "Responsive Web Platform for the management and traceability of the supply chain. From the origin of the raw materials, through each link in the ecosystem of Karun's collaborating partners and suppliers, to the final product. ",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "api_django",
            color: "green-text-gradient",
          },
          {
            name: "react_map_gl",
            color: "pink-text-gradient",
          },
        ],
      image: karun,
      web_link: "https://trace.karuneyewear.com/",
      source_code_link: false,
    },
    {
      name: "AM University Classes",
      description:
        "Freelance project: website for advanced students of different majors, so we understand the challenges you face when studying. We offer a trusting environment for you to ask your questions without fear. We create our own material and monitor the tasks we assign to you.",
        tags: [
          {
            name: "JS_Vanilla",
            color: "blue-text-gradient",
          },
          {
            name: "css",
            color: "green-text-gradient",
          },
          {
            name: "html",
            color: "pink-text-gradient",
          },
        ],
      image: am,
      web_link: "https://fabomarche.github.io/am/",
      source_code_link: "https://github.com/Fabomarche/am",
    },
    {
      name: "Password Generator",
      description:
        "Personal project for developing a password generator using Django and Python libraries.",
        tags: [
          {
            name: "django",
            color: "blue-text-gradient",
          },
          {
            name: "bootstrap",
            color: "green-text-gradient",
          }
        ],
      image: password_django,
      web_link: false,
      source_code_link: "https://github.com/Fabomarche/django_password_generator",
    },
    {
      name: "Rick & Morty",
      description:
        "Personal FrontEnd development project using the Vue.js library. In this simple and quickly executed project, the consumption of the Rick & Morty animated series API is implemented to display the characters on cards. Additionally, a search filter functionality is included.",
        tags: [
          {
            name: "vuejs",
            color: "blue-text-gradient",
          },
          {
            name: "api",
            color: "green-text-gradient",
          },
          {
            name: "bootstrap",
            color: "pink-text-gradient",
          }
        ],
      image: rick_vue,
      web_link: 'https://rick-and-morty-api-vue-js.netlify.app/',
      source_code_link: "https://github.com/Fabomarche/django_password_generator",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };