// let x = [1, 'Jack']
// console.log(typeof x[1])
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//loop
// let end = 100;
// let array = Array
// for (let index = 0; index < end; index++) {
//     array[index] = index
// }
// console.log(array)
//数组的解构
// function f([first, second]: [number, number]) {
//     console.log(first);
//     console.log(second);
// }
// const input:[number, number] = [1,2]
// f(input);
//对象的解构
// let a = {
//     _name:'Jack',
//     age:12,
//     gender:'male'
// }
// let {_name,age,gender} = a
// let res = `name:${_name},age:${age},gender:${gender}`
// console.log(res)
// 接口的知识
// interface SquareConfig {
//     color?: string;
//     width?: number;
//   }
// function createSquare(config: SquareConfig): {color: string; area: number} {
//     let newSquare = {color: "white", area: 100};
//     if (config.color) {
//       newSquare.color = config.color;
//     }
//     if (config.width) {
//       newSquare.area = config.width * config.width;
//     }
//     return newSquare;
//   }
//   let mySquare = createSquare({width: 12});
//   console.log(mySquare)
// interface Demo{
//     readonly name:string
// }
// let obj:Demo = {name:'Jack'} 
// console.log(obj)
// interface SquareConfig {
//     color?: string;
//     width?: number;
// }
// function createSquare(config: SquareConfig): { color: string; area: number } {
//     let newSquare = { color: "white", area: 100 };
//     if (config.color) {
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }
// let mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig);
// console.log(mySquare)
// class Grid {
//     static origin = {x: 0, y: 0};
//     calculateDistanceFromOrigin(point: {x: number; y: number;}) {
//         let xDist = (point.x - Grid.origin.x);
//         let yDist = (point.y - Grid.origin.y);
//         return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
//     }
//     constructor (public scale: number) { }
// }
// let grid1 = new Grid(1.0);  // 1x scale
// let grid2 = new Grid(5.0);  // 5x scale
// console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
// console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));
// console.log(Grid.origin)
// abstract class and interface
// interface Animal{
//     run():void;
// }
// class Dog implements Animal{
//     run(): void {
//         console.log('Dog Run')
//     }
// }
// let dog = new Dog()
// dog.run()
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.run = function () {
        console.log('run');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.howl = function () {
        console.log('wangwang');
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.howl();
dog.run();
