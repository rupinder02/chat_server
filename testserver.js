
( () => {
    // const arr = [1,2,3,4];
    /* ========== map, filter and reduce ============ */
    // const res = arr.map( elem => elem ** 2);
    // const res = arr.filter( elem => elem%2 == 0);
    // const res = arr.reduce( (sum, elem) => sum + elem, 2);
    // console.log(res);

    // ========== 
    //console.log(num1); // gonna throw reference error bec's no hoisting in let
   // let num1 = 23;
    
    // var num2 = 24;
    // var num2 = 25;   // redeclaration of variable allowed with var
    // console.log(num2);

    // let num2 = 24;  
    // let num2 = 25;   // redeclaration of variable not allowed with let
    // console.log(num2);

    // let num3 = 33;
    // ( () => {
    //     num3 = 44;
    //     console.log(num3);
    // })();
    // console.log(num3);

    // ======= Array methods =========

    // let arr = [23,33,9,19,3,81];
    // console.log(arr.findIndex((elem) => elem == 59))
    // console.log(arr.lastIndexOf(59))
    
    // check if an element exists in an array

    // console.log(arr.includes(59));  // returns true
    // console.log(arr.includes(323)); // returns false

    // console.log(arr.every((elem) => elem % 2));  // checks if every elem of an 
    // arr satisfies a condition

    // ========= string methods ==========
    // let num = 2352351;
    // console.log(num.toString().split('').reverse().join('')) // reversing a number

    // let nameArr = [{ 'name': 'Rupinder', 'age': 23 }, { 'name': 'Abhi', 'age': 33 }, { 'name': 'Ravi', 'age': 24}];
    // const res = nameArr.find(elem => elem.name == 'Abhi');
    // console.log(res);

    // console.log(num);
    // var num = 23;

    // let num = 10;
    // var count = 0;
    // while(num--){
    //     count++;
    //     setTimeout(() => {
    //         console.log(count);
    //     },10)
    // }

    // setTimeout(() => {
    //     console.log('inside timeout');
    // }, 10)


    // setImmediate(() => {   // executes after the end of current event loop cycle
    //     console.log('inside immideiate');
    // })

    // process.nextTick(() => {   // executes in next event loop cycle
    //     console.log('inside nexttick');
    // })

})();


setImmediate(() => {
    console.log('inside immidiate 1');
});

console.log('hello there');

console.log('hello there');
console.log('hello there');
console.log('hello there');
console.log('hello there');

setTimeout(() => {
    console.log('inside timeout');
}, 0);

setImmediate(() => {
    console.log('inside immideiate 2');
})

process.nextTick(() => {
    console.log('inside nexttick');
})
console.log('hello there');
console.log('hello there');
console.log('hello there');
console.log('hello there');



