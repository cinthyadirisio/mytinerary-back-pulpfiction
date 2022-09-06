require('dotenv').config()
const db = require('./config/database')
const Itinerary = require('./models/Itinerary')

Itinerary.create(
    {
        name: 'Angkor Wats Temple Complex',
        user: '63127d66bd5df3158d31150c',
        city: '630f934f844315c76f0bd3e6',
        price: 200,
        duration: 120,
        likes: [1, 1, 1, 1, 1, 1, 1],
        tags: ['#siemreap', '#adventure', '#budism'],
        photo:'https://www.mundo-nomada.com/wp-content/uploads/2020/03/Templos-de-Angkor-Wat-e1590459718747-1200x900.jpg'
    },
    {
        name: 'Temple of Water',
        user: '63127d65bd5df3158d31150a',
        city: '630f934f844315c76f0bd3e7',
        price: 20,
        duration: 60,
        likes: [1, 1, 1, 1, 1, 1, 1,1,1,1,1,1],
        tags: ['#nature', '#temple', '#peace'],
        photo:'https://images-ext-1.discordapp.net/external/hJTN2F_gs1ELLRWELD4hp6JH5HDQN8__NIhq_dQuAEg/https/theworldtravelguy.com/wp-content/uploads/2019/03/DSCF4529_1200.jpg?width=1014&height=676'
    },
    {
        name: 'Mount Fuji',
        user: '63127d66bd5df3158d31150c',
        city: '630f934f844315c76f0bd3ea',
        price: 200,
        duration: 480,
        likes: [1, 1, 1, 1, 1, 1, 1],
        tags: ['#culture', '#snow', '#hikkinglove'],
        photo: 'https://www.meteorologiaenred.com/wp-content/uploads/2020/04/Vistas-del-monte.jpg'
    },
    {
        name: 'Matira beach',
        user: '63127d66bd5df3158d31150c',
        city: '630f934f844315c76f0bd3e8',
        price: 100,
        duration: 300,
        likes: [1, 1, 1, 1, 1, 1, 1],
        tags: ['#beach', '#adventure', '#sun'],
        photo:'https://images-ext-2.discordapp.net/external/5JogXXNw2iYuKd0LqSkDidZ7UnJlGJEWDivz6zgb4_Q/https/media.kiwi.com/wp-content/uploads/2021/06/veligandu-island-beach-of-the-maldives-795x360.jpg'
    },
    {
        name: 'Mount Otemanu',
        user: '63127d65bd5df3158d31150a',
        city: '630f934f844315c76f0bd3e8',
        price: 120,
        duration: 240,
        likes: [1, 1, 1, 1, 1, 1, 1,1,1,1,1,11],
        tags: ['#beach', '#adventure', '#treking'],
        photo:'https://images-ext-1.discordapp.net/external/ENkeAeE0mgvgdWCKzVzYC2NQh-yhcC2FnBNkEqlzMpA/https/www.gototravelguides.net/images/photos/borabora_P1000780.jpg?width=901&height=676'
    },
    {
        name: 'National Park Roraima',
        user: '63127d66bd5df3158d31150c',
        city: '630f934f844315c76f0bd3e9',
        price: 200,
        duration: 480,
        likes: [1, 1, 1, 1, 1, 1, 1],
        tags: ['#', '#', '#'],
        photo: 'https://dam.ngenespanol.com/wp-content/uploads/2021/04/GettyImages-139812035.jpg'
    },
    {
        name: 'Angel Falls',
        user: '63127d66bd5df3158d31150c',
        city: '630f934f844315c76f0bd3e9',
        price: 200,
        duration: 120,
        likes: [1, 1, 1, 1, 1, 1, 1],
        tags: ['#', '#', '#'],
        photo: 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSybaIKh9qn2LWwkRlWHc694clhB4kB7t-VxxbLMQd14usIcjB3XzKwQnz7huOfgXz1'
    },
    {
        name: 'Veligandu Island Beach',
        user: '63127d65bd5df3158d31150a',
        city: '630f934f844315c76f0bd3eb',
        price: 20,
        duration: 160,
        likes: [1, 1, 1, 1, 1, 1, 1,1,1,1,1,1],
        tags: ['#nature', '#beach', '#peace'],
        photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRwX0gKqqXzOYRIundnlgd23wSymKaGrizSsYlcxoClNhZeFTsmJSgjlSPPCzVrmiZNBM&usqp=CAU'
    },
    {
        name: 'Tsunami Monument',
        user: '63127d66bd5df3158d31150c',
        city: '630f934f844315c76f0bd3eb',
        price: 10,
        duration: 60,
        likes: [1, 1, 1, 1, 1, 1, 1],
        tags: ['#nature', '#beach', '#peace'],
        photo: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/af/19/85/tsunami-monument.jpg?w=1200&h=-1&s=1'
    }


)