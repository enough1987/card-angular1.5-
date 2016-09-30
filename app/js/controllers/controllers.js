'use strict';

// controllers

testApp.controller("MainCtrl", function () {
  
    console.log( 'hello world!');

    this.products = [
        { 
            id: 1, title: 'non prod0', 
            description: ['qqqdfdfdfdf', 'zzrtrrtrtrtr', 'aartrtrtrtrt', 'vvvvvvvvvv'],
            img: 'img/3.jpg',
            price: 100,
            shipping: 20,
            left: 0
        },
        { 
            id: 1, title: 'apper prod1', 
            description: ['qqqdfdfdfdf', 'zzrtrrtrtrtr', 'aartrtrtrtrt', 'vvvvvvvvvv'],
            img: 'img/3.jpg',
            price: 1000,
            shipping: 20,
            left: 10
        },
        { 
            id: 2, title: 'super prod2', 
            description: ['qqqdfdfdfdf', 'zzrtrrtrtrtr', 'aartrtrtrtrt', 'vvvvvvvvvv'],
            img: 'img/3.jpg',
            price: 550,
            shipping: 20,
            left: 4
        },
        { 
            id: 3, title: 'good prod3', 
            description: ['qqqdfdfdfdf', 'zzrtrrtrtrtr', 'aartrtrtrtrt', 'vvvvvvvvvv'],
            img: 'img/3.jpg',
            price: 400,
            shipping: 20,
            left: 5
        },
        { 
            id: 4, title: 'look prod4', 
            description: ['qqqdfdfdfdf', 'zzrtrrtrtrtr', 'aartrtrtrtrt', 'vvvvvvvvvv'],
            img: 'img/3.jpg',
            price: 3300,
            shipping: 20,
            left: 2
        },
        { 
            id: 5, title: 'gggggg prod5', 
            description: ['qqqdfdfdfdf', 'zzrtrrtrtrtr', 'aartrtrtrtrt', 'vvvvvvvvvv'],
            img: 'img/3.jpg',
            price: 300,
            shipping: 20,
            left: 2
        },
        { 
            id: 6, title: 'zzzzz prod6', 
            description: ['qqqdfdfdfdf', 'zzrtrrtrtrtr', 'aartrtrtrtrt', 'vvvvvvvvvv'],
            img: 'img/3.jpg',
            price: 30220,
            shipping: 20,
            left: 2
        }
    ];


});

