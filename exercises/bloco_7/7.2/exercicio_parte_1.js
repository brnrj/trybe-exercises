const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) =>
  `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address['street']}, N: ${order.address['number']}, AP: ${order.address['apartment']}`;

console.log(customerInfo(order));

const orderModifier = (order) => {
  let sabor = Object.keys(order.order.pizza);
  const answer = `Olá ${order.order.delivery.deliveryPerson} o total do seu pedido de ${
    sabor[0]
  }, ${sabor[1]} e ${order.order.drinks.coke.type} é R$${
    order.order.pizza.margherita.price +
    order.order.pizza.pepperoni.price +
    order.order.drinks.coke.price +
    order.order.delivery.price
  },00 `;
  return answer;
};

console.log(orderModifier(order));
