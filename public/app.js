"use strict";
// const ancher = document.querySelector('a')!;
// // if (ancher) {
// //   console.log(ancher.href);
// // }
// console.log(ancher.href);
// const form = document.querySelector('form')!;
var form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
var type = document.querySelector('#type');
var toFrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault(),
        console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
