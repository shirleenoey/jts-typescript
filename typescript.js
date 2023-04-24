// const sum = (a: number , b: number) => {
// 	return a + b;
// }
// const answer = sum(4, 5);
// console.log(answer);
// boolean
var isCool = true;
// number
var age = 56;
// string
var eyeColor = 'blue';
var favouriteQuote = "Im not old, I'm only ".concat(age);
// Array
var pets = ['cat', 'dog', 'bird'];
var pets2 = ['dragon', 'lion', 'lizard'];
// object
var wizard = {
    a: 'john'
};
// null and undefined 
var meh = undefined;
var noo = null;
// Tuple 
var basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
var sizeName = Size[2];
var sizeName2 = Size.Small;
// console.log(Size);
// console.log(Size.Small);
// console.log(Size[2]);
// Any !!!!!! - CAREFUL
var whatever = 'aaaaaaargh noooo';
whatever = basket;
// void - FOR FUNCTION THAT DOESN'T RETURN ANYTHING
var sing = function () {
    console.log('lalalala');
};
// never - for 1) never return sth, 2) never be true ( can't have reachable end point)
var error = function () {
    throw Error('ooops');
};
var fightRobotArmy = function (robots) {
    // console.log('FIGHT!!');
};
var fightRobotArmy2 = function (robots) {
    console.log('FIGHT!!');
};
fightRobotArmy({ count: 2, type: 'dragon' });
var dog = {};
dog.count;
// function
var fightRobotArmy3 = function (robots) {
    console.log('FIGHT!!');
};
var fightRobotArmy4 = function (robots) {
    console.log('FIGHT!!');
    return 5;
};
//class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lalalala'; //public(default) || private
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello ".concat(this.sing);
    };
    return Animal;
}());
var lion = new Animal('RAAAWWRR');
lion.greet();
lion.sing;
// union
var confused = true;
var x = 4;
// x = 'hello' // walau gak dikasih :number, nanti akan dikasih error dari typescriptnya
