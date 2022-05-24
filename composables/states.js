const products = [
    {
        id: 1,
        name: 'Влажные солфетки',
        price: 20,
        img: '/img/global/product-img-1.png',
    },
    {
        id: 2,
        name: 'Сухие солфетки',
        price: 25,
        img: '/img/global/product-img-2.png',
    },
    {
        id: 3,
        name: 'Сухие салфетки BOX',
        price: 30,
        img: '/img/global/product-img-3.png',
    },
    {
        id: 4,
        name: 'Влажные солфетки',
        price: 20,
        img: '/img/global/product-img-1.png',
    },
    {
        id: 5,
        name: 'Сухие солфетки',
        price: 25,
        img: '/img/global/product-img-2.png',
    },
    {
        id: 6,
        name: 'Сухие салфетки BOX',
        price: 30,
        img: '/img/global/product-img-3.png',
    },
    {
        id: 7,
        name: 'Влажные солфетки',
        price: 20,
        img: '/img/global/product-img-1.png',
    },
    {
        id: 8,
        name: 'Сухие солфетки',
        price: 25,
        img: '/img/global/product-img-2.png',
    },
    {
        id: 9,
        name: 'Сухие салфетки BOX',
        price: 30,
        img: '/img/global/product-img-3.png',
    },
    {
        id: 10,
        name: 'Влажные солфетки',
        price: 20,
        img: '/img/global/product-img-1.png',
    },
    {
        id: 11,
        name: 'Сухие солфетки',
        price: 25,
        img: '/img/global/product-img-2.png',
    },
    {
        id: 12,
        name: 'Сухие салфетки BOX',
        price: 30,
        img: '/img/global/product-img-3.png',
    },
    {
        id: 13,
        name: 'Влажные солфетки',
        price: 20,
        img: '/img/global/product-img-1.png',
    },
    {
        id: 14,
        name: 'Сухие солфетки',
        price: 25,
        img: '/img/global/product-img-2.png',
    },
    {
        id: 15,
        name: 'Сухие салфетки BOX',
        price: 30,
        img: '/img/global/product-img-3.png',
    },
]
const actions = [
    {id: 1, name: 'Заказы', component: 'ProfileOrders', query: 'orders'},
    {id: 2, name: 'Адрес', component: 'ProfileAdress', query: 'adress'},
    {id: 3, name: 'Настройки аккаунта', component: 'ProfileSettings', query: 'settings'},
    {id: 4, name: 'Выйти', component: '', query: 'quit'},
]
const user = {
    id: 1,
    name: 'Муниса Имранова',
    city: 'Душанбе',
    street: 'ул Рудаки 32, дом 3, кв 92',
    phone: '+992 90-101-0000',
    email: 'my-ami@gmail.com',
    password: '450640fkklhl;jdhf',
}

export const useProducts = () => useState('products', () => products)
export const useActions = () => useState('actions', () => actions)
export const useUser = () => useState('user', () => user)
