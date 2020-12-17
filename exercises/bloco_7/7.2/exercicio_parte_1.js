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
order.name = 'Braddock';
order.payment.total = 50;

const customerInfo = (order) =>
  `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address['street']}, N: ${order.address['number']}, AP: ${order.address['apartment']}`;

console.log(customerInfo(order));

const orderModifier = (order) => {
  let sabor = Object.keys(order.order.pizza);
  const answer = `Olá ${order.name} o total do seu pedido de ${sabor[0]}, ${sabor[1]} e ${order.order.drinks.coke.type} é R$${order.payment.total},00 `;
  return answer;
};

console.log(orderModifier(order));
