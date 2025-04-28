// Підключаємо технологію express для back-end сервера
const express = require('express')
const { ModuleFilenameHelpers } = require('webpack')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
const shop = require('./shop')
const resume = require('./resume')
const css = require('./css')

// Об'єднайте файли роутів за потреби
router.use('/', shop)
router.use('/', resume)
router.use('/', css)

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {
    layout: 'index',
    page: {
      title: 'home page',
    },
    author: {
      name: 'Tetiana',
      surname: 'Titko',
    },
    projectName: 'Project',
    title: 'My projects (Handlebars, CSS)',
    navigation: [
      {
        text: 'Resume',
        link: '/resume',
      },
      {
        text: 'Shop',
        link: '/shop',
      },
      {
        text: 'CSS trainings',
        link: '/css',
      },
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
