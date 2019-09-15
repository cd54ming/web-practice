//tutoral from: https://developer.mozilla.org/zh-TW/docs/Learn/JavaScript/Objects/Basics

var person = {
  name : {
    first : 'Chin',
    last : 'Ming'
  }, //subobjects
  age : 23,
  gender : 'male',
  interests : ['musics', 'movies'],
  bio : function() {
    alert(this.name.first + '-' + this.name.last + ' likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting : function() {
    // alert('Hi! my name is ' + this.name.first + ' ' + this.name.last + '.');

    //use associative array.
    alert('Hi! my name is ' + this['name']['first'] + '-' + this['name']['last'] + '.');
  }
};


// console.log(person);
// console.log(person['age']);
// console.log(person.bio());
// console.log(person.greeting());


//update object's member
person.age = 33;
person['name'].first = 'Lin';

// console.log(person.greeting());

// create object's member
person['eyes color'] = 'hazel';
person.farewell = function() {alert('Bye! everybody!')};

var myDataName = 'height';
var myDataValue = '1.78m';

//can assign a var to object's member, dot notation can't do this!
person[myDataName] = myDataName;
