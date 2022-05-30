const products = [
  {
    id: 1,
    name: 'Влажные солфетки',
    price: 20,
    img: '/img/global/product-img-1.png',
    count: 0,
  },
  {
    id: 2,
    name: 'Сухие солфетки',
    price: 25,
    img: '/img/global/product-img-2.png',
    count: 0,
  },
  {
    id: 3,
    name: 'Сухие салфетки BOX',
    price: 30,
    img: '/img/global/product-img-3.png',
    count: 0,
  },
  {
    id: 4,
    name: 'Влажные солфетки',
    price: 20,
    img: '/img/global/product-img-1.png',
    count: 0,
  },
  {
    id: 5,
    name: 'Сухие солфетки',
    price: 25,
    img: '/img/global/product-img-2.png',
    count: 0,
  },
  {
    id: 6,
    name: 'Сухие салфетки BOX',
    price: 30,
    img: '/img/global/product-img-3.png',
    count: 0,
  },
  {
    id: 7,
    name: 'Влажные солфетки',
    price: 20,
    img: '/img/global/product-img-1.png',
    count: 0,
  },
  {
    id: 8,
    name: 'Сухие солфетки',
    price: 25,
    img: '/img/global/product-img-2.png',
    count: 0,
  },
  {
    id: 9,
    name: 'Сухие салфетки BOX',
    price: 30,
    img: '/img/global/product-img-3.png',
    count: 0,
  },
  {
    id: 10,
    name: 'Влажные солфетки',
    price: 20,
    img: '/img/global/product-img-1.png',
    count: 0,
  },
  {
    id: 11,
    name: 'Сухие солфетки',
    price: 25,
    img: '/img/global/product-img-2.png',
    count: 0,
  },
  {
    id: 12,
    name: 'Сухие салфетки BOX',
    price: 30,
    img: '/img/global/product-img-3.png',
    count: 0,
  },
  {
    id: 13,
    name: 'Влажные солфетки',
    price: 20,
    img: '/img/global/product-img-1.png',
    count: 0,
  },
  {
    id: 14,
    name: 'Сухие солфетки',
    price: 25,
    img: '/img/global/product-img-2.png',
    count: 0,
  },
  {
    id: 15,
    name: 'Сухие салфетки BOX',
    price: 30,
    img: '/img/global/product-img-3.png',
    count: 0,
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
  name: 'Муниса ',
  lastName: 'Имранова',
  city: 'Душанбе',
  street: 'ул Рудаки 32, дом 3, кв 92',
  phone: '+992 90-101-0000',
  email: 'my-ami@gmail.com',
  password: '450640fkklhl;jdhf',
}
const cart = []
const order = []

const useProducts = () => useState('products', () => products)
const useActions = () => useState('actions', () => actions)
const useUser = () => useState('user', () => user)
const useCart = () => useState('cart', () => cart)
const useOrder = () => useState('order', () => order)

const currentProduct = productId => {
  const productsState = useProducts()
  return productsState.value.find(product => product.id === productId)
}

const currentProductInCart = productId => {
  const cartState = useCart()
  return cartState.value.find(item => item.id === productId)
}

const addToCart = productId => {
  const cartState = useCart()
  const productsState = useProducts()
  const product = productsState.value.find(p => p.id === productId)
  const productInCart = cartState.value.find(i => i.id === productId)

  if (cartState.value.length === 0) {
    ++product.count
    return cartState.value.push(product)
  }

  if (productInCart) {
    ++productInCart.count
  } else {
    ++product.count
    cartState.value.push(product)
  }
}

const addOneProductToCart = productId => {
  const cartState = useCart()
  const product = currentProduct(productId)
  const productInCart = currentProductInCart(productId)

  if (!productInCart) {
    cartState.value.push(product)
  }

  ++product.count
}

const deleteOneProductFromCart = productId => {
  const product = currentProduct(productId)
  const cartState = useCart()

  --product.count

  if (product.count === 0) {
    cartState.value = cartState.value.filter(item => item.id !== product.id)
  }
}

const deleteProductFromCart = productId => {
  const cartState = useCart()
  const product = currentProduct(productId)

  product.count = 0
  cartState.value = cartState.value.filter(item => item.id !== productId)
}

const addOrder = elements => {
  const orderState = useOrder()
  orderState.value.push(elements)

  console.log(order)
}

export {
  useProducts,
  useActions,
  useUser,
  useCart,
  useOrder,
  addToCart,
  addOneProductToCart,
  deleteOneProductFromCart,
  deleteProductFromCart,
  addOrder,
}
