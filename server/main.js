//import './../imports/utils';
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {


  // class Person {
  //   constructor(name ='Anonymous', age=0) {
  //     this.age = age;
  //     this.name = name;
  //   }
  //   getGreeting() {
  //     //return 'Hi! I am '+this.name+'.'
  //     return `Hi I am ${this.name}.`;
  //   }
  //   getPersonDescription(){
  //     return `${this.title} ${this.name} is ${this.age} year(s) old.`;
  //   }
  // }
  // class Employee extends Person {
  //   constructor(name,age,title) {
  //     super(name, age);
  //     this.title = title;
  //   }
  //   getGreeting() {
  //     if (this.title) {
  //       return `Hi I am ${this.name}. I work as a ${this.title}.`;
  //     } else {
  //       return super.getGreeting();
  //     }
  //   }
  //   hasJob() {
  //     return !!this.title;
  //   }
  // }
  // class Programer extends Person {
  //   constructor(name, age, language='c++'){
  //     super(name,age);
  //     this.language = language;
  //   }
  //   getGreeting() {
  //     if (this.language) {
  //       return `Hi I am ${this.name}. I like ${this.language}.`;
  //     } else {
  //       return super.getGreeting();
  //     }
  //   }
  // }
  //
  // let me =new Programer('David',31,'Python');
  // console.log(me.getGreeting());
  // let he =new Programer('WAYEN');
  // console.log(he.getGreeting());



  // let user ={
  //   name: 'Dude',
  //   sayHi () {
  //     setTimeout(() => {
  //       console.log(this.name);
  //     },1000);
  //
  //   }
  // };
  // user.sayHi()

  // let numbers = [12,57,99,49];
  // let newNumbers = numbers.map((x)=> x+1);
  // console.log(newNumbers);
//  console.log(Players.find().fetch());
});

let house = {
  bedroom: 2,
  bathroom: 1.5
};
let yearBuilt = 1995;

let home = {
  ...house,
  bedroom: 3,
  yearBuilt,
  flooring:'Carpet'
};
console.log(home);
