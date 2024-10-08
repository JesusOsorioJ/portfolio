export var databases = [
  {
    no: 0,
    name: 'Quick call',
    url: 'quickcall',
    participants: [
      {
        rol: 'developer',
        name: 'Luis Alberto Salas',
        linkedin: 'https://www.linkedin.com/in/luis-salcedo-salas/',
      },
      {
        rol: 'developer',
        name: 'Francisco Huertas Cruz',
        linkedin: 'https://www.linkedin.com/in/francisco-huertas-cruz/',
      },
      {
        rol: 'developer',
        name: 'Jesus Osorio Jimenez',
        linkedin: 'https://www.linkedin.com/in/jesus-david-osorio-jimenez/',
      },
    ],
    responsibilities: [],
    technologies: {
      all: [
        'JS',
        'react',
        'sass',
        'redux',
        'socket',
        'node',
        'sendgrid',
        'cloudinary',
        'stripe',
        'mongodb',
        'express',
      ],
      front: ['react', 'redux', 'sass', 'JS', 'socket'],
      back: ['node', 'sendgrid', 'cloudinary', 'stripe'],
      database: ['mongodb'],
      test: ['jest', 'cypress'],
    },
    characteristics: Array(7).fill(''),
    backend: 'https://github.com/JesusOsorioJ/Quick-call-Backend',
    frontend: 'https://github.com/Luis-S-S/quick-call',
    webpage: 'https://quickcall.netlify.app/',
    imageswebpages: [
      'landing',
      'consulta',
      'trabajos',
      'chat',
      'pasarelapago',
      'login',
    ],
    videopage: null,
  },
  {
    no: 1,
    name: 'Mi app',
    url: 'miapp',
    participants: [
      {
        rol: 'developer',
        name: 'Jesus Osorio jimenez',
        linkedin: 'https://www.linkedin.com/in/jesus-david-osorio-jimenez/',
      },
    ],
    responsibilities: [],
    technologies: {
      all: [
        'JS',
        'react',
        'sass',
        'redux',
        'firebase',
        'fbauthentication',
        'express',
      ],
      front: ['react', 'sass', 'redux', 'JS'],
      back: [''],
      database: ['firebase', 'fbauthentication'],
      test: [''],
    },
    characteristics: Array(5).fill(''),
    backend: null,
    frontend: 'https://github.com/JesusOsorioJ/my-app',
    webpage: 'https://my-appcreate.vercel.app/',
    imageswebpages: [
      'cuestionario1',
      'signup',
      'curso1',
      'envivo',
      'curso',
      'suscripcion'
    ],
    videopage: 'https://www.youtube.com/watch?v=QLfULI03pl0',
  },
  {
    no: 2,
    name: 'Maker Hub (en desarrollo)',
    url: 'makerhub',
    participants: [
      {
        rol: 'developer',
        name: 'German Escobar ',
        linkedin: 'https://www.linkedin.com/in/germanescobar/',
      },
      {
        rol: 'developer',
        name: 'Jesus Osorio Jimenez',
        linkedin: 'https://www.linkedin.com/in/jesus-david-osorio-jimenez/',
      },
    ],
    responsibilities: Array(7).fill(''),
    technologies: {
      all: [
        'vite',
        'bootstrap',
        'prisma',
        'node',
        'express',
        'TS',
      ],
      front: ['vite', 'bootstrap'],
      back: ['prisma', 'TS', 'express', 'node'],
      database: ['postgresql'],
      test: [''],
    },
    characteristics: Array(5).fill(''),
    backend: null,
    frontend: null,
    webpage: null,
    videopage: null,
    imageswebpages: [
      'login',
      'makerview',
      'makernew',
      'makerupdate',
      'admindetails',
      'adminUpdate',
      'adminview',
      'delete'
    ],
  },
  {
    no: 3,
    name: 'ArchiBige Doc',
    url: 'archibige',
    participants: [
      { rol: 'company', name: 'Ilia Sofia Castilla', linkedin: '' },
      {
        rol: 'developer',
        name: 'Jesus Osorio Jimenez',
        linkedin: 'https://www.linkedin.com/in/jesus-david-osorio-jimenez/',
      },
    ],
    responsibilities: [],
    technologies: {
      all: ['TS', 'angular', 'tailwind', 'gsap', 'scrolltrigger'],
      front: ['angular', 'tailwind', 'TS', 'gsap', 'scrolltrigger'],
      back: [''],
      database: [''],
      test: [''],
    },
    characteristics: Array(5).fill(''),
    backend: null,
    frontend: 'https://github.com/JesusOsorioJ/empresasofia',
    webpage: 'https://pgdi.vercel.app/',
    imageswebpages: [
      'landing',
      'somos',
      'servicios',
      'opiniones',
      'ubicacion',
    ],
    videopage: null,
  },
  {
    no: 4,
    name: 'Test English',
    url: 'testenglish',
    participants: [
      {
        rol: 'developer',
        name: 'Jesus Osorio Jimenez',
        linkedin: 'https://www.linkedin.com/in/jesus-david-osorio-jimenez/',
      },
    ],
    responsibilities: [],
    technologies: {
      all: [
        'nextjs',
        'TS',
        'tailwind',
        'prisma',
        'reacthookform',
        'eslint',
        'postgresql',
      ],
      front: ['nextjs', 'TS', 'tailwind', 'reacthookform', 'eslint'],
      back: ['prisma'],
      database: ['postgresql'],
      test: [''],
    },
    characteristics: Array(5).fill(''),
    backend: null,
    frontend: 'https://github.com/JesusOsorioJ/testenglish',
    webpage: 'https://testenglish.vercel.app/',
    imageswebpages: [
      'landing',
      'login',
      'loginuser',
      'testEn',
      'filter',
    ],
    videopage: null,
  },
  {
    no: 5,
    name: 'Mega Tv',
    url: 'megatv',
    participants: [
      {
        rol: 'developer',
        name: 'Jesus Osorio Jimenez',
        linkedin: 'https://www.linkedin.com/in/jesus-david-osorio-jimenez/',
      },
    ],
    responsibilities: [],
    technologies: {
      all: [
        'JS',
        'react',
        'sass',
        'redux',
        'node',
        'express',
        'nodemon',
        'mongodb',
      ],
      front: ['react', 'sass', 'JS', 'redux'],
      back: ['node', 'nodemon', 'express'],
      database: ['mongodb'],
      test: [''],
    },
    characteristics: Array(5).fill(''),
    backend: 'https://github.com/JesusOsorioJ/megatvback',
    frontend: 'https://github.com/JesusOsorioJ/megatv',
    webpage: 'https://megatv.vercel.app/',
    imageswebpages: [
      'landing',
      'great',
      'plan',
      'address',
    ],
    videopage: null,
  },
  {
    no: 6,
    name: 'Backend GraphQl',
    url: 'graphql',
    participants: [
      {
        rol: 'developer',
        name: 'Jesus Osorio Jimenez',
        linkedin: 'https://www.linkedin.com/in/jesus-david-osorio-jimenez/',
      },
    ],
    responsibilities: [],
    technologies: {
      all: ['graphql', 'node', 'express', 'nodemon', 'mongodb'],
      front: [''],
      back: ['graphql', 'node', 'express', 'nodemon'],
      database: ['mongodb'],
      test: [''],
    },
    characteristics: Array(7).fill(''),
    frontend: null,
    backend: 'https://github.com/JesusOsorioJ/GraphQlexercise',
    webpage: 'https://graphqlexercise.up.railway.app/graphql',
    imageswebpages: [
      'createuser',
      'allquerymutation',
      'createdocument',
      'createcontact',
      'allname',
      'allmutation',
    ],
    videopage: null,
  },
  {
    no: 7,
    name: 'Dreadful',
    url: 'dreadful',
    participants: [
      {
        rol: 'developer',
        name: 'Jesus Osorio Jimenez',
        linkedin: 'https://www.linkedin.com/in/jesus-david-osorio-jimenez/',
      },
    ],
    responsibilities: [],
    technologies: {
      all: ['angular', 'TS', 'tailwind'],
      front: ['angular', 'TS', 'tailwind'],
      back: [''],
      database: [''],
      test: [''],
    },
    characteristics: Array(4).fill(''),
    frontend: 'https://github.com/JesusOsorioJ/dreadfulmovie',
    backend: null,
    webpage: 'https://dreadfulmovie.vercel.app/',
    imageswebpages: [
     'pagination',
     'filter',
     'landing',
     'filter1',
    ],
    videopage: null,
    test: [''],
  },
  {
    no: 8,
    name: 'Crud Nextjs',
    url: 'crudnext',
    participants: [
      {
        rol: 'developer',
        name: 'Jesus Osorio Jimenez',
        linkedin: 'https://www.linkedin.com/in/jesus-david-osorio-jimenez/',
      },
    ],
    responsibilities: [],
    technologies: {
      all: ['nextjs', 'JS', 'tailwind', 'mysql'],
      front: ['nextjs', 'JS', 'tailwind'],
      back: [''],
      database: ['mysql'],
      test: [''],
    },
    characteristics: Array(4).fill(''),
    frontend: 'https://github.com/JesusOsorioJ/crudnext',
    backend: null,
    webpage: 'https://crudnext-mu.vercel.app/',
    imageswebpages: [
      'landing',
      'addnew',
      'edit',
    ],
    videopage: null,
  },
];

export var technologies = [
  {
    name: 'Frontend',
    items: [
      'JS',
      'TS',
      'react',
      'nextjs',
      'vite',
      'angular',

      'bootstrap',
      'tailwind',
      'sass',
      'socket',
      'redux',
     
      'gapsap'
    ],
  },
  {
    name: 'Backend',
    items: [
      'TS',
      'node',
      'express',
      'JSDoc',
      'swagger',
      'stripe',
      'sendgrid',
      'cloudinary',
      'graphql',
      'nodemon',
      'eslint',
    ],
  },
  {
    name: 'Data base',
    items: [
      'mongodb',
      'prisma',
      'firebase',
      'postgresql',
      'mysql'
    ],
  },
  {
    name: 'Test',
    items: ['jest', 'cypress', 'mocha', 'chai'],
  },
];
