import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from '../assets'

export const navLinks = [
  {
    id: 'home',
    title: 'Главная',
  },
  {
    id: 'features',
    title: 'Особенности',
  },
  {
    id: 'product',
    title: 'Продукт',
  },
  {
    id: 'clients',
    title: 'Клиенты',
  },
]

export const features = [
  {
    id: 'feature-1',
    icon: star,
    title: 'Достижения',
    content:
      'Лучшие кредитные карты предлагают несколько заманчивых комбинаций рекламных акций и призов',
  },
  {
    id: 'feature-2',
    icon: shield,
    title: '100% Безопасно',
    content:
      'Мы предпринимаем активные шаги для обеспечения безопасности вашей информации и транзакций.',
  },
  {
    id: 'feature-3',
    icon: send,
    title: 'Перевод баланса',
    content:
      'Кредитная карта для перевода баланса может значительно сэкономить вам на начислении процентов.',
  },
]

export const feedback = [
  {
    id: 'feedback-1',
    content:
      'Деньги - это всего лишь инструмент. Они доставят вас туда, куда вы пожелаете, но не заменят вас как водителя.',
    name: 'Herman Jensen',
    title: 'Founder & Leader',
    img: people01,
  },
  {
    id: 'feedback-2',
    content:
      'Деньги облегчают вашу жизнь. Если вам повезло, что они у вас есть, значит, вам повезло.',
    name: 'Steve Mark',
    title: 'Founder & Leader',
    img: people02,
  },
  {
    id: 'feedback-3',
    content:
      'Обычно по-настоящему богаты люди, занимающиеся денежным бизнесом, финансами и международной торговлей.',
    name: 'Kenn Gallagher',
    title: 'Founder & Leader',
    img: people03,
  },
]

export const stats = [
  {
    id: 'stats-1',
    title: 'Пользователей',
    value: '3800+',
  },
  {
    id: 'stats-2',
    title: 'Доверяют нам',
    value: '230+',
  },
  {
    id: 'stats-3',
    title: 'Транзакции',
    value: '$230M+',
  },
]

export const footerLinks = [
  {
    title: 'Полезные ссылки',
    links: [
      {
        name: 'Контент',
        link: 'https://www.hoobank.com/content/',
      },
      {
        name: 'Как это работает',
        link: 'https://www.hoobank.com/how-it-works/',
      },
      {
        name: 'Создать',
        link: 'https://www.hoobank.com/create/',
      },
      {
        name: 'Иследовать',
        link: 'https://www.hoobank.com/explore/',
      },
      {
        name: 'Политика конфиденциальности',
        link: 'https://www.hoobank.com/terms-and-services/',
      },
    ],
  },
  {
    title: 'Сообщество',
    links: [
      {
        name: 'Центр помощьи',
        link: 'https://www.hoobank.com/help-center/',
      },
      {
        name: 'Партнеры',
        link: 'https://www.hoobank.com/partners/',
      },
      {
        name: 'Предложения',
        link: 'https://www.hoobank.com/suggestions/',
      },
      {
        name: 'Блог',
        link: 'https://www.hoobank.com/blog/',
      },
      {
        name: 'Информационные бюллетени',
        link: 'https://www.hoobank.com/newsletters/',
      },
    ],
  },
  {
    title: 'Партнеры',
    links: [
      {
        name: 'Наши партнеры',
        link: 'https://www.hoobank.com/our-partner/',
      },
      {
        name: 'Стать партнером',
        link: 'https://www.hoobank.com/become-a-partner/',
      },
    ],
  },
]

export const socialMedia = [
  {
    id: 'social-media-1',
    icon: instagram,
    link: 'https://www.instagram.com/',
  },
  {
    id: 'social-media-2',
    icon: facebook,
    link: 'https://www.facebook.com/',
  },
  {
    id: 'social-media-3',
    icon: twitter,
    link: 'https://www.twitter.com/',
  },
  {
    id: 'social-media-4',
    icon: linkedin,
    link: 'https://www.linkedin.com/',
  },
]

export const clients = [
  {
    id: 'client-1',
    logo: airbnb,
  },
  {
    id: 'client-2',
    logo: binance,
  },
  {
    id: 'client-3',
    logo: coinbase,
  },
  {
    id: 'client-4',
    logo: dropbox,
  },
]
