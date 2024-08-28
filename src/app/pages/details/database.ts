
export var databases = [
  {
    no: 0,
    name: "Quick call",
    url: "quickcall",
    participants: [
      { rol: "developer", name: "Luis Alberto Salas", linkedin: "https://www.linkedin.com/in/luis-salcedo-salas/" },
      { rol: "developer", name: "Francisco Huertas Cruz", linkedin: "https://www.linkedin.com/in/francisco-huertas-cruz/" },
      { rol: "developer", name: "Jesus Osorio Jimenez", linkedin: "https://www.linkedin.com/in/jesus-david-osorio-jimenez/" },
    ], responsibilities: [],
    technologies: {
      all: ["javascript", "react", "sass", "redux", "socket", "node", "sendgrid", "cloudinary", "stripe", "mongodb", "express"],
      front: ["react", "redux", "sass", "javascript", "socket"],
      back: ["node", "sendgrid", "cloudinary", "stripe"],
      database: ["mongodb"], test: ["jest", "cypress"]
    },
    description: "quickCallDescription",
    characteristics: [
      "quickCallCharacteristics1",
      "quickCallCharacteristics2",
      "quickCallCharacteristics3",
      "quickCallCharacteristics4",
      "quickCallCharacteristics5",
      "quickCallCharacteristics6",
      "quickCallCharacteristics7",
    ],
    backend: "https://github.com/JesusOsorioJ/Quick-call-Backend",
    frontend: "https://github.com/Luis-S-S/quick-call",
    webpage: "https://quickcall.netlify.app/",
    imageswebpages: [
      { name: "landing", des: "quickCallImages1" },
      { name: "consulta", des: "quickCallImages2" },
      { name: "trabajos", des: "quickCallImages3" },
      { name: "chat", des: "quickCallImages4" },
      { name: "pasarelapago", des: "quickCallImages5" },
      { name: "login", des: "quickCallImages6" }],
    videopage: null
  },
  {
    no: 1,
    name: "Mi app",
    url: "miapp",
    participants: [
      { rol: "developer", name: "Jesus Osorio jimenez", linkedin: "https://www.linkedin.com/in/jesus-david-osorio-jimenez/" }
    ], responsibilities: [],
    technologies: {
      all: ["javascript", "react", "sass", "redux", "reactrouter", "firebase", "fbauthentication", "express"],
      front: ["react", "sass", "redux", "javascript", "reactrouter"],
      back: [""],
      database: ["firebase", "fbauthentication"], test:[""]
    },
    description: "miAppDescription",
    characteristics: [
      "miAppCharacteristics1",
      "miAppCharacteristics2",
      "miAppCharacteristics3",
      "miAppCharacteristics4",
      "miAppCharacteristics5"
    ],
    backend: null,
    frontend: "https://github.com/JesusOsorioJ/my-app",
    webpage: "https://my-appcreate.vercel.app/",
    imageswebpages: [
      { name: "cuestionario1", des: "miAppImages1" },
      { name: "signup", des: "miAppImages2" },
      { name: "curso1", des: "miAppImages3" },
      { name: "envivo", des: "miAppImages4" },
      { name: "curso", des: "miAppImages5" },
      { name: "suscripcion", des: "miAppImages6" }],
    videopage: "https://www.youtube.com/watch?v=QLfULI03pl0"
  },
  {
    no: 2,
    name: "Maker Hub (en desarrollo)",
    url: "makerhub",
    participants: [
      { rol: "developer", name: "German Escobar ", linkedin: "https://www.linkedin.com/in/germanescobar/" },
      { rol: "developer", name: "Jesus Osorio Jimenez", linkedin: "https://www.linkedin.com/in/jesus-david-osorio-jimenez/" },
    ],
    responsibilities:[
      "makerHubResponsibilities1",
      "makerHubResponsibilities2",
      "makerHubResponsibilities3",
      "makerHubResponsibilities4",
      "makerHubResponsibilities5",
      "makerHubResponsibilities6",
      "makerHubResponsibilities7",
    ],
    technologies: {
      all: ["vite", "bootstrap", "reactrouter","prisma", "node", "express", "typescript"],
      front: ["vite", "bootstrap", "reactrouter"],
      back: ["prisma", "typescript", "express", "node"],
      database: ["postgresql"], test: [""]
    },
    description: "makerHubDescription",
    characteristics: [
      "makerHubCharacteristics1",
      "makerHubCharacteristics2",
      "makerHubCharacteristics3",
      "makerHubCharacteristics4",
      "makerHubCharacteristics5",
    ],
    backend: null,
    frontend: null,
    webpage: null,
    videopage: null,
    imageswebpages: [
      { name: "login", des: "makerHubImages1" },
      { name: "makerview", des: "makerHubImages2" },
      { name: "makernew", des: "makerHubImages3" },
      { name: "makerupdate", des: "makerHubImages4" },
      { name: "admindetails", des: "makerHubImages5" },
      { name: "adminUpdate", des: "makerHubImages6" },
      { name: "adminview", des: "makerHubImages7" },
      { name: "delete", des: "makerHubImages8" },]
  },
  {
    no: 3,
    name: "ArchiBige Doc",
    url: "archibige",
    participants: [
      { rol: "company", name: "Ilia Sofia Castilla", linkedin: "" },
      { rol: "developer", name: "Jesus Osorio Jimenez", linkedin: "https://www.linkedin.com/in/jesus-david-osorio-jimenez/" },
    ], responsibilities: [],
    technologies: {
      all: ["typescript", "angular", "tailwind", "gsap", "scrolltrigger"],
      front: ["angular", "tailwind", "typescript", "gsap", "scrolltrigger"],
      back: [""],
      database: [""], test: [""]
    },
    description: "archiBigeDocDescription",
    characteristics: [
      "archiBigeDocCharacteristics1",
      "archiBigeDocCharacteristics2",
      "archiBigeDocCharacteristics3",
      "archiBigeDocCharacteristics4",
      "archiBigeDocCharacteristics5",
    ],
    backend: null,
    frontend: "https://github.com/JesusOsorioJ/empresasofia",
    webpage: "https://pgdi.vercel.app/",
    imageswebpages: [
      { name: "landing", des: "archiBigeDocImages1" },
      { name: "somos", des: "archiBigeDocImages2" },
      { name: "servicios", des: "archiBigeDocImages3" },
      { name: "opiniones", des: "archiBigeDocImages4" },
      { name: "ubicacion", des: "archiBigeDocImages5" },],
    videopage: null
  },
  {
    no: 4,
    name: "Test English",
    url: "testenglish",
    participants: [
      { rol: "developer", name: "Jesus Osorio Jimenez", linkedin: "https://www.linkedin.com/in/jesus-david-osorio-jimenez/" },
    ], responsibilities: [],
    technologies: {
      all: ["nextjs", "typescript", "tailwind", "prisma", "reacthookform", "eslint", "postgresql"],
      front: ["nextjs", "typescript", "tailwind", "reacthookform", "eslint"],
      back: ["prisma"],
      database: ["postgresql"], test: [""]
    },
    description: "testEnglishDescription",
    characteristics: [
      "testEnglishCharacteristics1",
      "testEnglishCharacteristics2",
      "testEnglishCharacteristics3",
      "testEnglishCharacteristics4",
      "testEnglishCharacteristics5"
    ],
    backend: null,
    frontend: "https://github.com/JesusOsorioJ/testenglish",
    webpage: "https://testenglish.vercel.app/",
    imageswebpages: [
      { name: "landing", des: "testEnglishImages1" },
      { name: "login", des: "testEnglishImages2" },
      { name: "loginuser", des: "testEnglishImages3" },
      { name: "testEn", des: "testEnglishImages4" },
      { name: "filter", des: "testEnglishImages5" },],
    videopage: null
  },
  {
    no: 5,
    name: "Mega Tv",
    url: "megatv",
    participants: [
      { rol: "developer", name: "Jesus Osorio Jimenez", linkedin: "https://www.linkedin.com/in/jesus-david-osorio-jimenez/" },
    ], responsibilities: [],
    technologies: {
      all: ["javascript", "react", "sass", "redux", "node", "express", "nodemon", "mongodb"],
      front: ["react", "sass", "javascript", "redux"],
      back: ["node", "nodemon", "express"],
      database: ["mongodb"], test: [""]
    },
    description: "megaTvDescription",
    characteristics: [
      "megaTvCharacteristics1",
      "megaTvCharacteristics2",
      "megaTvCharacteristics3",
      "megaTvCharacteristics4",
      "megaTvCharacteristics5"
    ],
    backend: "https://github.com/JesusOsorioJ/megatvback",
    frontend: "https://github.com/JesusOsorioJ/megatv",
    webpage: "https://megatv.vercel.app/",
    imageswebpages: [
      { name: "landing", des: "megaTvImages1" },
      { name: "great", des: "megaTvImages2" },
      { name: "plan", des: "megaTvImages3" },
      { name: "address", des: "megaTvImages4" }],
    videopage: null
  },
  {
    no: 6,
    name: "Backend GraphQl",
    url: "graphql",
    participants: [
      { rol: "developer", name: "Jesus Osorio Jimenez", linkedin: "https://www.linkedin.com/in/jesus-david-osorio-jimenez/" },
    ], responsibilities: [],
    technologies: {
      all: ["graphql", "node", "express", "nodemon", "mongodb"],
      front: [""],
      back: ["graphql", "node", "express", "nodemon"],
      database: ["mongodb"], test: [""]
    },
    description: "backendGraphQlDescription",
    characteristics: [
      "backendGraphQlCharacteristics1",
      "backendGraphQlCharacteristics2",
      "backendGraphQlCharacteristics3",
      "backendGraphQlCharacteristics4",
      "backendGraphQlCharacteristics5",
      "backendGraphQlCharacteristics6",
      "backendGraphQlCharacteristics7",
    ],
    frontend: null,
    backend: "https://github.com/JesusOsorioJ/GraphQlexercise",
    webpage: "https://graphqlexercise.up.railway.app/graphql",
    imageswebpages: [
      { name: "createuser", des: "backendGraphQlImages1" },
      { name: "allquerymutation", des: "backendGraphQlImages2" },
      { name: "createdocument", des: "backendGraphQlImages3" },
      { name: "createcontact", des: "backendGraphQlImages4" },
      { name: "allname", des: "backendGraphQlImages5" },
      { name: "allmutation", des: "backendGraphQlImages6" }
    ],
    videopage: null
  },
  {
    no: 7,
    name: "Dreadful",
    url: "dreadful",
    participants: [
      { rol: "developer", name: "Jesus Osorio Jimenez", linkedin: "https://www.linkedin.com/in/jesus-david-osorio-jimenez/" },
    ], responsibilities: [],
    technologies: {
      all: ["angular", "typescript", "tailwind"],
      front: ["angular", "typescript", "tailwind"],
      back: [""],
      database: [""], test: [""]
    },
    description: "dreadfulDescription",
    characteristics: [
      "dreadfulCharacteristics1",
      "dreadfulCharacteristics2",
      "dreadfulCharacteristics3",
      "dreadfulCharacteristics4"
    ],
    frontend: "https://github.com/JesusOsorioJ/dreadfulmovie",
    backend: null,
    webpage: "https://dreadfulmovie.vercel.app/",
    imageswebpages: [
      { name: "pagination", des: "dreadfulImages1" },
      { name: "filter", des: "dreadfulImages2" },
      { name: "landing", des: "dreadfulImages3" },
      { name: "filter1", des: "dreadfulImages4" },

    ],
    videopage: null, test: [""]
  },
  {
    no: 8,
    name: "Crud Nextjs",
    url: "crudnext",
    participants: [
      { rol: "developer", name: "Jesus Osorio Jimenez", linkedin: "https://www.linkedin.com/in/jesus-david-osorio-jimenez/" },
    ], responsibilities: [],
    technologies: {
      all: ["nextjs", "javascript", "tailwind", "mysql"],
      front: ["nextjs", "javascript", "tailwind"],
      back: [""],
      database: ["mysql"], test: [""]
    },
    description: "crudNextjsDescription",
    characteristics: [
      "crudNextjsCharacteristics1",
      "crudNextjsCharacteristics2",
      "crudNextjsCharacteristics3",
      "crudNextjsCharacteristics4"
    ],
    frontend: "https://github.com/JesusOsorioJ/crudnext",
    backend: null,
    webpage: "https://crudnext-mu.vercel.app/",
    imageswebpages: [
      { name: "landing", des: "crudNextjsImages1" },
      { name: "addnew", des: "crudNextjsImages2" },
      { name: "edit", des: "crudNextjsImages3" },
    ],
    videopage: null
  },

]

export var technologies = [
  {
    name: "Frontend",
    items: [
      "react", 
      "redux", 
      "sass", 
      "socket", 
      "vite", 
      "bootstrap", 
      "angular", 
      "tailwind", 
      "typescript", 
      "gsap", 
      "scrolltrigger", 
      "nextjs", 
      "reacthookform", 
    ]
  },
  {
    name: "Backend",
    items: [
      "node", 
      "sendgrid", 
      "cloudinary", 
      "stripe",
      "prisma",
      "typescript",
      "express",
      "graphql",
      "nodemon",
      "JSDoc",
      "swagger",
      "eslint", 
      "reactrouter", 
    ]
  },
  {
    name: "Data base",
    items: [
      "mongodb",
      "firebase",
      "fbauthentication",
      "postgresql",
      "prisma",
      "mysql",
    ]
  },
  {
    name: "Test",
    items: [ 
      "jest", 
      "cypress",
      "mocha",
      "chai"
    ]
  }
]




