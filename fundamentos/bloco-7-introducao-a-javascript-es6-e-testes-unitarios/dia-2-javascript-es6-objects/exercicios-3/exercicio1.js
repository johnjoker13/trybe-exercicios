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
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const entregador = order.order.delivery['deliveryPerson'];
    const destinatario = order['name']; 
    const telephone = order['phoneNumber'];
    const rua = order.address['street'];
    const numeroCasa = order.address['number'];
    const numeroApt = order.address['apartment'];
    return `Olá ${entregador}, entrega para: ${destinatario}, Telefone: ${telephone}, R.${rua}, Nº: ${numeroCasa}, AP: ${numeroApt}`;    
  }
  
  console.log(customerInfo(order));
  
 const orderModifier = (order) => {
    const novoDestinatario = order.name = "Luiz Silva";
    const pedido = Object.keys(order.order.pizza);
    const bebida = order.order.drinks.coke.type;
    const total = order.payment.total = 50.00;
    return `Olá ${novoDestinatario}, o total do seu pedido de ${pedido[0]}, ${pedido[1]} e ${bebida} é de R$ ${total} `;
  }
  
console.log(orderModifier(order));