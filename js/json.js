//Javascript Object Notation
//JSON
const user = { id: 18, name: 'El Mimir', job: 'sleeping' };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir Road',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'actress',
    },
    isExpensive: false
}
const shopstringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopstringified);
const converted = JSON.parse(shopstringified);
console.log(converted);