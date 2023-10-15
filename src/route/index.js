// Підключаємо технологію express для back-end сервера
const express = require('express')
const { ModuleFilenameHelpers } = require('webpack')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Dmytro',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Lviv, 11475, Pekarska str., 17',
}

var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку
  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

router.get('/summary', function (req, res) {
  res.render('summary', {
    page: {
      title: 'Резюме|Summary',
    },
    header,

    main: {
      sammary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics ( tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

router.get('/skills', function (req, res) {
  res.render('skills', {
    page: {
      title: 'Резюме | Skills',
    },
    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'Terminal & VS Code',
          point: 8,
          isTop: false,
        },
        {
          name: 'NPM & Git',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        { name: 'Skiing', isMain: true },
        { name: 'Mountain cycling', isMain: true },
        { name: 'Chess', isMain: false },
      ],
    },

    footer,
  })
})

router.get('/education', function (req, res) {
  res.render('education', {
    page: {
      title: 'Резюме | Education',
    },
    header,

    main: {
      educations: [
        { name: 'Technical University', isEnd: true },
        { name: 'Harvard', isEnd: true },
        { name: 'Oxford', isEnd: false },
        { name: 'Lvivska polythechnika', isEnd: true },
        { name: 'IT Brains schcool', isEnd: false },
      ],
      sertificates: [
        { name: 'Profi school sertificate', id: 111 },
        { name: 'Promotion-2022', id: 222 },
        { name: 'IT chalange, 2023 ', id: 333 },
      ],
    },

    footer,
  })
})
// =

router.get('/work', function (req, res) {
  res.render('work', {
    layout: 'big',
    page: {
      title: 'Резюме | Work',
    },
    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://translate.google.com/',
            duration: {
              from: '20/02/2023',
              to: null,
            },
            projectAmount: 3,

            projects: [
              {
                name: 'Resume',
                url: 'htts://resume.com.ua',
                about: '...short project description...',
                stackAmount: 4,
                stacks: [
                  { name: 'Node JS' },
                  { name: 'HTML' },
                  { name: 'CSS' },
                  { name: 'React.js' },
                ],
                awardAmount: 2,
                awards: [
                  {
                    name: '111111111111',
                  },
                  {
                    name: '2222222222222221',
                  },
                ],
              },
            ],
          },
        },
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT company',
            url: null,
            duration: {
              from: '10/02/2022',
              to: '10/02/2023',
            },
            projectAmount: 5,
          },
        },
      ],
    },

    footer,
  })
})
// =
// Підключаємо роутер до бек-енду
module.exports = router
