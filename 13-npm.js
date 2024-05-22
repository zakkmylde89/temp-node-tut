// npm  -   global command, comes with node
// npm --v (checks version of current npm installation)

// local dependency - use it only in this particular project / used most often
// npm i <packageName>

// global dependcy -use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (command for mac/linux)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties, etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('hello people');