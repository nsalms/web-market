export const state = () => ({
  products: [{
    id: 0,
    imgUrl: "https://i.imgur.com/yFlUUWz.png",
    title: "Карандаш",
    description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: 59,
  },{
    id: 2,
    imgUrl: "https://i.imgur.com/jXLMRqn.jpg",
    title: "Фотоаппарат",
    description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: 23599,
  },{
    id: 3,
    imgUrl: "https://i.imgur.com/5nQgPGX.jpg",
    title: "Автомобиль",
    description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: 2499999,
  },{
    id: 4,
    imgUrl: "https://i.imgur.com/nf1u2JE.jpg ",
    title: "Калькулятор",
    description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: 449,
  },{
    id: 5,
    imgUrl: "https://i.imgur.com/sFZyHzY.jpg",
    title: "Подвисная система",
    description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: 3799,
  },{
    id: 6,
    imgUrl: "https://i.imgur.com/tWvKKSO.jpg",
    title: "Кашпо с функцией автополива",
    description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: 949,
  },],
})

export const actions = {

}

export const mutations = {

  addNewProduct(state, {title, description, imgUrl, price}) {

    console.log(price)
    // Getting a next id
    let nextId = 0
    if (state.products.length !== 0) nextId = parseInt(state.products.slice(-1)[0].id) + 1
    
    state.products.push({
      id: nextId,
      title: title,
      description: description,
      imgUrl: imgUrl,
      price: price,
    })
  },

  deleteProduct(state, productId) {
    const indexOfProduct = state.products.findIndex(x => x.id == productId);
    console.log(indexOfProduct)

    state.products.splice(indexOfProduct, 1)
  },

  sortProducts(state, method) {
    if(method === "default") {
      state.products.sort((a, b) => a.id - b.id);
    }
    if(method === "min") {
      state.products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    }
    if(method === "max") {
      state.products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)).reverse();
    }
    if(method === "abc") {
      state.products.sort((a, b) => a.title.localeCompare(b.title))
    }
  }
}

export const getters = {

  getAllProducts: (state) => {
    return state.products
  }

}