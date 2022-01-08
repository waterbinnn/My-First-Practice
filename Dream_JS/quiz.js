//1. 계산기 

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}

console.log(calculate('add',1000,300));
console.log(calculate('substract',10000,300));
console.log(calculate('divide',12,6000));
console.log(calculate('multiply',10,300));
console.log(calculate('remainder',10,300));



// Q1 .  make a string out of an array
console.clear();

// const fruits = ['apple', 'banana', 'orange'];

// for (let fruit of fruits) {
//     console.log(fruit);
// }


// Q2. make an array out of a string

const fruits = ['🍎' , '🥝' ,'🍌' , '🍒'];

fruits.forEach((fruits) => console.log(fruits));

// Q3. make this array look like this: [5, 4, 3, 2, 1]

const array = [1, 2, 3, 4, 5];
console.log(array.reverse());

//Q4. make new array without the first two elements
{
const array2 = [1, 2, 3, 4, 5];
const newArray = array2.splice(2);
console.log(newArray);
}



class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];

  console.log(students.indexOf(90));
  
  const studentsArray = new Array();

// Q5. find a student with the score 90


// Q6. make an array of enrolled students
{
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
}

// Q8. check if there is a student with the score lower than 50
{
}

// Q9. compute students' average score
{
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
}