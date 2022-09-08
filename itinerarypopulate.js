require('dotenv').config()
const db = require('./config/database')
const Itinerary = require('./models/Itinerary')

Itinerary.create(
    { // cambodia
        name: 'Angkor Wats Temple Complex',
        user: '63127d66bd5df3158d31150c',
        city: '630f934f844315c76f0bd3e6',
        price: 200,
        duration: 120,
        likes: [1, 1, 1, 1, 1, 1, 1],
        tags: ['#siemreap', '#adventure', '#budism'],
        photo: 'https://www.mundo-nomada.com/wp-content/uploads/2020/03/Templos-de-Angkor-Wat-e1590459718747-1200x900.jpg'
    },
    {//bali
        name: 'Temple of Water',
        user: '63127d65bd5df3158d31150a',
        city: '630f934f844315c76f0bd3e7',
        price: 20,
        duration: 60,
        likes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        tags: ['#nature', '#temple', '#peace'],
        photo: 'https://images-ext-1.discordapp.net/external/hJTN2F_gs1ELLRWELD4hp6JH5HDQN8__NIhq_dQuAEg/https/theworldtravelguy.com/wp-content/uploads/2019/03/DSCF4529_1200.jpg?width=1014&height=676'
    },
    { //honshu
        name: 'Mount Fuji',
        user: '63127d66bd5df3158d31150c',
        city: '630f934f844315c76f0bd3ea',
        price: 200,
        duration: 480,
        likes: [1, 1, 1, 1, 1, 1, 1],
        tags: ['#culture', '#snow', '#hikkinglove'],
        photo: 'https://www.meteorologiaenred.com/wp-content/uploads/2020/04/Vistas-del-monte.jpg'
    },
    { //tahiti
        name: 'Matira beach',
        user: '63127d66bd5df3158d31150c',
        city: '630f934f844315c76f0bd3e8',
        price: 100,
        duration: 300,
        likes: [1, 1, 1, 1, 1, 1, 1],
        tags: ['#beach', '#adventure', '#sun'],
        photo: 'https://images-ext-2.discordapp.net/external/5JogXXNw2iYuKd0LqSkDidZ7UnJlGJEWDivz6zgb4_Q/https/media.kiwi.com/wp-content/uploads/2021/06/veligandu-island-beach-of-the-maldives-795x360.jpg'
    },
    {//tahiti
        name: 'Mount Otemanu',
        user: '63127d65bd5df3158d31150a',
        city: '630f934f844315c76f0bd3e8',
        price: 120,
        duration: 240,
        likes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11],
        tags: ['#beach', '#adventure', '#treking'],
        photo: 'https://images-ext-1.discordapp.net/external/ENkeAeE0mgvgdWCKzVzYC2NQh-yhcC2FnBNkEqlzMpA/https/www.gototravelguides.net/images/photos/borabora_P1000780.jpg?width=901&height=676'
    },
    {//bolivar
        name: 'National Park Roraima',
        user: '63127d66bd5df3158d31150c',
        city: '630f934f844315c76f0bd3e9',
        price: 200,
        duration: 480,
        likes: [1, 1, 1, 1, 1, 1, 1],
        tags: ['#', '#', '#'],
        photo: 'https://dam.ngenespanol.com/wp-content/uploads/2021/04/GettyImages-139812035.jpg'
    },
    {//bolivar
        name: 'Angel Falls',
        user: '63127d66bd5df3158d31150c',
        city: '630f934f844315c76f0bd3e9',
        price: 200,
        duration: 120,
        likes: [1, 1, 1, 1, 1, 1, 1],
        tags: ['#', '#', '#'],
        photo: 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSybaIKh9qn2LWwkRlWHc694clhB4kB7t-VxxbLMQd14usIcjB3XzKwQnz7huOfgXz1'
    },
    {//honshu
        name: 'Honshu Tour',
        user: '63127d65bd5df3158d31150a',
        city: '630f934f844315c76f0bd3ea',
        price: 20,
        duration: 160,
        likes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        tags: ['#interesting', '#culture', '#croud'],
        photo: 'https://s3-ap-northeast-1.amazonaws.com/bhive-jp/media/yabai/article/2699/43.jpg'
    },
    { //maldivas
        name: 'Tsunami Monument',
        user: '63127d66bd5df3158d31150c',
        city: '630f934f844315c76f0bd3eb',
        price: 10,
        duration: 60,
        likes: [1, 1, 1, 1, 1, 1, 1],
        tags: ['#nature', '#beach', '#peace'],
        photo: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/af/19/85/tsunami-monument.jpg?w=1200&h=-1&s=1'
    },
    {//bali
        name: 'Through the Fields',
        user: '63127d65bd5df3158d31150a',
        city: '630f934f844315c76f0bd3e7',
        price: 20,
        duration: 160,
        likes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        tags: ['#nature', '#peace'],
        photo: 'https://d18sx48tl6nre5.cloudfront.net/webp_md_28ddbaa5efa991d343efc7c1d602432d.webp'
    },
    { //maldivas
        name: 'Veligandu Island Beach',
        user: '63127d65bd5df3158d31150a',
        city: '630f934f844315c76f0bd3ec',
        price: 20,
        duration: 160,
        likes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        tags: ['#nature', '#beach', '#peace'],
        photo: 'https://i.im.ge/2022/09/06/OZ78aa.veligandu-island-beach-of-the-maldives-795x360.jpg'
    },
    {//bali 
        name: 'Ubud',
        user: '63127d66bd5df3158d31150c',
        city: '630f934f844315c76f0bd3e7',
        price: 20,
        duration: 160,
        likes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        tags: ['#nature', '#beach', '#peace'],
        photo: 'https://gadsventure.com/wp-content/uploads/2019/12/Webp.net-resizeimage-2019-12-18T144431.703-800x600.jpg'
    },
    {//zambia 
        name: 'Traditional', 
        user: '63127d65bd5df3158d31150a',
        city: '630f934f844315c76f0bd3f0',
        price: 20,
        duration: 160,
        likes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        tags: ['#tradition', '#dance', '#happyness'],
        photo: 'https://gpjs3bucket.s3.amazonaws.com/wp-content/uploads/2018/08/26141032/GPJNew_Zambia_PP_Crowds-1_Web.jpg'
    },
    {//zambia
        name: 'Adventure Time',
        user: '63127d66bd5df3158d31150c',
        city: '630f934f844315c76f0bd3f0',
        price: 20,
        duration: 160,
        likes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        tags: ['#nature', '#adrenaline', '#power'],
        photo: 'https://www.southluangwasafaris.com/wp-content/uploads/2018/04/livadv_2013-03-207.x89638.jpg'
    },
    {//zambia
        name: 'Fauna and Flora',
        user: '63127d65bd5df3158d31150a',
        city: '630f934f844315c76f0bd3f0',
        price: 20,
        duration: 160,
        likes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        tags: ['#nature', '#animals', '#peace'],
        photo: 'https://www.enkosiafrica.com/wp-content/uploads/2018/01/enkosi-africa-safari-zambia-lower-zambezi-sausage-tree-camp-.jpg'
    },
    {//cairo
        name: 'Water, Sand and Air',
        user: '63127d66bd5df3158d31150c',
        city: '630f934f844315c76f0bd3f1',
        price: 20,
        duration: 160,
        likes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        tags: ['#nature', '#adventure', '#amazing'],
        photo: 'https://images.memphistours.com/large/495962174_Cairo%20City%20Tour.jpg'
    },
    {//cairo
        name: 'City Food Tour',
        user: '63127d66bd5df3158d31150c',
        city: '630f934f844315c76f0bd3f1',
        price: 20,
        duration: 160,
        likes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        tags: ['#yummy!', '#restaurant', '#delicious'],
        photo: 'https://c.myholidays.com/blog/blog/content/images/2021/12/Citadel-View-Restaurant-Savoring-French-Cuisines-min.jpg'
    },
    {//cairo
        name: 'Citadel Tour',
        user: '63127d66bd5df3158d31150c',
        city: '630f934f844315c76f0bd3f1',
        price: 20,
        duration: 160,
        likes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        tags: ['#culture', '#peace'],
        photo: 'https://i.im.ge/2022/08/31/OERMl1.salahCitadelCairoCity.png'
    }
)