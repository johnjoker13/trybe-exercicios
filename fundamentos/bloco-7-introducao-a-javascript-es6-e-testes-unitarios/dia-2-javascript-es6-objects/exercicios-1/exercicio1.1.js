const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };

const lastName = 'Ferreira';
let newKey = 'Lastname';

const appendObject = (obj, key, vlr) => { 
    newKey = vlr;
    obj[key] = vlr;
    return obj;
};

console.log(appendObject(customer, newKey, lastName));