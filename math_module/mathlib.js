module.exports = function (){
  return {
    add: function(num1, num2) {
         // add code here
         let sum = num1 + num2
         console.log(`${sum} is the sum of ${num1} & ${num2}`)
    },
    multiply: function(num1, num2) {
         // add code here
         let product = num1 * num2
         console.log(`${product} is the product of ${num1} * ${num2}`)
    },
    square: function(num) {
         // add code here
         let square = num * num
         console.log(`${square} is the squared result of ${num}`)
    },
    random: function(num1, num2) {
         // add code here
         num3 = Math.floor((Math.random() * (num2 - num1 +1) + num1));
         console.log(`${num3} is a random number between ${num1} & ${num2}`)

    }
  }
};
