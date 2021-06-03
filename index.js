'use strict';

const user  = {
  name: 'Anna',
  someFn(lastName, age) {
    console.log('Hi ' + this.name, lastName, age);
  }
}

// const func = user.someFn.bind(user);
const func = user.someFn;


func.call(user, 'Leichenk', 15);
func.apply(user, ['Leichenk', 15]);



function User () {
  this.name = 'Anna';
}
const user2 = new User();

console.log(user2.name);

function Student (name, age) {
  this.name = name;
  this.age = age;
}

const student = new Student ('Anna', 16);