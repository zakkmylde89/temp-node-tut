// Names for Modules lesson
// We decide which parts of the file are exported to be shared with rest of the program

// local - elements that will NOT be exported
const secret = 'SUPER SECRET';

// share - elements that will be exported
const john = 'John';
const peter = 'Peter';

module.exports = { john, peter }; // creates object with elements we want exported