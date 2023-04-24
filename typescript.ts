// const sum = (a: number , b: number) => {
// 	return a + b;
// }
// const answer = sum(4, 5);
// console.log(answer);

// boolean
let isCool: boolean = true;

// number
let age: number = 56;

// string
let eyeColor = 'blue';
let favouriteQuote = `Im not old, I'm only ${age}`;

// Array
let pets: string[] = ['cat', 'dog', 'bird'];
let pets2: Array<string> = ['dragon','lion', 'lizard'];

// object
let wizard: object = {
	a: 'john'
}

// null and undefined 
let meh: undefined = undefined;
let noo: null = null;

// Tuple 
let basket : [string, number];
basket = ['basketball', 5];

// Enum
enum Size { Small= 1, Medium= 2, Large=3};
let sizeName: string = Size[2];
let sizeName2: number = Size.Small;
// console.log(Size);
// console.log(Size.Small);
// console.log(Size[2]);

// Any !!!!!! - CAREFUL
let whatever: any = 'aaaaaaargh noooo'
whatever = basket;

// void - FOR FUNCTION THAT DOESN'T RETURN ANYTHING
let sing = (): void => {
	console.log('lalalala');
}

// never - for 1) never return sth, 2) never be true ( can't have reachable end point)
let error = (): never => {
	throw Error('ooops');
}

// interface
interface RobotArmy {
	count: number,
	type: string,
	magic?: string //? make it optional ( if you don't include it, won't throw error)
}

let fightRobotArmy = (robots: RobotArmy) => {
	// console.log('FIGHT!!');
}

let fightRobotArmy2 = (robots: {count: number, type: string, magic: string}) => {
	console.log('FIGHT!!');
}

fightRobotArmy({count: 2, type: 'dragon'})

// type assertion
interface CatArmy {
	count: number,
	type: string,
	magic: string
}

let dog = {} as CatArmy;
dog.count

// function
let fightRobotArmy3 = (robots: RobotArmy): void => {
	console.log('FIGHT!!');
}

let fightRobotArmy4 = (robots: {count: number, type: string, magic: string}): number => {
	console.log('FIGHT!!');
	return 5;
}

//class

class Animal {
	public sing: string = 'lalalala' //public(default) || private
	constructor(sound: string) {
		this.sing = sound
	}

	greet(): string {
		return `Hello ${this.sing}`
	}
}

let lion = new Animal('RAAAWWRR');
lion.greet();
lion.sing;

// union
let confused : string | number | boolean = true;

let x = 4;
// x = 'hello' // walau gak dikasih :number, nanti akan dikasih error dari typescriptnya

