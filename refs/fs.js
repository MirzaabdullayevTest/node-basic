// file system 
const fs = require('fs')
const path = require('path')
const dir = path.join(__dirname, 'test')
// console.log(fs);

// const promise = new Promise((resolve, reject) => {
//     fs.mkdir(path.join(__dirname, 'test'), (err) => {
//         if (err) reject('1' + err);
//         else resolve('Papka yaratildi');
//     })
// }).then((res) => {
//     console.log(res);
//     fs.rmdir(dir, (err) => {
//         if (err) console.log('2', err);
//         else console.log('Papka o`chirildi');
//     })
// }).catch((err) => {
//     console.log(err);
// })


// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) console.log('1' + err);
//     else {
//         fs.rmdir(dir, (err) => {
//             if (err) console.log('2', err);
//             else console.log('Papka o`chirildi');
//         })
//     }
// })

// fs.writeFile(path.join(__dirname, 'text.txt'), 'Hello world',
//     (err) => {
//         if (err) console.log(err);
//         else {
//             fs.appendFile(path.join(__dirname, 'text.txt'), ' from UZB',
//                 (err) => {
//                     if (err) console.log(err);
//                     else {
//                         fs.readFile(path.join(__dirname, 'text.txt'), 'utf-8',
//                             (err, data) => {
//                                 if (err) console.log(err);
//                                 else console.log(data);
//                             })
//                     }
//                 })
//         }
//     })

// fs.unlink(path.join(__dirname, 'text.txt'), (err) => {
//     if (err) console.log(err);
// })

// fs.rename(
//     path.join(__dirname, 'text.txt'),
//     path.join(__dirname, 'newText.txt'),
//     (err) => {
//         if (err) console.log(err);
//     }
// )

// fs.rename(
//     path.join(__dirname, 'text'),
//     path.join(__dirname, 'test'),
//     (err) => {
//         if (err) console.log(err);
//     }
// )