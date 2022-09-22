const xyz = require('./people');

console.log(xyz.people, xyz.ages);

// result...access to properties in 
// [ 'yoshi', 'ryu', 'chun-li', 'mario' ]
// [ 'yoshi', 'ryu', 'chun-li', 'mario' ] [ 20, 25, 30, 35 ]

//destructuring...
//onst { people, ages } = require('./people');
// [ 'yoshi', 'ryu', 'chun-li', 'mario' ] [ 20, 25, 30, 35 ]


const os = require('os'); // already built into node.js.

//console.log(os);  Find out information about the current operating system this is running on.

//console.log(os.platform(), os.homedir());// result: win32 C:\Users\Dell
