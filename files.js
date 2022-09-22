const fs = require('fs');

// READING FILES - //takes in two arguments. Second function (callback) will fire when first is complete. Method is asyncronous. Doesn't block our code.

// fs.readFile('./docs/blog1.txt', (err, data) => { 
//     if (err) {console.log(err)
//     }
//     //console.log(data); // result: <Buffer 68 65 6c 6c 6f 2c 20 6e 69 6e 6a 61 73> A package of data...is a buffer
//     // to see string use the toString method
//     console.log(data.toString());
//     // result:
//     // run: node files
//     // hello, ninjas
//     console.log('last line'); //prints before string due to async.
// });




// WRITING FILES - three arguments and asyncronous

// fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
//     console.log('file was written');
// }); // will replace wharever is in file blog1.txt

//if the file does not exist it creates blog2.txt
// fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
//     console.log('file was written');
// });


// DIRECTORIES - create a folder uses method mkdir - asyncronous

// check if file exists before running mkdir
// if (!fs.existsSync('./assets')){ // if it does not find it with ! reverses to run mkdir
//     fs.mkdir ('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder create');
//     });
// } else {
//     fs.rmdir('./assets',(err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder deleted');
//     })
// }


// DELETING FILES
if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted');
    });
}

