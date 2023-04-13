
export var databases = [
  {
    no: 0,
    name: "Quick call",
    url: "quickcall",
    integrantes: [
      { rol: "Desarollador", name: "Luis Alberto Salas", linkedin: "https://www.linkedin.com/in/luis-salcedo-salas/" },
      { rol: "Desarollador", name: "Francisco Huertas Cruz", linkedin: "https://www.linkedin.com/in/francisco-huertas-cruz/" },
      { rol: "Desarollador", name: "Jesus Osorio Jimenez", linkedin: "https://www.linkedin.com/in/jesus-david-osorio-jimenez/" },
    ], funciones: [],
    herramientas: {
      all: ["javascript", "react", "sass", "redux", "socket", "node", "sendgrid", "cloudinary", "stripe", "mongodb", "express"],
      front: ["react", "redux", "sass", "javascript", "socket"],
      back: ["node", "sendgrid", "cloudinary", "stripe"],
      database: ["mongodb"], test: ["jest", "cypress"]
    },
    descripcion: "Pagina intermediadora entre profesionales especializados y clientes, en labores domesticas como electrica, plomeria, mecanica, entre otras.​",
    Utilidades: [
      "Inicio de sesion con encriptacion (Jwt)",
      "Filtro de profesional por categorias",
      "Envio de correo de autenticacion de usuario",
      "Envio de imagenes con Cloudinary",
      "Chat en tiempo real (socket)",
      "Pasarela de pago (stripe)",
      "Testing unitario y funcional (cypress, jest)",
      "Uso de herramientas SCRUM (Jira) y Figma "
    ],
    backend: "https://github.com/JesusOsorioJ/Quick-call-Backend",
    frontend: "https://github.com/Luis-S-S/quick-call",
    webpage: "https://quickcall.netlify.app/",
    imageswebpages: [
      { name: "landing", des: "Home de pagina" },
      { name: "consulta", des: "Formato de consulta de cliente" },
      { name: "trabajos", des: "Gestion de trabajos" },
      { name: "chat", des: "Chat en vivo con clientes" },
      { name: "pasarelapago", des: "Pasarela de pago Strike" },
      { name: "login", des: "Autenticacion de usuarios" }],
    videopage: "https://www.youtube.com/watch?v=oAa03x9BtB8&t=2203s"
  },
  {
    no: 1,
    name: "Mi app",
    url: "miapp",
    integrantes: [
      { rol: "Desarollador", name: "Jesus Osorio jimenez", linkedin: "https://www.linkedin.com/in/jesus-david-osorio-jimenez/" }
    ], funciones: [],
    herramientas: {
      all: ["javascript", "react", "sass", "redux", "reactrouter", "firebase", "fbauthentication", "express"],
      front: ["react", "sass", "redux", "javascript", "reactrouter"],
      back: [""],
      database: ["firebase", "fbauthentication"], test:[""]
    },
    descripcion: "Mi app es una pagina que ofrece a los estudiantes y profesores una herramienta para poder hacer test en línea. La plataforma permite la gestión de cursos y test de forma simultanea.",
    Utilidades: ["Inicio de sesion con encriptacion (Jwt)",
      "Creacion y gestion de test en linea",
      "Creacion y gestion de curso en linea",
      "Posibilidad de gestionar test en vivo o con tiempo",
      "Uso de herramientas SCRUM (Jira) y Figma "
    ],
    backend: null,
    frontend: "https://github.com/JesusOsorioJ/my-app",
    webpage: "https://my-appcreate.vercel.app/",
    imageswebpages: [
      { name: "cuestionario1", des: "Creacion de cuestionarios" },
      { name: "signup", des: "Registro y autenticacion de usuario" },
      { name: "curso1", des: "Gestion de estudiantes por curso" },
      { name: "envivo", des: "Manejo de test en linea" },
      { name: "curso", des: "Gestion de curso" },
      { name: "suscripcion", des: "Pago suscripcion" }],
    videopage: "https://www.youtube.com/watch?v=QLfULI03pl0"
  },
  {
    no: 2,
    name: "Maker Hub",
    url: "makerhub",
    integrantes: [
      { rol: "Desarollador", name: "German Escobar ", linkedin: "https://www.linkedin.com/in/germanescobar/" },
      { rol: "Desarollador", name: "Jesus Osorio Jimenez", linkedin: "https://www.linkedin.com/in/jesus-david-osorio-jimenez/" },
    ],
    funciones:
      ["Creacion de frontend vistas (Admin, Admindetails y Home)",
        "Creacion de componentes y subvistas (Login, Delete, Create and Update modal) ",
        "Implementacion de typeScript (Interface, Type y InitialValue)",
        "Creacion de servicios applicationlog, application y user",
        "Implementacion de Prisma y conexion DB (Backend)",
        "Config para Migracion y Seeding inicial para modo desarrollo (Libreria faker)",
        "Creacion de endpoint y funciones para uso de Prisma con conexion PostgreSQL "
      ],
    herramientas: {
      all: ["vite", "bootstrap", "reactrouter","prisma", "node", "express", "typescript"],
      front: ["vite", "bootstrap", "reactrouter"],
      back: ["prisma", "typescript", "express", "node"],
      database: ["postgresql"], test: [""]
    },
    descripcion:
      "Pagina creada para la gestion de las solicitudes de empleo de los estudiantes de Make It Real ​",
    Utilidades: [
      "Login de usuarios (MAKER, ADMIN)",
      "Gestion de aplicaciones por parte de maker (CRUD)",
      "Filtros admin queryParams por status, name, email, cohort",
      "Gestion de maker por parte de Administrador (CRUD)",
      "Implementacion de prisma"
    ],
    backend: null,
    frontend: null,
    webpage: null,
    videopage: null,
    imageswebpages: [
      { name: "login", des: "Login (maker, administrador)" },
      { name: "makerview", des: "Vista maker: Aplicaciones por maker y status" },
      { name: "makernew", des: "Modal para creacion de aplicacion" },
      { name: "makerupdate", des: "Modal para ver y modificar aplicacion" },
      { name: "admindetails", des: "Vista admin: Detalle maker por ID" },
      { name: "adminUpdate", des: "Formulario para actualizar maker" },
      { name: "adminview", des: "Vista admin: Gestion de maker" },
      { name: "delete", des: "Modal delete maker o aplicacion" },]
  },
  {
    no: 3,
    name: "ArchiBige Doc",
    url: "archibige",
    integrantes: [
      { rol: "Empresa", name: "Ilia Sofia Castilla", linkedin: "" },
      { rol: "Desarollador", name: "Jesus Osorio Jimenez", linkedin: "https://www.linkedin.com/in/jesus-david-osorio-jimenez/" },
    ], funciones: [],
    herramientas: {
      all: ["typescript", "angular", "tailwind", "gsap", "scrolltrigger"],
      front: ["angular", "tailwind", "typescript", "gsap", "scrolltrigger"],
      back: [""],
      database: [""], test: [""]
    },
    descripcion: "Empresa privada consultora de archivos, bibliotecas y centro de documentación, orientada a brindar capacitaciones y asesorías.​",
    Utilidades: [
      "Landing page con carrusel",
      "Informacion general de la empresa",
      "Vista de opiniones cliente carrusel",
      "Ubicacion google maps",
      "Animaciones y scrolltrigger gsap",
    ],
    backend: null,
    frontend: "https://github.com/JesusOsorioJ/empresasofia",
    webpage: "https://pgdi.vercel.app/",
    imageswebpages: [
      { name: "landing", des: "Home de pagina" },
      { name: "somos", des: "Descripcion de empresa" },
      { name: "servicios", des: "Servicios prestados" },
      { name: "opiniones", des: "Opiniones de cliente en carrusel" },
      { name: "ubicacion", des: "Ubicacion con google maps" },],
    videopage: null
  },
  {
    no: 4,
    name: "Test English",
    url: "testenglish",
    integrantes: [
      { rol: "Desarollador", name: "Jesus Osorio Jimenez", linkedin: "https://www.linkedin.com/in/jesus-david-osorio-jimenez/" },
    ], funciones: [],
    herramientas: {
      all: ["nextjs", "typescript", "tailwind", "prisma", "reacthookform", "eslint", "postgresql"],
      front: ["nextjs", "typescript", "tailwind", "reacthookform", "eslint"],
      back: ["prisma"],
      database: ["postgresql"], test: [""]
    },
    descripcion: "TestEnglish es una pagina donde podras evaluar tu vocabulario en ingles con palabras de diferentes categorias.​",
    Utilidades: [
      "Login y signup de usuarios",
      "Filtro de palabras por tipo y nota realizada",
      "Cuadro de evaluacion de usuario por palabra ",
      "Migration/seeding de base de datos(prisma)",
      "Uso de router.query para filtros",
    ],
    backend: null,
    frontend: "https://github.com/JesusOsorioJ/testenglish",
    webpage: "https://testenglish.vercel.app/",
    imageswebpages: [
      { name: "landing", des: "Home de pagina" },
      { name: "login", des: "Login y signup de usuario" },
      { name: "loginuser", des: "Vista login de usuario" },
      { name: "testEn", des: "Cuadro de evaluacion de palabras" },
      { name: "filter", des: "Filtro de lista por notas y tipo de palabra" },],
    videopage: null
  },
  {
    no: 5,
    name: "Mega Tv",
    url: "megatv",
    integrantes: [
      { rol: "Desarollador", name: "Jesus Osorio Jimenez", linkedin: "https://www.linkedin.com/in/jesus-david-osorio-jimenez/" },
    ], funciones: [],
    herramientas: {
      all: ["javascript", "react", "sass", "redux", "node", "express", "nodemon", "mongodb"],
      front: ["react", "sass", "javascript", "redux"],
      back: ["node", "nodemon", "express"],
      database: ["mongodb"], test: [""]
    },
    descripcion: "Pagina intermediadora entre profesionales especialidados y clientes, en labores domesticas como electricos, plomeria, mecanico, entre otras.​",
    Utilidades: [
      "Envio formulario por parte de clientes",
      "Carga de dirrecciones de base de datos en formulario cliente",
      "Envio de correo de autenticacion de usuario",
      "Diseño amigable y moderno con usuario",
    ],
    backend: "https://github.com/JesusOsorioJ/megatvback",
    frontend: "https://github.com/JesusOsorioJ/megatv",
    webpage: "https://megatv.vercel.app/",
    imageswebpages: [
      { name: "landing", des: "Home de pagina" },
      { name: "great", des: "Formulario envio correo y telefono" },
      { name: "plan", des: "Planes de tv disponibles" },
      { name: "address", des: "Direcciones disponibles en DB" }],
    videopage: null
  },
  {
    no: 6,
    name: "Backend GraphQl",
    url: "graphql",
    integrantes: [
      { rol: "Desarollador", name: "Jesus Osorio Jimenez", linkedin: "https://www.linkedin.com/in/jesus-david-osorio-jimenez/" },
    ], funciones: [],
    herramientas: {
      all: ["graphql", "node", "express", "nodemon", "mongodb"],
      front: [""],
      back: ["graphql", "node", "express", "nodemon"],
      database: ["mongodb"], test: [""]
    },
    descripcion: "backend con uso de graphQl para la creacion y consumo de informacion de base de datos en mongoDB​",
    Utilidades: [
      "QUERIES",
      "allUser: búsqueda total de usuarios o por Name, LastName, IsMilitar",
      "Búsqueda obligatoria por userID: UserDocumentByUser, ContactInfoByUser, allUserDocument",
      "MUTATIONS",
      "Creacion un usuario: createUser ",
      "Login un usuario: LoginUser",
      "Modifica datos de usuario: UpdateUser"
    ],
    frontend: null,
    backend: "https://github.com/JesusOsorioJ/GraphQlexercise",
    webpage: "https://graphqlexercise.up.railway.app/graphql",
    imageswebpages: [
      { name: "createuser", des: "Creacion de usuario, otorgacion de token" },
      { name: "allquerymutation", des: "Todas las queries and mutations" },
      { name: "createdocument", des: "Creacion de document, ingreso de token" },
      { name: "createcontact", des: "Creacion de document by username" },
      { name: "allname", des: "Query allname, with email of user by return" },
      { name: "allmutation", des: "Todas las mutacion del programa" }
    ],
    videopage: null
  },
  {
    no: 7,
    name: "Dreadful",
    url: "dreadful",
    integrantes: [
      { rol: "Desarollador", name: "Jesus Osorio Jimenez", linkedin: "https://www.linkedin.com/in/jesus-david-osorio-jimenez/" },
    ], funciones: [],
    herramientas: {
      all: ["angular", "typescript", "tailwind"],
      front: ["angular", "typescript", "tailwind"],
      back: [""],
      database: [""], test: [""]
    },
    descripcion: "Pagina para el consumo de servicios de API y filtro por nombre de productos​",
    Utilidades: [
      "Consumo de informacion de API",
      "Pagina Platzi(https://api.escuelajs.co/api/v1/products)",
      "Paginacion de los productos en listas por 8",
      "Filtro de productos por nombre"

    ],
    frontend: "https://github.com/JesusOsorioJ/dreadfulmovie",
    backend: null,
    webpage: "https://dreadfulmovie.vercel.app/",
    imageswebpages: [
      { name: "pagination", des: "Paginacion de productos por 8 items" },
      { name: "filter", des: "Pagina para filtro de pagina" },
      { name: "landing", des: "Landing page, link por movies y series" },
      { name: "filter1", des: "Filtro de productos por productos" },

    ],
    videopage: null, test: [""]
  },
  {
    no: 8,
    name: "Crud Nextjs",
    url: "crudnext",
    integrantes: [
      { rol: "Desarollador", name: "Jesus Osorio Jimenez", linkedin: "https://www.linkedin.com/in/jesus-david-osorio-jimenez/" },
    ], funciones: [],
    herramientas: {
      all: ["nextjs", "javascript", "tailwind", "mysql"],
      front: ["nextjs", "javascript", "tailwind"],
      back: [""],
      database: ["mysql"], test: [""]
    },
    descripcion: "Pagina nextjs creacion backend/frontend para creacion de API CRUD​",
    Utilidades: [
      "backend/frontend en el mismo documento",
      "consumo de API para elimanar, crear y modificar",
      "Backend para cosumo de informacion de frontend",
      "Estilos con tailwind"

    ],
    frontend: "https://github.com/JesusOsorioJ/crudnext",
    backend: null,
    webpage: "https://crudnext-mu.vercel.app/",
    imageswebpages: [
      { name: "landing", des: "Lista de productos creados" },
      { name: "addnew", des: "Menu para gregar nuevo producto" },
      { name: "edit", des: "Menu para modificar producto" },
    ],
    videopage: null
  },

]




