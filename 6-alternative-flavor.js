// Alternative way of exporting modules

module.exports.items = ['item1', 'item2'];
const person = {
    name: 'bob',
}

module.exports.singlePerson = person;

// any of these syntaxes will work. it is up to the user which one should be used