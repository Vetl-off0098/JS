'use strict'

// 2

// for(let i = 0; i <= 10; i++) {
//     if(i == 0) {
//         console.log(`${i} - это ноль`);
//     } else if(i%2 != 0) {
//         console.log(`${i} - нечетное число`);
//     } else {
//         console.log(`${i} - четное число`);
//     }
// }

// 3

// const post = {
//     author: "John", //это
//     postId: 23,
//     comments: [
//         {
//             userId: 10,
//             userName: "Alex",
//             text: "Lorem ipsum",
//             rating: {
//                 likes: 10,
//                 dislikes: 2 // это
//             }
//         },
//         {
//             userId: 5, // это
//             userName: "Jane",
//             text: "Lorem ipsum 2", // это
//             rating: {
//                 likes: 3,
//                 dislikes: 1
//             }
//         },
//     ]
// }

// console.log(post.author);
// console.log(post.comments[0].rating.dislikes);
// console.log(post.comments[1].userId);
// console.log(post.comments[1].text);

// 4

// const products = [
//     {
//         id: 3,
//         price: 200,
//     },
//     {
//         id: 4,
//         price: 900,
//     },
//     {
//         id: 1,
//         price: 1000,
//     },
// ];

// products.forEach(element => {
//     element.price = element.price - element.price * 0.15;
//     console.log(element.price);
// })

// 5

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

// let isImg = products.filter(product => "photos" in product && product.photos.length > 0); // а почему не работает просто "product.photos.length > 0" ?
// console.log(isImg);

const sortProductsFromLowToHigh = products.sort(function(item1, item2) {
    return item2.price - item1.price;
});
console.log(sortProductsFromLowToHigh);

// 6

// for(let i = 0; i < 10; console.log(i++)) {}

// 7

// let pir = ['x'];
// for(let i = 0; i < 20; i++) {
//     console.log(pir);
//     pir.push('x');
// }