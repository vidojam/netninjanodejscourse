// Global object

//console.log(global);

//global.setTimeout(() => {
//    console.log( 'in the timeout');
//}, 3000);

// or, can run without global (1000 = 1 second)

//run once
// setTimeout(() => {
//     console.log( 'in the timeout');
//     clearInterval(int); //clears after 3rd interval
// }, 3000);

// // run every second
// const int = setInterval(() => {
//     console.log('in the interval')
// }, 1000);

//result
// $ node global
// in the interval
// in the interval
// in the timeout

//console.log(__dirname);
//C:\Users\Dell\OneDrive\Desktop\projects_2022\nodejs\node-crash-course

//console.log(__filename);
//C:\Users\Dell\OneDrive\Desktop\projects_2022\nodejs\node-crash-course\global.js

